const moongose = require('mongoose');

const StaffUnionsSchema = new moongose.Schema({
    members: {
        type: [moongose.Schema.Types.ObjectId],
        ref: 'employee',
    },

    name: {
        type: String,
        require: true
    },

    subscriptions:{
        type: [moongose.Schema.Types.ObjectId],
        ref: 'Subscriptions',
    },

    
    bookings:{
        type: [moongose.Schema.Types.ObjectId],
        ref: 'Booking',
    },

    earning:{
        type: Number,
        default:0
        
    }


});

module.exports = moongose.model('Unions', StaffUnionsSchema);