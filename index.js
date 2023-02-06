const { response } = require('express');
const inquirer = require('inquirer');
const Mainmenu = require('./lib/Mainmenu');
const localHost = 'http://localhost:3001'
const _table = require('console.table') ;
//const Shieldlogo = require('./lib/ShieldLogo')



function splashScreen (){  
  //console.log(Shieldlogo)
  console.log(`Welcome to the Strategic Homeland Intervention, Enforcement and Logistics Division Employee Roster and Editor.
   `)
  showMainMenu()
}
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
    // console.log(data)
    const colTitle = 'Department Sub-divsions';
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





function viewEmployees(){
  fetch(`${localHost}/api/employee`, {
    method: 'GET',
  }).then((response) => {
    response.json().then( ({ data }) => {  
                        
      data = data.map(({id, first_name, last_name, manager_fname, manager_lname, ...restOfEmployee}) => { // this employee > { firstname: x', manager_fname, manager_lname}
        return {      

          id: `${id}`,
          employee: `${first_name} ${last_name}`,
          ...restOfEmployee,          
          manager: (manager_fname == null) ? 'ANSWERS TO NO ONE' : `${manager_fname} ${manager_lname}`
        }
      })
      const colTitle = 'Employee Roster'
      formatTableData(data, colTitle);
    })
  })
}

// adds a department to the database
function addDept(){
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter the name of the new department',
      name: 'newDepartment',
      validate: (entry) => {
        if (entry === ''){
          return 'I still need the name of the new department.'
        }
        return true
        }, 
      }       
  ]).then((response) => {
    console.log(response.newDepartment)
    // const mySqlUpload = `INSERT INTO department (id, name) VALUES(${response.newDepartment})`
    fetch(`${localHost}/api/department`, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({name:response.newDepartment}),
    }).then((responsetwo) => {
      console.log(`${response.newDepartment} has been added to the S.H.I.E.L.D. database.`);
      showMainMenu()
    })
  })
}
    



function addRole(){
  fetch(`${localHost}/api/role`, {
    method: 'GET',
  }).then((response) => {
    // console.log(response)
    response.json().then( ({ data:roles }) => {
      fetch(`${localHost}/api/department`, {
        method: 'GET',
      }).then((responseDept) => {
        responseDept.json().then (({ data:departments}) => {
          inquirer
          .prompt([
            {
              type: 'list',
              message: 'Which department will this role be under?',
              name: 'addRoleDept',
              choices: departments.map(department => {              
              return{ 
                name: department.name,                 
                value: department.id,
              }   
            })  
            },
            {
              type: 'input',
              message: 'What is the name of this new role?',
              name: 'addRoleName',                            
            },
            {
              type: 'input',
              message: 'What is the salary for this role?',
              name: 'addRoleSalary',
            }
          ]).then(answerObj =>{
              console.log(answerObj)
              fetch(`${localHost}/api/role`, {
                method: 'POST',
                headers: {'Content-type':'application/json'},
                body: JSON.stringify({name:answerObj}),
              }).then((answerObj) => {
                console.log(`${answerObj.addRoleName} has been added to the S.H.I.E.L.D. database.`);
                showMainMenu();
              })
            
          })
        })  
      })
    })
  })  
}


function addEmployee(){

}

function updateEmployee(){
  
}

function quitProgram(){

}

function formatTableData(data , columnTitle) {  
  console.table(columnTitle, data)
  return;
}
  


splashScreen();





