const subscriptionModel = require('../models/subscription.model')
const plansModel = require('../models/plans.model')

async function getSubscriptionAmount(service,duration) {
    try{
        const plan = await plansModel.findById(service).exec()
        
        return plan?.price * duration + ( 18 % plan?.price * duration);
    }catch(err){
        return 0
    }
}

module.exports.createSubscriptions = async ({
    user, address, service, start_date , end_date,countryCode , phoneNumber,id  , lng, ltd , email , duration 
}) => {

    if (!user || !address  || !service || !phoneNumber) {
        throw new Error('All fiels are required');
    }

    const subscription =await subscriptionModel.create({
        user: user,
        contactInfo:{
            email,
            phoneNumber,
            countryCode
        },
        plan:{
            service:id,
            start_date,
            end_date,
            duration,
            address,
            ltd: ltd || null,
            lng: lng || null,
        },
        payment: {
            amount: await getSubscriptionAmount(id,duration)
        }
    })

    return subscription;
}

module.exports.getSubscriptions = async ({user}) => {

    if (!user ) {
        throw new Error('user not found');
    }

    const subscription =await subscriptionModel.find({
        user
    }).populate('plan.service').exec()
    

    return subscription;
}


module.exports.GetSubscriptionDetails = async ({user,id}) => {

    if (!user || !id ) {
        throw new Error('user not found');
    }

    const subscription =await subscriptionModel.findOne({
        _id:id,
        user,
    }).populate('plan.service').exec()
    

    return subscription;
}