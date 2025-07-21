const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const session = require('express-session');
const authRoute = require('./routes/authRoute');


const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(express.json());

app.use('/api/auth',authRoute);

mongoose.connect('mongodb://localhost:27017/ecommerce');



app.listen(5000,()=> console.log('Server Running on Port 5000'))