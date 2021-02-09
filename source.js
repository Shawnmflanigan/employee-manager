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

// Connect to the DB
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    start();
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
                veiwDep();
            } else if (answer.choices === 'View all Employees by Manager') {
                viewMan();
            } else if (answer.choices === 'Add Employee') {
                addEmp();
            } else if (answer.choices === 'Remove Employee') {
                remEmp();
            } else if (answer.choices === 'Update Employee Role') {
                upEmp();
            } else if (answer.choices === 'Update Employee Manager') {
                upEmpMan();
            } else if (answer.choices === 'View all Roles') {
                viewRoles();
            } else if (answer.choices === 'Add Role') {
                addRole();
            } else if (answer.choices === 'Remove Role') {
                remRole();
            } else {
                connection.end();
            }
        })
}

// FUNCTIONS FOR EACH SELECTION 

// view all employees
const veiwAll = () => {
    console.log('Selecting all employees...\n');
    connection.query(
        'SELECT employee.id, first_name, last_name, roles.title, roles.salary FROM employee LEFT JOIN roles ON employee.role_id = roles.id;', (err, res) => {
            if (err) throw err;
            console.table(res);
            start();
        });
};

// View Department
const veiwDep = () => {
    inquirer.prompt({
        name: 'choices',
        type: 'list',
        message: 'Please choose a department',
        choices: ['Sales', 'Engineering', 'Legal', 'Hospitality', 'Exit']
    })

        .then((answer) => {
            if (answer.choices === 'Sales') {
                console.log('sales');
                connection.query(
                    'SELECT employee.id, first_name, last_name, roles.title, roles.salary FROM employee LEFT JOIN roles ON employee.role_id = roles.id WHERE department_id = 1', (err, res) => {
                        if (err) throw err;
                        console.table(res);
                        veiwDep();
                    }
                )
            } else if (answer.choices === 'Engineering') {
                connection.query(
                    'SELECT employee.id, first_name, last_name, roles.title, roles.salary FROM employee LEFT JOIN roles ON employee.role_id = roles.id WHERE department_id = 2', (err, res) => {
                        if (err) throw err;
                        console.table(res);
                        veiwDep();
                    }
                )

            } else if (answer.choices === 'Legal') {
                connection.query(
                    'SELECT employee.id, first_name, last_name, roles.title, roles.salary FROM employee LEFT JOIN roles ON employee.role_id = roles.id WHERE department_id = 3', (err, res) => {
                        if (err) throw err;
                        console.table(res);
                        veiwDep();
                    }
                )

            } else if (answer.choices === 'Hospitality') {
                connection.query(
                    'SELECT employee.id, first_name, last_name, roles.title, roles.salary FROM employee LEFT JOIN roles ON employee.role_id = roles.id WHERE department_id = 4', (err, res) => {
                        if (err) throw err;
                        console.table(res);
                        veiwDep();
                    }
                )

            } else {
                start();
            }
        })
}

// View Employee by manager
const viewMan = () => {
    console.log('Viewing Employees by manager...\n');
    start();
};

// Add Employee
const addEmp = () => {
    console.log('Add an Employee...\n');
    start();
};

// Remove Employee
const remEmp = () => {
    console.log('Remove an Employee...\n');
    start();
};

// Update Employee
const upEmp = () => {
    console.log('Update Employee...\n');
    start();
};

// Update Employee Manager
const upEmpMan = () => {
    console.log('Update Employee Manager...\n');
    start();
};

// View Roles
const viewRoles = () => {
    console.log('View Roles...\n');
    start();
};

// Add Role
const addRole = () => {
    console.log('Add Roles...\n');
    start();
};

// Remove Role
const remRole = () => {
    console.log('Remove Role...\n');
    start();
};