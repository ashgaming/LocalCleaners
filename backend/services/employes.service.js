const employesModel = require('../models/employes.model');
const bookingsModel = require('../models/booking.model');
const redisClient = require('../redisClient');
const { getOtp } = require('./booking.service')
const emailService = require('./email.service')

module.exports.createEmployes = async ({
    firstname, lastname, email, password
}) => {


    if (!firstname || !email || !password) {
        throw new Error('All fiels are required');
    }

    const employes = employesModel.create({
        fullname: { firstname, lastname },
        email,
        password,
        role: 'employee'

    })

    return employes;
}


module.exports.createEmployesProfile = async ({
    email, address, profileImage, experience, phoneNumber,
}) => {

    try {

        if (!address || !profileImage || !experience || !phoneNumber) {
            throw new Error('All fiels are required');
        }

        const employes = await employesModel.findOneAndUpdate({
            email
        }, {
            address,
            profileImage,
            experience,
            phoneNumber,
            status: 'active'
        }, { new: true } // Optionally return the updated document
        ).exec();

        return employes;
    } catch (err) {
        throw new Error(err)
    }
}

module.exports.getEmployesAvailability = async () => {
    try {

        const employes = await employesModel.find().select('fullname email role').exec();

        return employes;

    } catch (error) {

        throw new Error(`Error fetching bookings: ${error.message}`);

    }
}

module.exports.StartBooking = async ({ employee, otp, _id }) => {
    try {

        const verify = await bookingsModel
            .findOneAndUpdate(
                {
                    _id,
                    employee: employee._id, // Uncomment if you need to filter by employee
                    'otp.start_otp': otp, // Correctly query the nested field using quotes
                },
                {
                    work_status: 'started'
                }
            )
            .select('otp') // Only include the 'otp' field in the result
            .exec();

        if (!verify) {
            return {
                verify: false
            }
        }

        if (verify) {

            return {
                verify: true
            }
        }


    } catch (error) {
        throw new Error(`Error fetching bookings: ${error.message}`);
    }
}

module.exports.completeWork = async ({ employee, otp, _id }) => {
    try {
        // Find and verify the booking in one query
        const booking = await bookingsModel.findOne({
            _id,
            employee,
        }).select('otp').exec();

        if (!booking) {
            throw new Error('Booking not found or employee mismatch.');
        }

        // Verify the OTP
        if (otp !== booking.otp?.end_otp) {
            return { verify: false };
        }

        // Update the work status
        await bookingsModel.updateOne(
            { _id, employee },
            { work_status: 'completed' }
        );

        return { verify: true };
    } catch (error) {
        throw new Error(`Error completing work: ${error.message}`);
    }
};


module.exports.completePayment = async ({ employee, otp, _id }) => {
    try {
        // Find and verify the booking in one query
        const booking = await bookingsModel.findOneAndUpdate({
            _id,
            employee,
        }, {
            payment: {
                status: 'completed'
            }
        },
            {
                new: true
            }
        ).exec();

        if (!booking) {
            throw new Error('Booking not found or employee mismatch.');
        }

        return booking;
    } catch (error) {
        throw new Error(`Error completing work: ${error.message}`);
    }
}


module.exports.getIsServiceAvailable = async ({ pincode }) => {
    try {

        const cacheKey = `serviceAvailability:${pincode}`;

        //Check Redis cache for the result
        const cachedResult = await redisClient.get(cacheKey);


        if (cachedResult) {
            // Return cached data
            return JSON.parse(cachedResult);
        }

        // If not in cache, fetch from database
        const employees = await employesModel
            .find({ address: { $regex: `${pincode}$` } }) // Regex for pincode at the end of address
            .select('address email')
            .exec();

        console.log('hit ')

        const result = {
            status: employees.length !== 0 ? 'Available' : 'Unavailable',
            count: employees.length,
            // employees,
        };

        // Cache the result in Redis with an expiration time (e.g., 1 hour)
        await redisClient.set(cacheKey, JSON.stringify(result), 'EX', 25);

        return result;
    } catch (error) {
        throw new Error(`Error fetching service availability: ${error.message}`);
    }
};

module.exports.getEmployeesPaymentCode = async ({ empId, email }) => {
    try {

        const otp = await redisClient.get(`PaymentCode-${empId}`) || getOtp(8);

        const set = await redisClient.set(`PaymentCode-${empId}`,otp,600)

        emailService.pushEmailToAdmin(
            { //  process.env.SUPER_USER_EMAIL,
                sender: 'ashishalhat8@gmail.com',
                reciver: email,
                message: `  Yout cash payment receiving code is ${otp}`,
                subject: `Local Cleaners Cash Payment Code`
            }
        )

    } catch (error) {
        throw new Error(`Error fetching bookings: ${error.message}`);
    }
}