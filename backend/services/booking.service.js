const bookingModel = require('../models/booking.model');
const crypto = require('crypto')


function getOtp(num) {
    function generateOtp(num) {
        const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString()
        return otp;
    }

    return generateOtp(num);
}

function getAmount(service) {
    const prices = {
        'regular': 50, 'deep': 200, 'moving': 150, 'subscribed': 2000,

    }
    return prices[service]
}

module.exports.createBooking = async ({
    user, address, time, date, service, phoneNumber, lng, ltd
}) => {

    if (!user || !address || !time || !date || !service || !phoneNumber) {
        throw new Error('All fiels are required');
    }

    const booking = bookingModel.create({
        user: user,
        service,
        BookingData: {
            location: address,
            time,
            date,
            lng: lng || null,
            ltd: ltd || null
        },

        phoneNumber,
        otp: {
            start_otp: getOtp(6),
            end_otp: getOtp(6)       
        },
        payment: {
            amount: getAmount(service)
        }
    })

    return booking;
}

module.exports.GetUserBookingById = async ({ user, _id }) => {
    if (!user || !_id) {
        throw new Error('User and id not found');
    }

    try {
        const booking = await bookingModel.findOne({ user: user._id, _id }).exec();
        return booking;
    } catch (error) {
        throw new Error(`Error fetching bookings: ${error.message}`);
    }
}


module.exports.UpcomingUserBookingList = async ({ user }) => {

    if (!user) {
        throw new Error('User not found');
    }

    try {
        let today = new Date();

        const todayString = today.toLocaleDateString('en-GB');



        const upcomingBookings = await bookingModel
            .find({
                user: user._id,
                status: { $in: ['upcoming', 'pending','ongoing'] },
            })
            .sort({ date: 1 })
            .exec();

        
        const Bookings = upcomingBookings.map(booking=>{
            console.log(booking.BookingData.date)
            console.log(booking.BookingData.time)
        })

        return upcomingBookings;


    } catch (error) {
        throw new Error(`Error fetching bookings: ${error.message}`);
    }
}


module.exports.ListUserBooking = async ({ user }) => {
    if (!user) {
        throw new Error('User not found');
    }

    try {
        const list = await bookingModel.find({ user: user._id }).populate('user').populate('employee'). exec();
        return list;
    } catch (error) {
        throw new Error(`Error fetching bookings: ${error.message}`);
    }
};

module.exports.ListAdminBooking = async () => {

    try {

        const list = await bookingModel.find({ work_status: 'pending' }).populate('user').exec();

        return list;

    } catch (error) {

        throw new Error(`Error fetching bookings: ${error.message}`);

    }
};

module.exports.AssignEmployee = async ( {requestId, selectedEmployee} ) => {
    if (!requestId || !selectedEmployee) {
        throw new Error('All _ids are required');
    }

    console.log(requestId, selectedEmployee)
    const booking = await bookingModel.findByIdAndUpdate(
        requestId, 
        { 
            employee: selectedEmployee,
            work_status:'ongoing'

         }, 
        { new: true } 
      );

    return booking;
}


module.exports.ListBookingOfEmployee = async ({employee}) => {

    try {

        const bookings = await bookingModel.find({ employee ,work_status: 'ongoing' }).populate('user').populate('employee').exec();

        return bookings;

    } catch (error) {

        throw new Error(`Error fetching bookings: ${error.message}`);

    }
};


module.exports.GetBookingById = async ({ employee, _id }) => {
    if (!employee || !_id) {
        throw new Error('Employee and id not found');
    }

    try {
        const booking = await bookingModel.findOne({ employee: employee._id, _id }).populate('user').populate('employee').exec();
        return booking;
    } catch (error) {
        throw new Error(`Error fetching bookings: ${error.message}`);
    }
}

module.exports.TodaysBookingsList = async () => {
    const date = new Date()
    const today = date.toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '-')
    try {

        const bookings = await bookingModel.find(
            { 
                work_status: 'pending',
                date:today
            }
        ).populate('user').
        populate('employee').
        exec();

        return bookings;

    } catch (error) {

        throw new Error(`Error fetching bookings: ${error.message}`);

    }
};