const express = require('express')
const router = express.Router();
const { body, query } = require("express-validator")
const PlansController = require('../controllers/plans.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/create', authMiddleware.authAdmin ,[
  body('name').isString().withMessage('Service must be a string'), 
  body('price').isNumeric({min:0}).withMessage('Service must be a string'), 
  body('description').isString().withMessage('Service must be a string'), 
  body('features').isArray({min:0,max:5}).withMessage('Place must be at least 3 characters long'),
  body('duration').isString().isLength({ min: 2}).withMessage('Number requires'), 
], PlansController.CreatePlans)

router.get('/' ,
    PlansController.GetPlans)

module.exports = router;