const app = require("./app");


const server = app.listen(process.env.PORT, () => {
     console.log(`the server is running on port is  ${process.env.PORT}`);
});


process.on("unhandledRejection", (err) => {
     console.log(`Error: ${err.message}`);
     console.log(`Shutting down the server due to Unhandled Promise Rejection`);

     server.close(() => {
          process.exit(1);
     });
})
