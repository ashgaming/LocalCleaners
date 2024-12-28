const express = require('express')
const router = express.Router();
const { body, query } = require("express-validator")
const bookingController = require('../controllers/booking.controller')
const authMiddleware = require('../middlewares/auth.middleware')


router.post('/create', authMiddleware.authUser ,[
  body('service').isString().withMessage('Service must be a string'), // Validate type
  body('time').matches(/^(?:[0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9](?:\s?(?:AM|PM|am|pm))?$/).withMessage('Invalid time format (HH:MM AM/PM required)'),
  body('date').matches(/^\d{2}-\d{2}-\d{4}$/).withMessage('Invalid date format (DD-MM-YYYY required)'),
  body('address').isString().withMessage('Place must be a string'), // Validate type
  body('address').isLength({ min: 3 }).withMessage('Place must be at least 3 characters long'),
  body('phoneNumber').isNumeric().isLength({ min: 10 , max:10 }).withMessage('Number requires'),
  body('ltd').optional().isFloat().withMessage('Latitude must be a number'), 
  body('lng').optional().isFloat().withMessage('Longitude must be a number'), 
], bookingController.CreateBookings)

router.post('/accept', authMiddleware.authEmployes ,[
    body('requestId').isMongoId().withMessage('Invalid requestId'),
    body('selectedEmployee').isMongoId().withMessage('Invalid selectedEmployee'),
  ],
  bookingController.AssignEmployee
)

router.get('/confirm', [
    query('email').isEmail().withMessage('Invalid Email')],
)

router.get('/user-booking-list', authMiddleware.authUser ,  bookingController.ListUserBooking)

router.get('/get-user-booking', authMiddleware.authUser , [
  query('_id').isMongoId().withMessage('Id not found')
] ,bookingController.GetUserBookingById)


router.get('/upcoming-user-booking', authMiddleware.authUser , bookingController.UpcomingUserBookingList
)

router.get('/list-pending', authMiddleware.authEmployes , 
  bookingController.ListAdminBooking
)

router.get('/list-bookings-Employee', authMiddleware.authEmployes , 
  bookingController.ListBookingOfEmployee
)

module.exports = router;