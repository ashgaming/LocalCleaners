const moongose = require('mongoose');

const SubscriptionSchema = new moongose.Schema({
    user: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    employee: {
        type: [moongose.Schema.Types.ObjectId],
        ref: 'employes',
    },

    contactInfo: {
        email: {
            type: String,
            required: true,
        },
        countryCode: {
            type: String,
            default: '+91',
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        }
    },
    plan: {

        service: {
            type: moongose.Schema.Types.ObjectId,
            ref: 'plans',
            required: true
        },

        start_date: {
            type: String,
            required: true,
        },

        end_date: {
            type: String,
            required: true,
        },

        duration: {
            type: String,
            required: true,
        },

        address: {
            type: String,
            required: true
        },
        lat: {
            type: Number
        },
        lng: {
            type: Number
        }
    },

    payment: {
        amount: {
            type: Number,
            required: true
        },
        method: {
            type: String,
            enum: ['cash', 'online', 'card'],
            default: 'cash'
        },
        status: {
            type: String,
            enum: ['pending', 'completed', 'failed'],
            default: 'pending'
        },
        transactionId: String
    },

    progress: {
        type: String,
        enum: ['active', 'completed', 'failed', 'cancel'],
        default: 'active'

    }
});

SubscriptionSchema.methods.getSubscriptionAmount = function (service) {
    const plans = {
        'basic': 99,
        'pro': 1999,
        'premium': 2999,
        'custom': 0,
        'ultimate': 3999,
        'public': 4999,
    }

    return plans[service]
}

module.exports = moongose.model('Subscriptions', SubscriptionSchema);