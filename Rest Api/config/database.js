const mongoose = require("mongoose");

const connectDatabase = () => {
     mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then((data) => {
          console.log(`the database is connected to host ${data.connection.host}`, process.env.DB_URI);
     }).catch((err) => {
          console.log('error', err);
     });
};

module.exports = connectDatabase;