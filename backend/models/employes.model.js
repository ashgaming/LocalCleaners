const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const employesSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 character long']
        },
        lastname: {
            type: String,
            required: true,
            minlength: [3, 'Last name must be at least 3 character long']
        }
    },
    email: {
        type: String,
        required: true,
        minlength: [5, 'Email must be 5 character long'],
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: true,
        select: false,
    },

    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['unregistered','active', 'inactive'],
        default: 'unregistered',
    },

    address:{
        type:String
    },

    location: {
        ltd: {
            type: Number
        },
        lng: {
            type: Number
        }
    },

    salary:{
        type :Number
    },
    
    experience:{
        type :Number
    },

    profileImage: {
        type:String
    },

    role : {
        type:String,
        enum:['manager','owner','employee','helper','admin'],
        required:true,
    }


})

employesSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' })
    return token;
}

employesSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

employesSchema.statics.hashedPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const employesModel = mongoose.model('employes', employesSchema);

module.exports = employesModel;