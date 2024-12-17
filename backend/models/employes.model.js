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
    staus: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },

    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, 'Color must be at least 3 character long'],
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, 'Plate must be at least 3 character long'],
        },
        capacity: {
            type: Number,
            required: true,
            minlength: [1, 'Capacity must be at least 1 character long'],
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto'],
        }
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

    profileImage: {
        type:String
    },

    post : {
        type:String,
        enum:['manager','owner','emp','helper'],
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