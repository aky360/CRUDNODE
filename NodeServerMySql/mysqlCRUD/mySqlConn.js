const mysql = require('mysql2')

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "12345"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log('connected !');
// });

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345" // // Replace with your database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;
