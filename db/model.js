const mongoose = require("mongoose");


var nameSchema = new mongoose.Schema({
     firstName: String,
     lastName: String
 });
 var User = mongoose.model("Users", nameSchema);

// const UserSchema = new mongoose.Schema({
//      name: {
//           type: String,
//           required: true,
//       },
//      age: {
//           type: Number
//      },
//      roll_num: {
//           type:Number
//      },
//      school: {
//           type:String
//      },
     
// });

//const User = mongoose.model("kaushal", UserSchema);

module.exports = User;