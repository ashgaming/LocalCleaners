const moongose = require('mongoose');

const BookingSchema = new moongose.Schema({
    user: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    employee: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'employes',
    },
    service: {
        type: String,
        enum: ['regular', 'deep', 'moving', 'subscribed'],
        default: 'pending',
    },
  
    BookingData: {
        date: {
            type: String,
            required: true,
            match: /^\d{2}-\d{2}-\d{4}$/ 
          },
        time: {
          type: String,
          required: true
        },
        location: {
          type: String,
          required: true
        },
        lat:{
            type:Number
        },
        lng:{
            type:Number
        }
      },
    

    work_status: {
        type: String,
        enum: ['pending', 'ongoing', 'started','completed', 'cancel'],
        default: 'pending',
    },

    phoneNumber: {
        type: String,
        required: true
      },

    payment: {
        amount: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            enum: ['pending', 'completed', 'failed'],
            default: 'pending'
        },
        transactionId: String
    },

    otp: {
        
           start_otp: {
                type: String,
                select: false
            },
      
           end_otp:  {
                type: String,
                select: false
            }
    }


});

module.exports = moongose.model('Booking', BookingSchema);