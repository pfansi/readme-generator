//Install the package needed for the application

//This node package will handle the file system operations
const fs = require("fs");

//This module will handle interaction between files
const path = require("path");

//This npm module will handle the questions and return input from the user
const inquirer = require("inquirer");

// This module will handle data into string
const util = require("util");

//  this import the array of questions to prompt to the users
const questions = require("./utils/questions");

// this import the function file that will write the readme file
const generateMarkdown = require("./utils/generateMarkdown");

// this promisify method will convert the writeFile function
// to a promise based function
const createFile = util.promisify(fs.writeFile);

// Create a function to initialize app
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const data = generateMarkdown(answers);

    await createFile("./utils/generated-readme.md", data);

    console.log("Successfully created a README file!");
  } catch (error) {
    console.error(error.message);
  }
}

// initialize app
init();
