const fs = require('fs');
const inquirer = require('inquirer');
const generateMd = require('./utils/generateMarkdown') //???//

const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    }
];



function writeToFile(fileName, data) {

    //FS write file
    fs.writeFile('index.html', html, (err) =>
  err ? console.error(err) : console.log('Success!');
)};

function init() {
    //ask the user questions

        //THEN I want to pass 'responses' to 'generateMarkdown' so we can get the 'markdown'

        //THEN write the markdown to a file    
}

init();