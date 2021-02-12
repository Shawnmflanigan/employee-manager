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
        choices: ['View all Employees', 'View all Departments', 'View all Roles', 'Add Employee', 'Add Department', 'Add Role', 'Update Employee Manager', 'View Employee Manager', 'Remove Department', 'Remove Role', 'Remove Employee', 'View Budget by Department', 'Exit Employee Manager']
    })
        // Choices
        // MVP
        .then((answer) => {
            if (answer.choices === 'View all Employees') {
                veiwAll();
            } else if (answer.choices === 'View all Departments') {
                veiwDep();
            } else if (answer.choices === 'View all Roles') {
                viewRoles();
            } else if (answer.choices === 'Add Employee') {
                addEmp();
            } else if (answer.choices === 'Add Department') {
                addDep();
            } else if (answer.choices === 'Add Role') {
                addRole();
                // BONUS
            } else if (answer.choices === 'Update Employee Manager') {
                upEmpMan();
            } else if (answer.choices === 'View Employee Manager') {
                viewEmpMan();
            } else if (answer.choices === 'Remove Department') {
                remDep();
            } else if (answer.choices === 'Remove Role') {
                remRole();
            } else if (answer.choices === 'Remove Employee') {
                remEmp();
            } else if (answer.choices === 'View Budget by Department') {
                viewBud();
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
    console.log('Viewing all departments...\n');
    connection.query('SELECT * FROM departments', (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
};
    // THIS WILL BE UPDATED LATER TO BE ABLE TO VIEW EMPLOYEES BY DEPARTMENT!!!!
    // .then((answer) => {
    //     if (answer.choices === 'Sales') {
    //         console.log('sales');
    //         connection.query(
    //             'SELECT employee.id, first_name, last_name, roles.title, roles.salary FROM employee LEFT JOIN roles ON employee.role_id = roles.id WHERE department_id = 1', (err, res) => {
    //                 if (err) throw err;
    //                 console.table(res);
    //                 veiwDep();
    //             }
    //         )
    //     } else if (answer.choices === 'Engineering') {
    //         connection.query(
    //             'SELECT employee.id, first_name, last_name, roles.title, roles.salary FROM employee LEFT JOIN roles ON employee.role_id = roles.id WHERE department_id = 2', (err, res) => {
    //                 if (err) throw err;
    //                 console.table(res);
    //                 veiwDep();
    //             }
    //         )

    //     } else if (answer.choices === 'Legal') {
    //         connection.query(
    //             'SELECT employee.id, first_name, last_name, roles.title, roles.salary FROM employee LEFT JOIN roles ON employee.role_id = roles.id WHERE department_id = 3', (err, res) => {
    //                 if (err) throw err;
    //                 console.table(res);
    //                 veiwDep();
    //             }
    //         )

    //     } else if (answer.choices === 'Hospitality') {
    //         connection.query(
    //             'SELECT employee.id, first_name, last_name, roles.title, roles.salary FROM employee LEFT JOIN roles ON employee.role_id = roles.id WHERE department_id = 4', (err, res) => {
    //                 if (err) throw err;
    //                 console.table(res);
    //                 veiwDep();
    //             }
    //         )

    //     } else {
    //         start();
    //     }
    // })

// View Employee Roles
const viewRoles = () => {
    console.log('View all roles...\n');
    connection.query("SELECT title FROM roles", (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });

};

// Add Employee
const addEmp = () => {
    console.log('Add an Employee...\n');
    connection.query("SELECT title FROM roles", (err, results) => {
        if (err) throw err;
        inquirer.prompt([
            {
                name: 'title',
                type: 'list',
                message: 'Please select a title:',
                choices() {
                    const depArray = [];
                    results.forEach(({ title }) => {
                        depArray.push(title);
                    });
                    return depArray;
                }
            }, //Next question {}
        ]);
    });
    start();
};

// Add Department
const addDep = () => {
    console.log('Add Department...\n');
    inquirer
        .prompt([
            {
                name: 'Department',
                type: 'input',
                message: 'Please type the name of the Department:'
            },
        ])
        .then((answer) => {
            console.log(answer.Department)
            connection.query(
                'INSERT INTO departments SET ?',
                {
                    name: answer.Department,
                },
                (err) => {
                    if (err) throw err;
                    console.log('You have added a new Depatment!');
                })
            start();
        });
};

// Add Role
const addRole = () => {
    console.log('Add Role...\n');
    connection.query('SELECT * FROM departments', (err, results) => {
        if (err) throw err;

    inquirer
        .prompt([
            {
                name: 'Role',
                type: 'input',
                message: 'Please type the the name of the new Role:'
            },
            {
                name: 'Salary',
                type: 'input',
                message: 'Please enter the salary for this role'
            },
            {
                name: 'Department',
                type: 'list',
                choices () {
                    const depArray = [];
                    results.forEach( department => {
                    depArray.push({name: department.name, value: department.id});
                    });
                    console.log(depArray);
                    return depArray;
                },
                message: 'Please choose a department:'
            },

        ])
        .then((answer) => {
            console.log(answer.Department)
            connection.query(
                'INSERT INTO roles SET ?',
                {
                    title: answer.Role,
                    salary: answer.Salary,
                    department_id: answer.Department
                },
                (err) => {
                    if (err) throw err;
                    console.log('You have added a new Role!');
                })
            start();
        });
});
};
//Update Employee Manager
const upEmpMan = () => {
    console.log('Update Employee Manager...\n');
    start();
};

// View Employee by Manager
const viewEmpMan = () => {
    console.log('View Employee Manager...\n');
    start();
};
// Remove Department
const remDep = () => {
    console.log('Remove Department...\n');
    start();
};

// Remove Role
const remRole = () => {
    console.log('Remove Role...\n');
    start();
};

// Remove Employee
const remEmp = () => {
    console.log('Remove an Employee...\n');
    connection.query("SELECT CONCAT (first_name,' ',last_name, ' ') as Name FROM employee", (err, results) => {
        if (err) throw err;
        inquirer.prompt([
            {
                name: 'choices',
                type: 'list',
                message: 'Please select an Employee to Remove:',
                choices() {
                    const empArray = [];
                    results.forEach(({ Name }) => {
                        empArray.push(Name);
                    });
                    return empArray;
                }
            },
        ])
    })
    start();
};

// View Budget by Department

const viewBud = () => {
    console.log('View Budget by Department..\n');
    start();
};