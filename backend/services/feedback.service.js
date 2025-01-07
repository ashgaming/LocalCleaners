const feedbackModel = require('../models/feedback.model')


module.exports.CreateFeedback = async ({
    user,
    employee,
    email,
    firstname,
    lastname,
    message
}) => {

    if (!message) {
        throw new Error('message fiels are required');
    }

    const feedback = feedbackModel.create({
        user: user || null,
        employee: employee || null,
        email,
        firstname,
        lastname,
        message
    })

    return feedback;
}
