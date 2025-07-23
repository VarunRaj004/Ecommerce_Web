const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const session = require('express-session');
const MongoStore = require('connect-mongo');
const authRoute = require('./routes/authRoute');

require('dotenv').config();
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
    store:MongoStore.create({
        mongoUrl: 'mongodb://localhost:27017/ecommerce',
        collectionName:'sessions'
    }),
    cookie : {
        maxAge : 24 * 60 * 60 * 1000,
        httpOnly:true,
        secure:false
    }

}))

app.use(express.json());

app.use('/api/auth',authRoute);

mongoose.connect('mongodb://localhost:27017/ecommerce');



app.listen(5000,()=> console.log('Server Running on Port 5000'))