const employesModel = require('../models/employes.model');

module.exports.createEmployes = async ({
    firstname, lastname, email, password
}) => {


    if (!firstname || !email || !password) {
        throw new Error('All fiels are required');
    }

    const employes = employesModel.create({
        fullname: { firstname, lastname },
        email,
        password,
        role: 'employee'

    })

    return employes;
}


module.exports.createEmployesProfile = async ({
    email, address, profileImage, experience,
}) => {

    try {

        if (!address || !profileImage || !experience) {
            throw new Error('All fiels are required');
        }

        const employes = employesModel.findOneAndUpdate({
            email
        }, {
            address,
            profileImage,
            experience,
            status: 'active'
        })

        return employes;
    } catch (err) {
        throw new Error(err)
    }
}