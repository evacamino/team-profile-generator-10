const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const manangerList = []
const engineerList = []
const internList = []

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
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officenumber)
    manangerList.push(manager);
  });
}
async function promptEngineer(){
  await inquirer.prompt(engineerPrompts).then(function(answers){
   const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
   engineerList.push(engineer);
  })
}

async function promptIntern(){
  await inquirer.prompt(internPrompts).then(function(answers){
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
    internList.push(intern);
})
}
async function main() {
  await promptManager();
  await promptEngineer();
  await promptIntern();
 await console.log(manangerList);
await console.log(engineerList);
await console.log(internList);
}

main();



//inquierer
// module.exports = Employee
