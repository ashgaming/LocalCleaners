const employesModel = require('../models/employes.model');
const adminService = require('../services/admin.service')
const { validationResult } = require('express-validator')
const blacklistTokenModel = require('../models/blacklistToken.model');


module.exports.pushEmailToAdmin = async (req, res, next) => {
    try { // Configure Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Or your preferred email service
            secure:true,
            port:465,
            auth: {
                user: process.env.SUPER_USER_EMAIL,
                pass: process.env.SUPER_USER_PASSWORD,
            },
        });

        // Send email
        const mailOptions = {
            from: 'ashishalhat8@gmail.com',
            to: 'ashalhat10000@gmail.com',
            subject: 'Notification',
            text: 'its working',
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: "Email send successfully" });
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error', err })
    }
}

module.exports.registerAdmin = async (req, res, next) => {

    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }

    const { firstname, email, password, lastname, otp } = req.body;

    const registerPassword = process.env.REGISTER_ADMIN_PASSWORD;

    if (otp !== registerPassword) {
        return res.status(401).json({ errors: "Invalid Request" });
    }

    const isEmployeeExist = await employesModel.findOne({ email });

    if (isEmployeeExist) {
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

    const employee = await employesModel.findOne({ email, role: 'admin' }).select('+password')

    if (!employee) {
        return res.status(401).json({ message: 'Invalid email and password' })
    }

    const isMatch = await employee.comparePassword(password);


    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email and password' })
    }

    const token = employee.generateAuthToken();

    res.cookie('token', token);

    res.status(201).json({ token, employee })
}

module.exports.getAdminProfile = async (req, res, next) => {
    res.status(200).json({ admin: req.admin });
}


module.exports.employesList = async (req, res, next) => {
    try {

        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        const employee = await adminService.employesList()


        res.status(201).json({ employee })
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error', error })
    }
}


module.exports.employesDetails = async (req, res, next) => {
    try {

        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        const { _id } = req.query;


        const employee = await adminService.employesDetails({ _id })


        res.status(201).json({ employee })
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error', error })
    }
}



module.exports.usersDetails = async (req, res, next) => {
    try {

        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        const { _id } = req.query;

        const user = await adminService.usersDetails({ _id })


        res.status(201).json({ user })
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error', error })
    }
}


module.exports.usersList = async (req, res, next) => {
    try {

        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }


        const users = await adminService.usersList()

        res.status(201).json({ users })
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error', error })
    }
}
