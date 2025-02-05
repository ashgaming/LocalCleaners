const subscriptionService = require('../services/subscription.service')
const { validationResult } = require('express-validator')
const subscriptionModel = require('../models/subscription.model')
const { pushEmailToAdmin } = require('../services/email.service')


module.exports.CreateSubscription = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      address,
      service,
      start_date,
      end_date,
      countryCode,
      phoneNumber,
      email,
      duration,
    } = req.body;

    const isSubscriptionAlreadyExist = await subscriptionModel
      .findOne({
        user: req.user,
        service,
      })
      .exec();

    if (isSubscriptionAlreadyExist) {
      return res.status(400).json({ errors: "Subscription already exists" });
    }

    const subscription = await subscriptionService.createSubscriptions({
      user: req.user,
      address,
      service,
      start_date,
      end_date,
      countryCode,
      phoneNumber,
      email,
      duration,
    });

    res.status(201).json({ subscription });

    // Handle email sending asynchronously
    sendEmailToAdmin(req.user, subscription);
  } catch (error) {
    res.status(500).json({ errors: "Internal server error", error });
  }
};

// Asynchronous function to send email
const sendEmailToAdmin = async (user, subscription) => {
  try {
    const date = new Date().toISOString().split("T")[0]; // Format date as YYYY-MM-DD
    const message = `
      Dear Admin,
      
      This email is to inform you of a new subscriber on https://localcleaner.onrender.com.
      
      Subscriber Information:
      
      Name: ${user?.fullname?.firstname} ${user?.fullname?.lastname}
      Email Address: ${user.email}
      Subscription Date: ${date}
      Subscription Type: ${subscription}
      
      You can view the subscriber's details and manage their subscription within the admin panel at https://localcleaner.onrender.com.
      
      Thank you,
      Admin
    `;

    const subject = "New Subscriber on Local Cleaner";

    await pushEmailToAdmin(
     {
        sender: "",
        reciver: process.env.SUPER_USER_EMAIL,
      subject,
      message
    }
    );
    console.log(`Email sent successfully to admin ${process.env.SUPER_USER_EMAIL}`);
  } catch (err) {
    console.error("Failed to send email while creating subscription:", err);
  }
};


module.exports.GetSubscription = async (req, res, next) => {

    try {

        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        const sub = await subscriptionService.getSubscriptions({ user: req.user });

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

        const { id } = req.query;
        const details = await subscriptionService.GetSubscriptionDetails({ user: req.user, id });

        res.status(201).json({ details })
    } catch (error) {
        res.status(400).json({ errors: error })
        console.log(error)
    }
}
