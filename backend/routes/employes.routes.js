const express = require('express')
const router = express.Router();
const { body, query } = require("express-validator")
const employesController = require('../controllers/employes.controller')
const authMiddleware = require('../middlewares/auth.middleware')


router.post('/register', [
  body('email').isEmail().withMessage('Invalid Email'),
  body('firstname').isLength({ min: 3 }).withMessage('First name must be 3 character long'),
  body('lastname').isLength({ min: 3 }).withMessage('last name must be 3 character long'),
  body('password').isLength({ min: 8 }).withMessage('Password must be 8 letter long')
], employesController.registerEmployes)


router.post('/register/profile',
  authMiddleware.authEmployes,
  [
    body('address').isLength({ min: 3 }).withMessage('color must be 3 letter long'),
    body('profileImage').isLength({ min: 3 }).withMessage('plate must be 3 letter long'),
    body('experience').isNumeric().withMessage('Capacity must be a positive number'),
    body('phoneNumber').isString().withMessage('Invalid Phone Number'),
  ], employesController.registerEmployesProfile)

router.post('/login', [
  body('email').isEmail().withMessage('Invalid Email'),
  body('password').isLength({ min: 8 }).withMessage('Password must be 8 letter long')
], employesController.loginEmployes)

router.get('/profile', authMiddleware.authEmployes, employesController.getEmployesProfile)

router.get('/logout', authMiddleware.authEmployes, employesController.logoutEmployes)


router.get('/get-employee-list', authMiddleware.authEmployes, employesController.getEmployesAvailability)

router.post('/verify-booking-otp', authMiddleware.authEmployes, [
  body('_id').isMongoId().withMessage('Id not found'),
  body('otp').isString().isLength({ min: 6, max: 6 }).withMessage('Id not found')
], employesController.VerifyBooking)

router.post('/complete-Work', authMiddleware.authEmployes, [
  body('_id').isMongoId().withMessage('Id not found'),
  body('otp').isString().isLength({ min: 6, max: 6 }).withMessage('Id not found')
], employesController.completeWork)

router.post('/confirm-payment', authMiddleware.authEmployes, [
  body('_id').isMongoId().withMessage('Id not found'),
  body('otp').isString().isLength({ min: 6, max: 6 }).withMessage('Id not found')
], employesController.completePayment)

router.get('/service/availability', [
  query('pincode').isString().isLength({ min: 6, max: 6 }).withMessage('Invalid Pincode')
], employesController.getIsServiceAvalable)


module.exports = router;