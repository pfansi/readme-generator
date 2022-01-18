// creating an array of questions for user input and export it as a module via inquirer

const questions = [
  {
    type: "input",
    message: "What is the name of the project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please Enter a short description of the Project",
    name: "description",
  },
  {
    type: "input",
    message: "Please enter the code to install dependencies",
    name: "installation",
  },
  {
    type: "input",
    message: "Which command will start running the application?",
    name: "usage",
  },
  {
    type: "input",
    message: "Please enter the contribution Guidelines for the user",
    name: "contributing",
  },
  {
    type: "input",
    message: "Enter The command that will run the tests",
    name: "tests",
  },
  {
    type: "list",
    message: "Choose license",
    name: "license",
    choices: [
      "MIT",
      "GPL-2.0",
      "GPL-3.0",
      "Apache-2.0",
      "BSD-3-Clause",
      "BSD-2-Clause",
      "MPL-2.0",
      "CDDL-1.0",
      "EPL-2.0",
      "No License",
    ],
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address ? ",
    name: "email",
  },
];

module.exports = questions;
