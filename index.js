const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");

const managerPrompts = [
  {
    type: "input",
    name: "id",
    message: "What is your id?",
  },
  {
    type: "input",
    name: "managerName",
    message: "What is your Manager's name?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is your office number?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];
const engineerPrompts = [
  {
    type: "input",
    name: "id",
    message: "What is your id?",
  },
  {
    type: "input",
    name: "name",
    message: "What is your Engineer's name?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

const internPrompts = [
  {
    type: "input",
    name: "id",
    message: "What is your id?",
  },
  {
    type: "input",
    name: "internName",
    message: "What is your intern's name?",
  },
  {
    type: "input",
    name: "school",
    message: "What is your school name?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

async function promptManager() {
  await inquirer.prompt(managerPrompts).then(function (answers) {
    console.log(answers);
  });
}
promptManager();

async function promptIntern(){
  await inquirer.prompt(internPrompts).then(function(answers){
    console.log(answers)
  })
}
promptIntern();
// function promptEngineer(){
//   inquirer.prompt(engineerPrompts).then(function(answers){
//     console.log(answers)
//   })
// }
// promptEngineer();
//inquierer
// module.exports = Employee
