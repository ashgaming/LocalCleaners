const employesModel = require('../models/employes.model');
const employesService = require('../services/employes.service')
const { validationResult } = require('express-validator')
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.registerEmployes = async (req, res, next) => {

    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }
    
    const { firstname, email, password,lastname } = req.body;

    const isEmployeeExist = await employesModel.findOne({email});

    if(isEmployeeExist){
        return res.status(400).json({ errors: "Employee Already exist" });
    }

    const hashedPassword = await employesModel.hashedPassword(password);

    const employee = await employesService.createEmployes({
        firstname: firstname,
        lastname: lastname,
        email,
        password: hashedPassword
    });

    const token = employee.generateAuthToken();

    res.status(201).json({ token, employee })
}

module.exports.registerEmployesProfile = async (req, res, next) => {


    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }
    
    const { address , profileImage , experience , phoneNumber} = req.body

    const isEmployesAlreadyExist = await employesModel.findOne({email:req.employee.email}).exec();
    
    if(!isEmployesAlreadyExist){
        return res.status(400).json({ errors: "Email not exist"})
    }

    const employes = await employesService.createEmployesProfile({
        email:req.employee.email,
        address,
        profileImage,
        experience,
        phoneNumber
    });


    res.status(201).json({ employes })
}

module.exports.loginEmployes = async (req, res, next) => {

    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }

    const { email, password } = req.body

    const hashedPassword = await employesModel.hashedPassword(password);

    const employee = await employesModel.findOne({ email }).select('+password')

    if (!employee) {
        return res.status(401).json({ message: 'Invalid email and password' })
    }

    const isMatch = await employee.comparePassword(password);


    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email and password' })
    }

    const token = employee.generateAuthToken();
    
    res.cookie('token',token);

    res.status(201).json({ token, employee })
}

module.exports.getEmployesProfile = async (req, res, next) => {
    res.status(200).json({ employee : req.employee});
}

module.exports.logoutEmployes = async (req, res, next) =>{
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    
    await blacklistTokenModel.create({token});
    
    res.status(200).json({message:'Logout out'});
}


module.exports.getEmployesAvailability = async (req, res, next) => {

    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }

    try{

        const employes = await employesService.getEmployesAvailability()

        return res.status(200).json({ employes })

    }catch(error){
        return res.status(400).json({ errors : error })
    }
 }

 
module.exports.VerifyBooking = async (req, res, next) => {

    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }

    try{

        const { _id , otp } = req.query

        const verifyStatus = await employesService.VerifyBooking({employee:req.employee,_id,otp})

        return res.status(200).json({ verifyStatus })

    }catch(error){
        return res.status(400).json({ errors : error })
    }
 }

 module.exports.completePayment = async (req, res, next) => {

    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }

    try{

        const { _id , otp } = req.query

        const verifyStatus = await employesService.completePayment({employee:req.employee,_id,otp})

        return res.status(200).json({ verifyStatus })

    }catch(error){
        return res.status(400).json({ errors : error })
    }
 }

 module.exports.completeWork = async (req, res, next) => {

    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }

    try{

        const { _id , otp } = req.query

        const verifyStatus = await employesService.completeWork({employee:req.employee,_id})

        return res.status(200).json({ verifyStatus })

    }catch(error){
        return res.status(400).json({ errors : error })
    }
 }

 module.exports.getIsServiceAvalable = async (req, res, next) => {

   try  {
        const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }

    const { pincode } = req.query

 
    if (!pincode) {
        return res.status(401).json({ message: 'Invalid Pincode' })
    }

    const result = await employesService.getIsServiceAvailable({pincode})

    res.status(201).json({ result})

}catch(error){
    return res.status(500).json({ message: 'Internal server error' })
}

}