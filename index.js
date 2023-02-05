const { response } = require('express');
const inquirer = require('inquirer');
const Mainmenu = require('./lib/Mainmenu');

const localHost = 'http://localhost:3001'


function showMainMenu (){ 
  console.log("Hello there.")
  inquirer
  .prompt(Mainmenu).then(selection => {
    console.log(selection);
    switch (selection.choice){
      case 'viewdept': 
        viewDepartments();
        break;
      case 'viewroles':
        viewRoles();
        break;
      case 'viewemps':
        viewEmployees();
        break;
      case 'adddept':
        addDept();
        break;
      case 'addrole':
        addRole();
        break;
      case 'addemp':
        addEmployee();
        break;
      case 'updateemp':
        updateEmployee();
        break;
      case 'quit':
        quitProgram();
        break;  
    }
  })
}


function viewDepartments(selection){  
  fetch(`${localHost}/api/department`, {
    method: 'GET',
    
  }).then((response) => {
   response.json().then(data => console.log(data))
  })
}


function viewEmployees(){
  fetch(`${localHost}/api/employee`, {
    method: 'GET',

  }).then((response) => {
    response.json().then(data => console.log(data))
  })
}

showMainMenu();





