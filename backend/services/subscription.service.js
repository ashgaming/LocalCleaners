const subscriptionModel = require('../models/subscription.model')
const plansModel = require('../models/plans.model');

async function getSubscriptionAmount(service, duration) {
    try {
        const plan = await plansModel.findById(service).exec()

       // console.log(plan)

        return Number(plan?.price * duration + (18 % plan?.price * duration));
    } catch (err) {
        return 0
    }
}

async function sendNewSubscriberNotification() {
    try {


        const { email, phone, message } = req.body;

        // Send email
        const mailOptions = {
            from: 'ashishalhat8@gmail.com',
            to: email,
            subject: 'Notification',
            text: message,
        };

        await transporter.sendMail(mailOptions);

        // Send SMS
        await client.messages.create({
            body: message,
            to: phone,
            from: 'your_twilio_phone_number',
        });

    } catch (err) {
        return 0
    }
}

module.exports.createSubscriptions = async ({
    user, address, service, start_date, end_date, countryCode, phoneNumber, lng, ltd, email, duration
}) => {

    if (!user || !address || !service || !phoneNumber) {     
        throw new Error('All fiels are required');
    }

    const plan =  {
        service,
        start_date,
        end_date,
        address,
        duration,
        ltd: ltd || null,
        lng: lng || null,
    }

    const subscription = await subscriptionModel.create({
        user: user._id,
        contactInfo: {
            email: email || user?.email,
            phoneNumber,
            countryCode
        },
        plan,
        payment: {
            amount: await getSubscriptionAmount(service, duration)
        }
    })

    return subscription;

}

module.exports.getSubscriptions = async ({ user }) => {

    if (!user) {
        throw new Error('user not found');
    }

    const subscription = await subscriptionModel.find({
        user
    }).populate('plan.service').exec()


    return subscription;
}


module.exports.GetSubscriptionDetails = async ({ user, id }) => {

    if (!user || !id) {
        throw new Error('user not found');
    }

    const subscription = await subscriptionModel.findOne({
        _id: id,
        user,
    }).populate('plan.service').exec()


    return subscription;
}