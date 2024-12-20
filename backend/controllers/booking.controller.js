const bookingService = require('../services/image.service')
const { validationResult } = require('express-validator')
const bookingModel = require('../models/booking.model')

module.exports.CreateBookings = async (req, res, next) => {

    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }
    
    const { address , profileImage , experience } = req.body

    const isBookingAlreadyExist = await bookingModel.findOne({
        user:req.user,
        
    }).exec();
    
    if(!isEmployesAlreadyExist){
        return res.status(400).json({ errors: "Email not exist"})
    }

    const employes = await employesService.createEmployesProfile({
        email:req.employee.email,
        address,
        profileImage,
        experience,
    });


    res.status(201).json({ employes })
}