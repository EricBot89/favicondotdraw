const sequelize = require("sequelize");
const db = new sequelize("postgres://localhost:5432/favicon-draw");

const Favicon = db.define("favicon", {
	date_created: {type: sequelize.DATE, defaultValue: sequelize.NOW()},
	resolution: sequelize.ENUM("16","32","64"),
	buffer: sequelize.TEXT,
})

module.exports = {db, Favicon};

