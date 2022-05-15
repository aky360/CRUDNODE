const app = require("./app");


app.listen(process.env.PORT, () => {
     console.log(`the server is running on port is  ${process.env.PORT}`);
});
