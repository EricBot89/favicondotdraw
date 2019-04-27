const express = require("express");
const router = express.Router();
const mainPage = require("../views/index");

router.get("/", (req,res,next) => {
	res.send(mainPage());
	});

router.post("/", (req, res, next) => {
    next();
	});

module.exports = router;
