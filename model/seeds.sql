INSERT INTO departments (name)
VALUES ("Sales"), ("Engineering"), ("Legal"), ("Hospitality");

INSERT INTO roles (title, salary, department_id)
VALUES ("Business Development", 50000.00, 1), ("Sales Engineer", 60000.00, 1), ("Junior Developer", 60000.00, 2), ("Full Stack Developer", 80000.00, 2), ("In House Council", 100000.00, 3), ("Kitchen Staff", 35000.00, 4), ("Operations", 45000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Frank", 1, 2), ("Percy", "Waters", 2, NULL), ("Jane", "Doe", 3, 4), ("Stacy", "Tavarez", 4, NULL), ("Hello", "Dolly", 5, NULL), ("Terrance", "Noname", 6, 7), ("That", "Person", 7, NULL);
