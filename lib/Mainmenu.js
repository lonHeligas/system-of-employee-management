const Mainmenu =   [
  {
  type: 'list',
  message: 'What would you like to do?',
  name: 'choice',
  choices: [
    {name: 'View All Departments', value:'viewdept'},
    {name: 'View All Roles', value:'viewroles'},
    {name: 'View All Employees', value:'viewemps'},
    {name: 'Add a Department', value:'adddept'},
    {name: 'Add a role', value:'addrole'},
    {name: 'Add an employee', value:'addemp'},
    {name: 'Update an employee', value:'updateemp'},
    {name: 'Quit', value:'quit'}
    ]
  }
]
module.exports = Mainmenu