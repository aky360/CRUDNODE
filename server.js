var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./db/conn');
const model = require('./db/model');

/*var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");
var nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});
var User = mongoose.model("User", nameSchema);*/


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/addname", (req, res) => {
    var myData = new model(req.body);
    myData.save()
     .then(item => {
          res.send("Name saved to database");
          res.send(req.body);
          console.log(req.body);
     })
     .catch(err => {
          res.status(400).send("Unable to save to database");
     });
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});