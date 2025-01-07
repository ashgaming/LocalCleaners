const feedbackService = require('../services/feedback.service')
const { validationResult } = require('express-validator')

module.exports.CreateFeedback = async (req, res, next) => {

    try {

        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        const { message , email , firstname , lastname } = req.body

        const feedback = await feedbackService.CreateFeedback({
            user: req.user,
            employee: req.employee,
            message,
            email,
            firstname,
            lastname,
        });

        res.status(201).json({ feedback })
    } catch (error) {
        res.status(400).json({ errors: error })
        console.log(error)
    }
}
