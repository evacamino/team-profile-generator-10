const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const EmployeeList = [];

const managerPrompts = [
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
  {
    type: "confirm",
    name: "addAgain",
    message: "Would you like to add another employee?",
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
const mainMenu = () => {
  inquirer
    .prompt({
      type: "list",
      name: "emp_type",
      message: "select employee type",
      choices: ["Engineer", "Intern", "Manager"],
    })
    .then(({ emp_type }) => {
      if (emp_type === "Manager") {
        promptManager();
      } else if (emp_type === "Engineer") {
        
        promptEngineer();
      } else {
        promptIntern();
      }
    });
};
async function promptManager() {
  await inquirer.prompt(managerPrompts).then(function (answers) {
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );

    EmployeeList.push(manager);
    if (answers.addAgain) {
      mainMenu();
    } else {
      console.log(EmployeeList);
    }
  });
}
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
      mainMenu();
    } else {
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
      mainMenu();
    } else {
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

mainMenu();

//inquierer
// module.exports = Employee
