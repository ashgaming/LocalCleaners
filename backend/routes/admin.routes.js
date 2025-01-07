const express = require('express')
const router = express.Router();
const { body ,query } = require("express-validator")
const adminController = require('../controllers/admin.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('firstname').isLength({min:3}).withMessage('First name must be 3 character long'),
    body('lastname').isLength({min:3}).withMessage('last name must be 3 character long'),
    body('password').isLength({min:8}).withMessage('Password must be 8 letter long'),
    body('otp').isLength({min:8}).withMessage('Password must be 8 letter long'),
], adminController.registerAdmin)

/*
router.post('/register/profile', 
    authMiddleware.authEmployes,
    [
    body('address').isLength({ min: 3 }).withMessage('color must be 3 letter long'),
    body('profileImage').isLength({ min: 3 }).withMessage('plate must be 3 letter long'),
    body('experience').isNumeric().withMessage('Capacity must be a positive number'),
], admi*nController.registerEmployesProfile)
*/
router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 8 }).withMessage('Password must be 8 letter long')
], adminController.loginAdmin)

router.get('/employes', 
    authMiddleware.authAdmin
    , adminController.employesList)

module.exports = router;