const Sequelize = require("sequelize");

const DB_NAME = "lavie";
const DB_USER = "root";
const DB_PASS = "cassiano";
const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
};

let db = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.error("Unable to establish a connection to the database");
}

async function hasConnection() {
  try {
    await db.authenticate();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Unable to establish a connection to the database");
  }
}

Object.assign(db, {
  hasConnection,
});

module.exports = db;