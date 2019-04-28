const sequelize = require("sequelize");
const databaseUrl = process.env.DATABASE_URL || 'postgres://localhost:5432/fitness-tracker'
const db = new sequelize(databaseUrl, {
  logging: false,
  operatorsAliases: false
});

const Favicon = db.define("favicon", {
  date_created: { type: sequelize.DATE, defaultValue: sequelize.NOW() },
  resolution: sequelize.ENUM("16", "32", "64"),
  buffer: sequelize.TEXT
});

module.exports = { db, Favicon };
