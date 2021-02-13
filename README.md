# Command Line Employee Manager

This is a command line Employee Manager which allows the user to:

* Add departments, roles, employees

* View departments, roles, employees

* Update employee roles

* View employees by manager

* View the total utilized budget of a department -- ie the combined salaries of all employees in that department

* Remove Employees

## Table of Contents

- [General Info](#general-info)
- [Demo](#demo)
- [Technologies](#technologies)
- [Next Steps](#next-steps)
- [Author](#author)

## General information

This web application uses node.js and a sql database. After creating the database using the files in the model folder, open the source.js file and run the application by typing 'node source.js'

## Demo

[Demo](https://drive.google.com/file/d/13JoGC7rbQdqPvR5djnwM44E1iZMH0ZJr/view)

## Technologies

This application requires the following dependincies to be installed:

- [inquirer](https://www.npmjs.com/package/inquirer?activeTab=readme)
- [console.table](https://www.npmjs.com/package/console.table)
- [mysql](https://www.npmjs.com/package/mysql)

## Next steps

- Allow user to remove departments and roles.
- Allow user to update an employee's manager.
- Clean up interface and displayed information.
- Model the files using MVC with promisify and async functionality.

## Author

[Shawn Flanigan](https://github.com/Shawnmflanigan)