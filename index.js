const inquirer = require('inquirer');
const Mainmenu = require('./lib/Mainmenu');

const localHost = 'http://localhost:3001'


function showMainMenu (){ 
  console.log("Hello there.")
  inquirer
  .prompt(Mainmenu).then(selection => {
    console.log(selection);
    if (selection.choice == "viewdept") {
      viewDepartments();
    }
  })
}


function viewDepartments(){
  fetch(`${localHost}/api/department`, {
    method: 'GET',
    
  }).then((response) => {
   response.json().then(data => console.log(data))
  })
}

showMainMenu();





