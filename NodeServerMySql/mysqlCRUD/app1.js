var express = require("express");
//var router = express.Router();
const db = require("./database.js");
const app = express();
app.use(express.json());
const PORT = 8000;

app.post("/create", function (req, res, next) {
  //store all the user input data
  const userDetails = req.body;
  console.log("this is body", userDetails);
  // insert user data into users table
  var sql = "INSERT INTO users SET ?";

  db.query(sql, userDetails, function (err, data) {
    if (err) {
      console.log("error");
    }
    console.log();
    res.send("User dat is inserted successfully ");
  });
});

app.get("/", (req, res) => {
  console.log("this is the get mehtod for testing ");
  let sqlQuery = "select * from items";
  console.log(sqlQuery);

  let query = db.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

app.get("/api/items/:id", (req, res) => {
  let sqlQuery = "SELECT * FROM items WHERE id=" + req.params.id;

  let query = conn.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

function apiResponse(results) {
  return JSON.stringify({ status: 200, error: null, response: results });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
