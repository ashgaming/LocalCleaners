const moongose = require('mongoose');

const FeedbackSchema = new moongose.Schema({
    user: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'user',
    },

    employee: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'employee',
    },

    email: {
        type: String,
    },

    
    firstname: {
        type: String,
    },

    
    lastname: {
        type: String,
    },
  
    message: {
        type: String,
    },


});

module.exports = moongose.model('Feedback', FeedbackSchema);