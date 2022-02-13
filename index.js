// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'Enter title of repository here: ',
        type: 'input'
    },
    {
        name: 'description',
        message: 'Describe application in 1-2 sentences: ',
        type: 'input'
    },
    {
        name: 'installation',
        message: 'List step-by-step instructions on how to install your project',
        type: 'input'
    },
    {
        name: 'screenshots',
        message: 'Copy and paste the relative path of your photo inside of parentheses',
        type: 'input'
    },
    {
        name: 'license',
        message: 'Which license will you use for your project?',
        type: 'list',
        choices: ['MIT', 'IBM', 'MOZILLA'],
    },
];

inquirer.prompt(questions).then(answer => {
    console.log(answer);
    const markdown = generateMarkdown(answer);
    console.log(markdown);
    writeToFile(markdown);
    
});




// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("sample.md", data, error => {
        console.log(error);
    });
}


// TODO: Create a function to initialize app
function init() {

}

// TODO: Function call to initialize app
init();
