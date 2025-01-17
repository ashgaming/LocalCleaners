const employesModel = require('../models/employes.model');
const { pushEmailToAdmin } = require('../services/email.service');
const paymentService = require('../services/payment.service')
const { validationResult } = require('express-validator')
const crypto = require('crypto')
const Redisclient = require('../redisClient');


function getOtp(num) {
    function generateOtp(num) {
        const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString()
        return otp;
    }

    return generateOtp(num);
}



module.exports.getEmployeeByPaymentReceiveCode = async (req, res, next) => {
    try {

        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        const { subId, email } = req.query;
        const { user } = req;



        const employee = await paymentService.getEmployeeByPaymentReceiveCode({ email })

        if (!employee) {
            res.status(200).json({ message: 'Staff not exists' })
        }


        const key = `${subId}-cash-payment`;
        let otp = await Redisclient.get(key); // Await the Redis GET operation

        if (!otp) {
            otp = getOtp(6); // Generate OTP if not already set
            await Redisclient.set(key, otp, 'EX', 60 * 5); // Set OTP with an expiration of 5 minutes
        }

        const message = ` Dear ${employee?.fullname?.firstname} ${employee?.fullname?.lastname},

        This email contains the One-Time Password (OTP) for the cash payment you recently received.

        OTP: ${otp}

        Please enter this OTP within  5 minutes in the designated field on your employee portal/payroll system to confirm the receipt of your cash payment.

        If you did not receive this cash payment or believe this OTP is incorrect, please contact customer care immediately at xxxx-xx-xxxx or xxxxxx@gmail.com .

        Thank you,

        Local Cleaners `

        pushEmailToAdmin('', employee?.email, 'Cash Payment Reciever Otp', message)


        res.status(201).json({ otp })
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error', error })
    }
}

module.exports.completeCashPayment = async (req, res, next) => {
    try {

        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        const { subId, otp ,amount } = req.query;
        const { user } = req;

        
        const key = `${subId}-cash-payment`;
        let cotp = await Redisclient.get(key) || null; // Await the Redis GET operation

        if (otp !== cotp) {
            return res.status(500).json({ error: 'Invalid Otp' })
        }


        const subscription = await paymentService.completeCashPayment({subId , amount})

        if (!subscription) {
            res.status(200).json({ message: 'subscription not exists' })
        }


        const date = new Date();
        

        const message = ` Dear Admin,

This email is to inform you of a subscriber payment received by ${subscription.employee?.fullname?.firstname} ${subscription.employee?.fullname?.lastname} on ${date.toLocaleDateString()}.

Payment Details:

Subscriber Name: ${JSON.stringify(subscription.fullname)}
Payment Amount: ${subscription.payment.amount}
Payment Method: ${'cash'}
Receipt Number: ${subscription.payment.transactionId}
Payment Date: ${date.toLocaleDateString()}
${subscription.employee?.fullname?.firstname} ${subscription.employee?.fullname?.lastname} has [Briefly describe how the payment was received and handled, e.g., "collected the payment from the subscriber in person", "received a check from the subscriber by mail"].

[Optional: Include any relevant notes, such as discrepancies in payment amount or any special instructions from the subscriber.]

Please update the subscriber's account accordingly in the system.

Thank you,

        Local Cleaners `

        pushEmailToAdmin('', process.env.SUPER_USER_EMAIL , `Subscriber Payment Received - ${subscription.user._id}`, message)


        res.status(201).json({ subscription })
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error', error })
    }
}
