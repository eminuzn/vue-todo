const mysql = require('mysql');

// Create mySQL Connection
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "vue_todo",
    multipleStatements: true
});

module.exports = db;