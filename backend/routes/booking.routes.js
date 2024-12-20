const express = require('express')
const router = express.Router();
const { body, query } = require("express-validator")
const bookingController = require('../controllers/booking.controller')
const authMiddleware = require('../middlewares/auth.middleware')


router.post('/create', authMiddleware.authUser ,[
  body('service').isString().withMessage('Service must be a string'), // Validate type
  // Assuming time is a string in a specific format (e.g., "HH:MM")
  body('time').matches(/^\d{2}:\d{2}$/).withMessage('Invalid time format (HH:MM required)'),
  // Assuming date is a string in a specific format (e.g., "YYYY-MM-DD")
  body('date').matches(/^\d{2}-\d{2}-\d{4}$/).withMessage('Invalid date format (DD-MM-YYYY required)'),
  body('address.place').isString().withMessage('Place must be a string'), // Validate type
  body('address.place').isLength({ min: 3 }).withMessage('Place must be at least 3 characters long'),
  body('address.state').isString().withMessage('State must be a string'), // Validate type
  body('address.state').isLength({ min: 3 }).withMessage('State must be at least 3 characters long'),
  body('address.city').isString().withMessage('City must be a string'), // Validate type
  body('address.city').isLength({ min: 3 }).withMessage('City must be at least 3 characters long'),
  body('address.pincode').isString().withMessage('Pincode must be a string'), // Validate type
  body('address.pincode').isLength({ min: 6, max: 6 }).withMessage('Pincode must be 6 digits long'),
  body('ltd').isFloat().withMessage('Latitude must be a number'), 
  body('lng').isFloat().withMessage('Longitude must be a number'), 
], bookingController.CreateBookings)

router.get('/accept', [
    query('email').isEmail().withMessage('Invalid Email')],
)

router.get('/confirm', [
    query('email').isEmail().withMessage('Invalid Email')],
)

router.get('/myBookings', authMiddleware.authUser ,  )

router.get('/list-booking', authMiddleware.authUser , 
)

router.get('/list-pending', authMiddleware.authUser , 
)

module.exports = router;