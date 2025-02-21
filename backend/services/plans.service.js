const plansModel = require('../models/plans.model')
const redisClient = require('../redisClient');

module.exports.createPlans = async ({
    name, price, description, features, duration
}) => {
    try{
    if (!name || !price || !description || !features || !duration) {
        throw new Error('All fiels are required');
    }

    const plan = plansModel.create({
        name, price, description, features, duration,
        id:name.toLowerCase(),
        createdOn: Date.now(),
        updateOn: Date.now(),
    })

    return plan;
  }catch(error){
    throw new Error(error.message);
    console.log(error)
  }
}


const CACHE_KEY = 'plans_cache';

module.exports.getPlans = async () => {
  try {
    // Check if plans exist in the Redis cache
    if (redisClient && redisClient?.connected) {
      const cachedPlans = await redisClient.get(CACHE_KEY);
    if (cachedPlans) {
      console.log('Serving plans from Redis cache');
      return JSON.parse(cachedPlans); // Return cached data
    }
    }
    


    // If not in cache, fetch from the database
    const plans = await plansModel.find({});
    
    // Store fetched data in Redis cache with an expiration time (e.g., 3600 seconds)
    if (redisClient?.connected){await redisClient.set(CACHE_KEY, JSON.stringify(plans), 'EX', 3600);}
    //console.log('Plans cached in Redis');

    return plans;
  } catch (error) {
    console.error('Error fetching plans:', error.message);
    throw new Error('Failed to fetch plans');
  }
};