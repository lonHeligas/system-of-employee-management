INSERT INTO department (id, name)
  VALUES (1, "Operations"),
         (2, "Communications"),
         (3, "Sciences"),
         (4, "Engineering"),
         (5, "Maintenance");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Field Officer", "1000000", 1),
       (2, "N.O.C.", "1500000", 1),
       (3, "Field Agent", "90000", 1),
       (4, "Research-Engineering", "70000", 4),
       (5, "Weapons R&D", "80000", 4), 
       (6, "Gear R&D", "80000", 4), 
       (7, "Bioresearch", "70000", 3),
       (8, "Research-Xeno", "70000", 3),
       (9, "Research-IT", "70000", 3),
       (10, "Data Monitor", "60000", 2),
       (11, "Comm Coordinator", "72000", 2),
       (12, "Ops Communications", "80000", 2), 
       (13, "Field Engineering", "80000", 5), 
       (14, "Vehicle Operations", "60000", 5), 
       (15, "Infrastructure Ops", "60000", 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Nicholas", "Fury", 1, 1),
       (2, "Phil", "Coulson", 1, 1),
       (3, "Jemma", "Simmons", 3, 2),
       (4, "Leopold", "Fitzgerald", 4, 2),
       (5, "Melinda", "May", 3, 2),
       (6, "Grant", "Ward", 3, 2),
       (7, "Daisy", "Johnson", 3, 2),
       (8, "Alfonzo", "Mackenzie", 5, 2),
       (9, "Elena", "Rodriguez", 3, 2),
       (10, "Bobbie", "Morse", 2, 1),
       (11, "Maria", "Hill", 12, 2),
       (12, "Billy", "Koening", 11, 1),
       (13, "Antoine", "Triplett", 3, 2),
       (14, "Deke", "Shaw", 9, 4),
       (15, "Victoria", "Hand", 1, 1),
       (16, "Jack", "Warner", 13, 4),
       (17, "Piper", "Hamilton", 10, 15),
       (18, "David", "Campbell", 11, 15),
       (19, "Alex", "Warren", 15, 15),
       (20, "Daniel", "Sousa", 3, 7);




       