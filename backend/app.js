require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 4000;
const cookieParser = require('cookie-parser');
const connectToDB = require('./db/index');
const userRoutes = require('./routes/user.routes');
const employesRoutes = require('./routes/employes.routes')

connectToDB();

// Middleware to serve static files
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

module.exports = app;