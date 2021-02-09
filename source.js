// Dependancies
const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");

// mySql connection
var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "B00tC@mp",
    database: "employee_mng"
});

// Inquirer flow

const start = () => {
    inquirer.prompt({
        name: 'choices',
        type: 'list',
        message: 'Welcome to Employee Manager: please choose from the following.',
        choices: ['View all Employees', 'View all Employees by Department', 'View all Employees by Manager', 'Add Employee', 'Remove Employee', 'Update Employee Role', 'Update Employee Manager', 'View all Roles', 'Add Role', 'Remove Role', 'Exit Employee Manager']
    })
        // Choices
        .then((answer) => {
            if (answer.choices === 'View all Employees') {
                veiwAll();
            } else if (answer.choices === 'View all Employees by Department') {
                console.log('View Departments');
                start();
            } else if (answer.choices === 'View all Employees by Manager') {
                console.log('View all Employees by Manager');
                start();
            } else if (answer.choices === 'Add Employee') {
                console.log('Add Employee');
                start();
            } else if (answer.choices === 'Remove Employee') {
                console.log('Remove Employee');
                start();
            } else if (answer.choices === 'Update Employee Role') {
                console.log('Update Employee Role');
                start();
            } else if (answer.choices === 'Update Employee Manager') {
                console.log('Update Employee Manager');
                start();
            } else if (answer.choices === 'View all Roles') {
                console.log('View all Roles');
                start();
            } else if (answer.choices === 'Add Role') {
                console.log('Add Role');
                start();
            } else if (answer.choices === 'Remove Role') {
                console.log('Remove Role');
                start();
            } else {
                connection.end();
            }
        })
}

// functions for each selection 

// view all employees
const veiwAll  = () => {
    console.log('Selecting all employees...\n');
    connection.query('SELECT employee.id, first_name, last_name, roles.title, roles.salary FROM employee LEFT JOIN roles ON employee.role_id = roles.id;', (err, res) => {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.table(res);
      start();
    });
  };



// Connect to the DB
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    start();
});



