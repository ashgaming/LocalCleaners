const plansModel = require('../models/plans.model')

module.exports.createPlans = async ({
    name, price, description, features, duration
}) => {

    if (!name || !price || !description || !features || !duration) {
        throw new Error('All fiels are required');
    }

  //  const date = new Date()

    const plan = plansModel.create({
        name, price, description, features, duration,
        id:name.toLowerCase(),
        createdOn: Date.now(),
        updateOn: Date.now(),
    })

    return plan;
}

module.exports.getPlans = async () => {

    try {
        const plans = await plansModel.find({}); // Fetch all documents
        return plans;
      } catch (error) {
        console.error('Error fetching plans:', error);
        throw error; 
      }

}