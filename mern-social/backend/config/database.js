const mongoose = require("mongoose");
//const config =require('./index')
//const {MONGO_URI} = require("./config.env")

exports.connectDatabase = async () => {
     await mongoose
          .connect(process.env.MONGO_URI)
          .then((con) => console.log(`database connected: ${con.connection.host}`, process.env.MONGO_URI))
          .catch((err) => console.log(err))
};

// , {
//      useNewUrlParser: true,
//      useUnifiedTopology: true
// }

