// redisClient.js
const redis = require('redis');

// Create and configure Redis client
const Redisclient = redis.createClient({
    url: process.env.REDIS_URL, // Use environment variable for Redis URL
});

// Connect to Redis with error handling
Redisclient.connect()
    .then(() => console.log('Redis client connected'))
    .catch((err) => {
        console.error('Redis Client Connection Error:', err);
        process.exit(1); // Exit the process if Redis connection fails
    });

// Export the client for use in other files
module.exports = Redisclient;
