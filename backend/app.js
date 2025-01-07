require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const cors = require('cors');
const app = express();
const port = 4000;
const cookieParser = require('cookie-parser');
const connectToDB = require('./db/index');
const userRoutes = require('./routes/user.routes');
const employesRoutes = require('./routes/employes.routes')
const imageRoutes = require('./routes/image.routes')
const bookingRoutes = require('./routes/booking.routes')
const subscriptionRoutes = require('./routes/subscription.routes')
const feedbackRoutes = require('./routes/feedback.routes')
const plansRoutes = require('./routes/plans.routes')
const adminRoutes = require('./routes/admin.routes')
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_SECREATE
});


connectToDB();

// Middleware to serve static files
app.use(morgan('dev'))
app.use(express.static('public'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('Hello, Express!');
});


app.use('/users', userRoutes);
app.use('/employes', employesRoutes);
app.use('/image', imageRoutes);
app.use('/bookings', bookingRoutes);
app.use('/subscriptions', subscriptionRoutes);
app.use('/feedbacks', feedbackRoutes);
app.use('/plans', plansRoutes);
app.use('/admin', adminRoutes);


module.exports = app;