const mysql = require("mysql2");
const config = require("./config.js");

const pool = mysql.createPool(config);

module.exports = pool.promise();