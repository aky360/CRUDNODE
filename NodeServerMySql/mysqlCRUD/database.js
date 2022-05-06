
const mysql = require('mysql2');

const conn = mysql.createConnection({
     host: 'localhost',
     user: 'root', /* MySQL User */
     password: '12345', /* MySQL Password */
     database: 'node_restapi' /* MySQL Database */
});
   

conn.connect((err) =>{
     if(err) throw err;
     console.log('Mysql Connected with App...');
});