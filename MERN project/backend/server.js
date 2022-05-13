const app = require("./app");
// app.set('PORT', process.env.PORT || 4000); app.get('PORT');
const dotenv = require('dotenv');
dotenv.config({ path: 'backend/config/config.env' });
//   OR YOU CAN USE IN SINGLE LINE AS BELOW
//require("dotenv").config({path:"config/config.env"});
const connectDatabase = require('./config/database');
connectDatabase();

app.listen(process.env.PORT, () => {
     console.log(`the server is running on port is  ${process.env.PORT}`);
});