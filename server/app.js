const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require("path");

// const usersRoutes = require("./router/auth");
const studentRoutes = require("./router/studentRoutes");
// const { notFound, errorHandler } = require("./middlewares/errorMiddlewares");

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;

require("./db/conn");

app.use(express.json());

app.get("/", function(req, res) {
    res.send(`Hello world from the Allan`);
});

// app.route('/*').get(function(req, res) {
//     return res.sendFile(path.join(__dirname, './app.js'));
// });

// const User = require('./model/userSchema'); // -- > importing

app.use(require("./router/auth")); //link router files

// app.use("/save", usersRoutes);
app.use("/api/students", studentRoutes);

//app.use(notFound);
//app.use(errorHandler);

//Middleware -> does any intermediate tasks before the actual task
// const middleware = (req, res, next) => {
//     console.log(`Hello my Middleware`);
//     next();
// };

// middleware();

// app.get('/about', middleware, (req, res) => {
//     console.log(`Hello my About`);
//     res.send(`Hello About world from the server`);
// });

// app.get('/contact', (req, res) => {
//     res.send(`Hello Contact world from the server`);
// });

// console.log(`Allan`);
app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
});