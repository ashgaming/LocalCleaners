const express = require('express')
const router = express.Router();
const { body, query } = require("express-validator")
const paymentController = require('../controllers/payment.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/send-notification-cash', authMiddleware.authUser ,[
  body('email').isEmail().withMessage('Email must be a string'), 
  body('subId').isMongoId().withMessage('subId must be a string'), 
], paymentController.getEmployeeByPaymentReceiveCode)

router.post('/subscription/receive-cash-payment', authMiddleware.authUser ,[
  body('otp').isString().withMessage('otp must be a string'), 
  body('subId').isMongoId().withMessage('subId must be a string'), 
  body('amount').isNumeric().withMessage('amount must be a number'), 
], paymentController.completeCashPayment)



module.exports = router;