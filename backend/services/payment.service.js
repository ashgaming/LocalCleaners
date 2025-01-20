const employesModel = require('../models/employes.model');
const subscriptionModel = require('../models/subscription.model')


module.exports.getEmployeeByPaymentReceiveCode = async ({email}) => {
    try {

        const employes = await employesModel.findOne({
            email
        })

        return employes;

    } catch (error) {

        throw new Error(`Error fetching bookings: ${error.message}`);

    }
}

function generateTransactionId() {
    const prefix = 'TXN'; // Prefix for the transaction ID
    const timestamp = Date.now().toString(36); // Base36 representation of the current timestamp
    const randomPart = Math.random().toString(36).substring(2, 10).toUpperCase(); // Random alphanumeric string

    return `${prefix}-${timestamp}-${randomPart}`;
}

module.exports.completeCashPayment = async ({subId , amount}) => {
    try {

        const subscription = await subscriptionModel.findOneAndUpdate({
            _id:subId
        },{
            payment: {
                amount,
                method: 'cash',
                status: 'completed',
                transactionId: generateTransactionId()
            },
        },{new:true}).exec()

        return subscription;

    } catch (error) {

        throw new Error(`Error fetching bookings: ${error.message}`);

    }
}