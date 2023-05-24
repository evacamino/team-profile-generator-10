const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const EmployeeList = [];
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const fs = require("fs")
const render = require("./src/html-generator.js");

function buildTeam() {
  // Create the output directory if the output path doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR)
  }
  fs.writeFileSync(outputPath, render(EmployeeList), "utf-8");
}


// const managerPrompts = [
//   {
//     type: "input",
//     name: "id",
//     message: "What is your id?",
//   },
//   {
//     type: "input",
//     name: "name",
//     message: "What is your Manager's name?",
//   },
//   {
//     type: "input",
//     name: "officeNumber",
//     message: "What is your office number?",
//   },
//   {
//     type: "input",
//     name: "email",
//     message: "What is your email?",
//   },
//   {
//     type: "confirm",
//     name: "addAgain",
//     message: "Would you like to add another employee?",
//   },
// ];
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
  {
    type: "confirm",
    name: "addAgain",
    message: "Would you like to add another employee?",
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
    name: "name",
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
  {
    type: "confirm",
    name: "addAgain",
    message: "Would you like to add another employee?",
  },
];
function createManager (){
  console.log('lets get team started')
inquirer.prompt( [
  {
    type: "input",
    name: "id",
    message: "What is your id?",
  },
  {
    type: "input",
    name: "name",
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
]).then(answers=>{
  const manager = new Manager(
    answers.name,
    answers.id,
    answers.email,
    answers.officeNumber
  );
  EmployeeList.push(manager)
  employeeMenu();
})
  
}
const employeeMenu = () => {
  inquirer
    .prompt({
      type: "list",
      name: "emp_type",
      message: "select employee type",
      choices: ["Engineer", "Intern", "None"],
    })
    .then(({ emp_type }) => {
      if (emp_type === "Intern") {
        promptIntern();
      } else if (emp_type === "Engineer"){
        promptEngineer();
      
    }else {
      buildTeam();
      }
    })}
// async function promptManager() {
//   await inquirer.prompt(managerPrompts).then(function (answers) {
//     const manager = new Manager(
//       answers.name,
//       answers.id,
//       answers.email,
//       answers.officeNumber
//     );

//     EmployeeList.push(manager);
//     if (answers.addAgain) {
//       mainMenu();
//     } else {
//       console.log(EmployeeList);
//     }
//   });
// }
async function promptEngineer() {
  await inquirer.prompt(engineerPrompts).then(function (answers) {
    const engineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    EmployeeList.push(engineer);
    if (answers.addAgain) {
      employeeMenu();
    } else {
      buildTeam();
      console.log(EmployeeList);
    }

  });
}

async function promptIntern() {
  await inquirer.prompt(internPrompts).then(function (answers) {
    const intern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    EmployeeList.push(intern);
    if (answers.addAgain) {
      employeeMenu();
    } else {
      buildTeam();
      console.log(EmployeeList);
    }
  });
}
// async function main() {
//   await promptManager();
//   await promptEngineer();
//   await promptIntern();
//  await console.log(manangerList);
// await console.log(engineerList);
// await console.log(internList);
// }
createManager();

//inquierer
// module.exports = Employee
