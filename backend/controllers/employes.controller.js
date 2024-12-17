const employesModel = require('../models/employes.model');
const employesService = require('../services/employes.service')
const { validationResult } = require('express-validator')
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.registerEmployes = async (req, res, next) => {


    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }
    
    const { fullname, email, password , vehicle } = req.body

    const isEmployesAlreadyExist = await employesModel.findOne({email}).exec();
    
    if(isEmployesAlreadyExist){
        return res.status(400).json({ errors: "Email already exist"})
    }

    const hashedPassword = await employesModel.hashedPassword(password);

    const employes = await employesService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color:vehicle.color,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType
    });
    
    const token = employes.generateAuthToken();

    res.status(201).json({ token, employes })
}

module.exports.loginEmployes = async (req, res, next) => {

    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }

    const { email, password } = req.body

    const hashedPassword = await employesModel.hashedPassword(password);

    const employes = await employesModel.findOne({ email }).select('+password')

    if (!employes) {
        return res.status(401).json({ message: 'Invalid email and password' })
    }

    const isMatch = await employes.comparePassword(password);


    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email and password' })
    }

    const token = employes.generateAuthToken();
    
    res.cookie('token',token);

    res.status(201).json({ token, employes })
}

module.exports.getEmployesProfile = async (req, res, next) => {
    res.status(200).json({ employes : req.employes});
}

module.exports.logoutEmployes = async (req, res, next) =>{
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];

    await blacklistTokenModel.create({token});

    res.status(200).json({message:'Logout out'});
}