const express = require('express')
const router = express.Router();
const { body, query } = require("express-validator")
const feedbackController = require('../controllers/feedback.controller')
const authMiddleware = require('../middlewares/auth.middleware')


router.post('/create', authMiddleware.authUser || authMiddleware.authEmployes ,[
  body('email').isString().withMessage('Service must be a string'), // Validate type
  body('message').isString().withMessage('Service must be a string'), // Validate type
  body('firstname').isString().withMessage('Service must be a string'), // Validate type
  body('lastname').isString().withMessage('Service must be a string'), // Validate type
], feedbackController.CreateFeedback)

module.exports = router;