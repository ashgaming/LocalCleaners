const employesModel = require('../models/employes.model');

module.exports.createCaptain = async ({
    firstname, lastname, email, password , 
    color,plate, capacity,vehicleType
}) => {

    
    if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType ) {
        throw new Error('All fiels are required');
    }

    const employes = employesModel.create({
        fullname: {  firstname, lastname },
        email,
        password,
        vehicle: { color, plate, capacity, vehicleType },
    })

    return employes;
}