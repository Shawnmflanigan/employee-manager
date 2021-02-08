// Dependancies
const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleTable = require("console.table");

// mySql connection
var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,
  
    user: "root",
  
    password: "B00tC@mp",
    database: "employee_mng"
  });

  // Connect to the DB
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
  });
  


