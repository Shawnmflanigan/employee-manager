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
