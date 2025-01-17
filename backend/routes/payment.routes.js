const express = require('express')
const router = express.Router();
const { body, query } = require("express-validator")
const paymentController = require('../controllers/payment.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.get('/send-notification-cash', authMiddleware.authUser ,[
  query('email').isEmail().withMessage('Email must be a string'), 
  query('subId').isMongoId().withMessage('subId must be a string'), 
], paymentController.getEmployeeByPaymentReceiveCode)

router.get('/subscription/receive-cash-payment', authMiddleware.authUser ,[
  query('otp').isString().withMessage('otp must be a string'), 
  query('subId').isMongoId().withMessage('subId must be a string'), 
  query('amount').isNumeric().withMessage('amount must be a number'), 
], paymentController.completeCashPayment)



module.exports = router;