const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelizeDB = new Sequelize(
  `postgres://navidelyasi:${process.env.DB_PASS}@localhost:5000/${process.env.DB_NAME}`
);

module.exports = sequelizeDB;
