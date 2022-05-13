const express = require("express");
const bodyParser = require('body-parser');
const app = express();

const dotenv = require("dotenv");
dotenv.config({ path: "config/config.env" });

const connectDatabase = require('./config/database');
connectDatabase();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const router = require('./routes/crudAPI');
app.use('/api', router);

module.exports = app;

