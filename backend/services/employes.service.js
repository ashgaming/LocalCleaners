const employesModel = require('../models/employes.model');
const bookingsModel = require('../models/booking.model');

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
    email, address, profileImage, experience,
}) => {

    try {

        if (!address || !profileImage || !experience) {
            throw new Error('All fiels are required');
        }

        const employes = employesModel.findOneAndUpdate({
            email
        }, {
            address,
            profileImage,
            experience,
            status: 'active'
        })

        return employes;
    } catch (err) {
        throw new Error(err)
    }
}

module.exports.getEmployesAvailability = async () => {
    try {

        const employes = await employesModel.find().select('fullname').select('email').exec();

        return employes;

    } catch (error) {

        throw new Error(`Error fetching bookings: ${error.message}`);

    }
}

module.exports.VerifyBooking = async ({ employee, otp, _id }) => {
    try {

        const book = await bookingsModel.findOneAndUpdate({
            _id,
            employee,
        }, {
            otp: {
                start_otp: '123456',
                end_otp: '123456'
            }
        }).select('otp').exec();

        const verify = await bookingsModel.findOne({
            _id,
            employee,
        }).select('otp').exec();


        if (otp === verify.otp.start_otp) {
            return {
                verify: true
            }
        }
        else {
            return {
                verify: false
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
        },{
            payment:{
                status:'completed'
            }
        }).exec();

        if (!booking) {
            throw new Error('Booking not found or employee mismatch.');
        }

        return { booking };
    } catch (error) {
        throw new Error(`Error completing work: ${error.message}`);
    }
}  