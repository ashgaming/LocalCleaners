const employesModel = require('../models/employes.model');
const adminService = require('../services/admin.service')
const { validationResult } = require('express-validator')
const blacklistTokenModel = require('../models/blacklistToken.model');


module.exports.registerAdmin = async (req, res, next) => {

    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }
    
    const { firstname, email, password,lastname , otp } = req.body;

    const registerPassword = process.env.REGISTER_ADMIN_PASSWORD;

    if(otp !== registerPassword){
        return res.status(401).json({ errors: "Invalid Request" });
    }

    const isEmployeeExist = await employesModel.findOne({email});

    if(isEmployeeExist){
        return res.status(400).json({ errors: "Admin Already exist" });
    }

    const hashedPassword = await employesModel.hashedPassword(password);

    const employee = await adminService.registerAdmin({
        firstname: firstname,
        lastname: lastname,
        email,
        password: hashedPassword,
        otp,
    });

    const token = employee.generateAuthToken();

    res.status(201).json({ token, employee })
}

module.exports.loginAdmin = async (req, res, next) => {

    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }

    const { email, password } = req.body

    const hashedPassword = await employesModel.hashedPassword(password);

    const employee = await employesModel.findOne({ email ,role:'admin' }).select('+password')

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


module.exports.employesList = async (req, res, next) => {
    try{
        
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }

    const hashedPassword = await employesModel.hashedPassword(password);

    const employee = await adminService.employesList()


    res.status(201).json({ employee })
    }
    catch(error){
        return res.status(500).json({ message: 'Internal server error',error })
    }
}
