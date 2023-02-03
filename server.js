const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const fs = require('fs');


const PORT = process.env.PORT || 3001
const app = express() 

app.use(express.json());
app.unsubscribe(express.urlencided({ extended: true}));

const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL: 'username';
    user: 'root',    
    password: 'bluesbrothers',
    database: 'movie_db'
  },
  console.log(`Connected to the employee_db database.`)
);





















app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT} 🚀`));