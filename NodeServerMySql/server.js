const express = require("express");
const bodyParser = require("body-parser");
require("./db/conn");
const cors = require("cors");
const app = express();
// const model = require('./models/signup');
const model = require("./models/signup");

app.set("PORT", process.env.PORT || 5000);

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


app.get("/Login", async (req, res) => {
  // let myData = new model(req.body);
  console.log("vsdvsd ", req.body.email);
  console.log("email ", req.body.email);
  console.log("password ", req.body.password);

  // let user = await model.findOne(req.body.email);
  // if (user == null) {
  //   console.log("invalid user and ");
  //   return "register the user ";
  // }

  // console.log("user data ", user);

  // const email = req.body.email;
  // const password = req.body.password;
  const findResult = await model.find({ email: req.body.email,  password: req.body.password});
  //const findPass = await model.find({ password: req.body.password });
  console.log("this is ========== ", findResult);

  if (req.body.email != null || req.body.password != null) {
    // const email = req.body.email;
    // const password = req.body.password;
    // const findResult = await model.find({ email: email, password: password });

    console.log("data line ");
    console.log("this is findMail ========== ", findResult);
    console.log("this is findPass ========== ", findResult);

    console.log("this is second data ========== ", findResult.email);
    console.log("the mail is valid and user can login ");
    return findResult;
  }
  // email = model.find()
  // await Person.findOne({ name: 'Charles', surname: 'Brown' }).exec();
  // if (req.body.email == )
});

app.post("/Signup", async (req, res) => {
  console.log("request.body.firstName", req.body);
  let myData = new model(req.body);                          // we can also use new model for new instance of model and then save() 
  let result = await myData.save();
  console.log("result", result);
  res.send(result);
  //  .then(item => {
  //    console.log("items", item);
  //      //res.send("Name saved to database");
  //      res.send(req.body);
  //      console.log(req.body);
  // })
  // .catch(err => {
  //      res.status(400).send("Unable to save to database");
  // });
});

app.get("/", async (req, resp) => {
  const products = await model.find();
  if (products.length > 0) {
    resp.send(products);
  } else {
    resp.send({ result: "No Product found" });
  }
});

app.listen(app.get("PORT"), () =>
  console.log(`Server running on port ${app.get("PORT")}`)
);
