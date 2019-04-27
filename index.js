// Entry point for server module
const express = require("express");
const morgan = require("morgan");
const client = require("./models/index");
const router =  require("./routes");

const fs = require("fs");

const app = express();

app.use(morgan("dev"));
app.use(express.static("./public"));


app.use("/", router);

app.use("/", (res,req,next) => {
	res.status(404).send("This is a 404");
});
app.use((err,req,res,next) => {
	res.status(500).send(`So yeah, 500. this happened: \n ${err}`);
});

module.exports = app;
