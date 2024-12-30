const bookingService = require('../services/booking.service')
const { validationResult } = require('express-validator')
const bookingModel = require('../models/booking.model')

module.exports.CreateBookings = async (req, res, next) => {

    try {

        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        const { address, service, date, time, phoneNumber } = req.body

        const isBookingAlreadyExist = await bookingModel.findOne({
            user: req.user,
            service: service,
            date: date

        }).exec();

        if (isBookingAlreadyExist) {
            return res.status(400).json({ errors: "Booking already exist" })
        }

        const booking = await bookingService.createBooking({
            user: req.user, address, time, date, service, phoneNumber
        });


        res.status(201).json({ booking })
    } catch (error) {
        res.status(400).json({ errors: error })
        console.log(error)
    }
}

module.exports.GetUserBookingById = async (req, res, next) => {

    try {

        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        const { _id } = req.body;

        const booking = await bookingService.GetUserBookingById({ user: req.user, _id })

        res.status(200).json({ data: list })


    } catch (error) {
        res.status(500).json({ errors: 'Internal server error' })
        console.log(error.message)
    }
}

module.exports.UpcomingUserBookingList = async (req, res, next) => {
    try {

        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        const list = await bookingService.UpcomingUserBookingList({ user: req.user })

        res.status(200).json({ data: list })


    } catch (error) {
        res.status(500).json({ errors: 'Internal server error' })
        console.log(error.message)
    }
}

module.exports.ListUserBooking = async (req, res, next) => {
    try {

        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        const list = await bookingService.ListUserBooking({ user: req.user })

        res.status(200).json({ data: list })


    } catch (error) {
        res.status(500).json({ errors: 'Internal server error' })
        console.log(error.message)
    }



}

module.exports.ListAdminBooking = async (req, res, next) => {
    try {

        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        const list = await bookingService.ListAdminBooking()

        res.status(200).json({ data: list })


    } catch (error) {
        res.status(500).json({ errors: 'Internal server error' })
        console.log(error.message)
    }
}

module.exports.AssignEmployee = async (req, res, next) => {
    try {

        const error = validationResult(req)
        if (!error.isEmpty()) {
            console.log('hit here')
            return res.status(400).json({ errors: error.array() })
        }

        const { requestId, selectedEmployee } = req.body;

        const booking = await bookingService.AssignEmployee({ requestId, selectedEmployee });

        res.status(200).json({ booking })


    } catch (error) {
        res.status(500).json({ errors: 'Internal server error' })
        console.log(error.message)
    }
}

module.exports.ListBookingOfEmployee = async (req, res, next) => {
    try {

        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        const bookings = await bookingService.ListBookingOfEmployee({
            employee: req.employee
        })

        res.status(200).json({ bookings })


    } catch (error) {
        res.status(500).json({ errors: 'Internal server error' })
        console.log(error.message)
    }
}


module.exports.GetBookingById = async (req, res, next) => {

    try {

        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        const { _id } = req.query;

        const booking = await bookingService.GetBookingById({ employee: req.employee, _id })

        res.status(200).json({ booking })


    } catch (error) {
        res.status(500).json({ errors: 'Internal server error' })
        console.log(error.message)
    }
}


module.exports.TodaysBookingsList = async (req, res, next) => {
    try {

        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        const list = await bookingService.TodaysBookingsList()

        res.status(200).json({ data: list })


    } catch (error) {
        res.status(500).json({ errors: 'Internal server error' })
        console.log(error.message)
    }
}