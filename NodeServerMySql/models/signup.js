const mongoose = require("mongoose");


var nameSchema = new mongoose.Schema({
     firstName: String,
     lastName: String, 
     email: String,
     password: String,
     phone:Number
 });
 

module.exports =mongoose.model("UsersignUp", nameSchema);