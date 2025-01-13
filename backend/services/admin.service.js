const employesModel = require('../models/employes.model');
const usersModel = require('../models/user.model');
const bookingsModel = require('../models/booking.model');
const userModel = require('../models/user.model');

module.exports.registerAdmin = async ({
    firstname, lastname, email, password
}) => {


    if (!firstname || !email || !password) {
        throw new Error('All fiels are required');
    }

    const employes = employesModel.create({
        fullname: { firstname, lastname },
        email,
        password,
        role: 'admin',
        status:'active'

    })

    return employes;
}


module.exports.loginAdmin = async ({email,password}) => {

    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }

    if(!email || !password ){
        return res.status(401).json({ message: 'Invalid email and password' })
    }

    const hashedPassword = await employesModel.hashedPassword(password);

    const employee = await employesModel.findOne({ email , role:'admin' }).select('+password')

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

module.exports.employesList = async () => {

    try{
        
        const employee = await employesModel.find({}, { _id: 1, fullname: 1, email: 1 , role : 1, salary: 1 }).exec()
       
        
        return employee
    }catch{
        return res.status(500).json({ message: 'Internal server error' })
    }
        

    
}

module.exports.employesDetails = async ({_id}) => {

    try{
        
        const employee = await employesModel.find({_id}, { _id: 1, fullname: 1, email: 1 , role : 1, salary: 1 }).exec()
         
        return employee
    }catch{
        return res.status(500).json({ message: 'Internal server error' })
    }
        

    
}

module.exports.usersList = async () => {

    try{
        
        const users = await userModel.find({}, { _id: 1, fullname: 1, email: 1  }).exec()
        
        return users;
    }catch{
        return res.status(500).json({ message: 'Internal server error' })
    }
        

    
}

module.exports.usersDetails = async ({_id}) => {

    try{
        
        const user = await userModel.find({_id}).exec()
        
        if (!user) {
        }
        
        return user
    }catch{
        return res.status(500).json({ message: 'Internal server error' })
    }
        

    
}