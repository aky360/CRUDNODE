const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const getData = require('./routes/getPost');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));


app.use('/apiGet', getData);
app.use('/apiPost', getData);
app.use('/apiGets', getData);


app.listen(3000, () => {
  console.log("Server started on port 3000...");
});
