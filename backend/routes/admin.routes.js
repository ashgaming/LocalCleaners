const express = require('express')
const router = express.Router();
const { body, query } = require("express-validator")
const adminController = require('../controllers/admin.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('firstname').isLength({ min: 3 }).withMessage('First name must be 3 character long'),
    body('lastname').isLength({ min: 3 }).withMessage('last name must be 3 character long'),
    body('password').isLength({ min: 8 }).withMessage('Password must be 8 letter long'),
    body('otp').isLength({ min: 8 }).withMessage('Password must be 8 letter long'),
], adminController.registerAdmin)


router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 8 }).withMessage('Password must be 8 letter long')
], adminController.loginAdmin)

router.post('/profile', authMiddleware.authAdmin, adminController.getAdminProfile)

router.get('/employees',
    authMiddleware.authAdmin
    , adminController.employesList)

router.get('/employee',
    authMiddleware.authAdmin, [
    query('_id').isMongoId().withMessage('Invalid ID'),
], adminController.employesDetails)

router.get('/users',
    authMiddleware.authAdmin
    , adminController.usersList)

router.get('/user',
    authMiddleware.authAdmin, [
    query('_id').isMongoId().withMessage('Invalid ID'),
], adminController.usersDetails)

module.exports = router;