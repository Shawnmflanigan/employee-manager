DROP DATABASE IF EXISTS employee_mng;

CREATE DATABASE employee_mng;

USE employee_mng;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id DECIMAL NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY (id)
);


INSERT INTO departments (name)
VALUES ("Sales"), ("Engineering"), ("Legal"), ("Hospitality");

INSERT INTO roles (title, salary, department_id)
VALUES ("Business Development", 50000.00, 1), ("Sales Engineer", 60000.00, 1), ("Junior Developer", 60000.00, 2), ("Full Stack Developer", 80000.00, 2), ("In House Council", 100000.00, 3), ("Kitchen Staff", 35000.00, 4), ("Operations", 45000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Frank", 1, 2), ("Percy", "Waters", 1, 2), ("Jane", "Doe", 2, 4), ("Stacy", "Tavarez", 2, 4), ("Hello", "Dolly", 3, 5), ("Terrance", "Noname", 4, 7), ("That", "Person", 4, 7);
