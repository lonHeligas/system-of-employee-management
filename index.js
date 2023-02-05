const { response } = require('express');
const inquirer = require('inquirer');
const Mainmenu = require('./lib/Mainmenu');
const localHost = 'http://localhost:3001'
const _table = require('console.table') ;




function showMainMenu (){ 
  // * console.log("Hello there.")
  inquirer
  .prompt(Mainmenu).then(selection => {
    // * console.log(selection);
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

function viewRoles(){
  fetch(`${localHost}/api/role`, {
    method: 'GET',    
  }).then((response) => {
   response.json().then( ({ data }) => {
    const colTitle = 'Employmente Roster';
    formatTableData(data, colTitle);
   })
  })
}

function viewDepartments(){  
  fetch(`${localHost}/api/department`, {
    method: 'GET',    
  }).then((response) => {   
response.json().then( ({ data }) => {  
  const colTitle = 'Department Roster'
  formatTableData(data, colTitle);
  })
})
}




function formatTableData(data , columnTitle) {  
  console.table(columnTitle, data)
  return;
}

function viewEmployees(){
  fetch(`${localHost}/api/employee`, {
    method: 'GET',
  }).then((response) => {
    response.json().then( ({ data }) => {  
      const colTitle = 'Employee Roster'
      formatTableData(data, colTitle);
  })
})
}





showMainMenu();





