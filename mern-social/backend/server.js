const app = require("./app");
const {connectDatabase}  = require("./config/database");
connectDatabase();
 
//const { PORT } = require('./config/config.env');
//const { PORT } = require("dotenv").config({path:"config/config.env"});

app.listen(process.env.PORT, () => {
     //console.log(config);
     console.log(`server is running on port ${process.env.PORT}`);
     console.log(process.env.PORT);
});
