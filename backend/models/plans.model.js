const moongose = require('mongoose');


const PlansSchema = new moongose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    features: {
        type: [String], // Array of strings
        required: true,
    },
    duration : {
        type:String,
        enum:['day','week','month','quater'],
        required:true,
    },
    createdOn:{
        type: String,
        required: true,
    },
    updateOn:{
        type: String,
        required: true,
    }
});



module.exports = moongose.model('plans', PlansSchema);