const subscriptionService = require('../services/subscription.service')
const { validationResult } = require('express-validator')
const subscriptionModel = require('../models/subscription.model')

module.exports.CreateSubscription = async (req, res, next) => {

    try {

        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        const { address, service, start_date , end_date,countryCode , phoneNumber ,id , email, duration } = req.body
        
       // console.log('id :' , id)
        
        const isSubscriptionAlreadyExist = await subscriptionModel.findOne({
            user: req.user,
            service,
        }).exec();


        if (isSubscriptionAlreadyExist) {
            return res.status(400).json({ errors: "Subscription already exist" })
        }

        const subscription = await subscriptionService.createSubscriptions({ 
            user: req.user, address, service, start_date , end_date,countryCode , phoneNumber , email , duration
        });


        res.status(201).json({ subscription })
    } catch (error) {
        res.status(400).json({ errors: error })
     //   console.log(error)
    }
}


module.exports.GetSubscription = async (req, res, next) => {

    try {

        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        const sub = await subscriptionService.getSubscriptions({user:req.user});

        res.status(201).json({ sub })
    } catch (error) {
        res.status(400).json({ errors: error })
        console.log(error)
    }
}


module.exports.GetSubscriptionDetails = async (req, res, next) => {

    try {

        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        const {id} = req.query;
        const details = await subscriptionService.GetSubscriptionDetails({user:req.user , id });

        res.status(201).json({ details })
    } catch (error) {
        res.status(400).json({ errors: error })
        console.log(error)
    }
}
