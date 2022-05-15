const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());



// app.set('PORT', process.env.PORT || 4000); app.get('PORT');
const dotenv = require('dotenv');
dotenv.config({ path: 'backend/config/config.env' });
//   OR YOU CAN USE IN SINGLE LINE AS BELOW
//require("dotenv").config({path:"config/config.env"});
const connectDatabase = require('./config/database');
connectDatabase();



const product = require('./routes/productRoute');

app.use("/api/v1", product);

module.exports = app;
