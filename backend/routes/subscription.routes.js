const express = require('express')
const router = express.Router();
const { body, query } = require("express-validator")
const subscriptionController = require('../controllers/subscription.controller')
const authMiddleware = require('../middlewares/auth.middleware')


router.post('/create', authMiddleware.authUser, [
  body('id').isMongoId().withMessage('service id required'),
  body('service').isString().withMessage('Service must be a string'), // Validate type
  body('email').isString().withMessage('Service must be a string'), // Validate type
  body('start_date').isString().withMessage('Service must be a string'), // Validate type
  body('end_date').isString().withMessage('Service must be a string'), // Validate type
  body('duration').isString().withMessage('Service must be a string'), // Validate type
  body('address').isString().withMessage('Place must be a string'), // Validate type
  body('address').isLength({ min: 3 }).withMessage('Place must be at least 3 characters long'),
  body('countryCode').isString().isLength({ min: 2, max: 2 }).withMessage('countryCode requires'),
  body('phoneNumber').isString().isLength({ min: 10, max: 10 }).withMessage('Number requires'),
  body('ltd').optional().isFloat().withMessage('Latitude must be a number'),
  body('lng').optional().isFloat().withMessage('Longitude must be a number'),
], subscriptionController.CreateSubscription)

router.get('/list', authMiddleware.authUser,
  subscriptionController.GetSubscription)

router.get('/details', authMiddleware.authUser,
  query('id').isMongoId().withMessage('service id required'),
  subscriptionController.GetSubscriptionDetails)
module.exports = router;