const MongoClient = require('mongodb').MongoClient

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/nodeData", {
     useNewUrlParser: true,
     useUnifiedTopology: true
}) .then(() => {
    console.log("Connected to the databases! ");
  })
  .catch(err => {
    console.log("Cannot connect to the database! ", err);
   // process.exit();
  });
      