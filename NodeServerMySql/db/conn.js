// const mongoose = require("mongoose");
// //const config = require("../config");

// mongoose.connect(config.serverDb, { useNewUrlParser: true }).catch((e) => {
//   console.error(config.serverDb, e.message);
// });
// const db = mongoose.connection;

// module.exports = db;


//const MongoClient = require('mongodb').MongoClient

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/SignUpData", {
     useNewUrlParser: true,
     useUnifiedTopology: true
}) .then(() => {
    console.log("Connected to the databases! ");
  })
  .catch(err => {
    console.log("Cannot connect to the database! ", err);
   // process.exit();
  });
      