const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "What is your project titled?",
    name: "title",
  },
  {
    type: "input",
    message: "Please, enter a description.",
    name: "description",
  },
  {
    type: "list",
    message: "What license does your project need?",
    name: "license",
    choices: ["Apache License", "MIT License", "GNU GPLv3", "None"],
  },
  {
    type: "input",
    message: "What are the steps for installation?",
    name: "install",
  },
  {
    type: "input",
    message: "What is the usage of your application?",
    name: "usage",
  },
  {
    type: "input",
    message: "How can you contribute?",
    name: "contribute",
  },
  {
    type: "input",
    message: "Are there tests and if so, what commands can be used?",
    name: "test",
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  ];

//Installation, Usage, Contributing, and Tests

function writeToFile(fileName, data) {
  //FS write file
  return fs.writeFileSync(fileName, data);
}

function init() {
  //ask the user questions
  inquirer
    .prompt(questions)
    //THEN I want to pass 'responses' to 'generateMarkdown' so we can get the 'markdown'
    .then((response) => {
      console.log(response);
      writeToFile("README.md", generateMarkdown(response));
    });
  //THEN write the markdown to a file
}

init();
