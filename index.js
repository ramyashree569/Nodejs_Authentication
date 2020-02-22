const express = require('express')
const app=express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//Import routes
const authRoute=require('./routes/auth');

//dotenv.config();

//connect to database
mongoose.connect('mongodb://localhost:27017/node_auth',{ useNewUrlParser: true });

//Middleware
app.use(express.json());
//Route Middlewares
app.use('/api/user',authRoute);






app.listen(3000,()=> console.log('server is running'));
