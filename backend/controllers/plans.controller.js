const plansService = require('../services/plans.service')
const { validationResult } = require('express-validator')
const plansModel = require('../models/plans.model')

module.exports.CreatePlans = async (req, res, next) => {

    try {

        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        const { name , price ,description,features,duration } = req.body

        const isPlanAlreadyExist = await plansModel.findOne({
            name
        }).exec();

        if (isPlanAlreadyExist) {
            return res.status(400).json({ errors: "Plan already exist" })
        }

        const plans = await plansService.createPlans({
            name , price ,description,features,duration
        });


        res.status(201).json({ plans })
    } catch (error) {
        res.status(400).json({ errors: error })
        console.log(error)
    }
}


module.exports.GetPlans = async (req, res, next) => {

    try {

        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        const plans = await plansService.getPlans()


        res.status(201).json({ plans })
    } catch (error) {
        res.status(400).json({ errors: error })
        console.log(error)
    }
}
