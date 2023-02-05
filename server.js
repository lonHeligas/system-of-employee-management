const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// ^ Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ^ connects to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL: 'username';
    user: 'root',    
    // MySQL: password
    password: 'bluesbrothers',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);  

// read all departments
app.get('/api/department', (req, res) => {
  const sql = `SELECT id, name FROM department`;
    db.query(sql, (err, rows) => {
      if (err){
        res.status(500).json({ error: err.message});
        return;
      }
      res.json({
        // * message: 'success',
        data: rows
      });
      
    })
})

// read all roles
app.get('/api/role', (req, res) => {
  const sql = `SELECT id, title, salary, department_id FROM role`;
    db.query(sql, (err, rows) => {
      if (err){
        res.status(500).json({ error: err.message});
        return;
      }
      res.json({
        // * message: 'success',
        data: rows
      });
      
    })
})

// read all employees
app.get('/api/employee', (req, res) => {
  const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, manager.first_name AS manager_fname, manager.last_name AS manager_lname FROM employee
  LEFT JOIN role ON employee.role_id = role.id
  LEFT JOIN department ON role.department_id = department.id
  LEFT JOIN employee AS manager ON employee.manager_id = manager.id`;
  
    db.query(sql, (err, rows) => {
      if (err){
        res.status(500).json({ error: err.message});
        return;
      }
      res.json({
        // * message: 'success',
        data: rows
      });
    })
})

// ^ Query database
db.query('SELECT * FROM role', function (err, results) {
  // * console.log(results);
});




// ^ add a department
app.post('/api/new-department', (req, res) => {
  
  const sql = `INSERT INTO department (name) 
  VALUES (?)`;
  const params = [req.body.name];
  console.log(req.body);
  // console.log(sql);
  // console.log(params);  
  db.query(sql, params, (err, result) => {
    if (err){
      res.status(400).json({ error: err.message });
    }
    res.json({
      message: 'success',
      data: 'test'
    });
  })
});


// ^ Default response for any other request (not found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT} 🚀`);
});

