const app = require("./app");

app.listen(process.env.PORT, () => {
     console.log("the server is running on port ", process.env.PORT);
     console.log(`http://localhost:${process.env.PORT}/`);
});