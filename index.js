// Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'Title of repository: ',
        type: 'input'
    },
    {
        name: 'description',
        message: 'Describe application in 1-2 sentences: ',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'Usage - How do you run this application:',
        type: 'input'
    },
    {
        name: 'installation',
        message: 'Installation - What installations were needed for your project:',
        type: 'input'
    },
    {
        name: 'tests',
        message: 'Tests - Give explicit instructions on how to run all necessary tests:',
        type: 'input'
    },
    {
        name: 'license',
        message: 'Select the license you wish to use for your project:',
        type: 'list',
        choices: ['MIT', 'IBM', 'MOZILLA'],
    },
    {
        name: 'contributers',
        message: 'Contributers - Add everyone who contributed towards this project. Type - with a space afterwards before each person',
        type: 'input'
    },
    {
        name: 'deployed',
        message: 'Deployed: Enter the URL to your deployed application',
        type: 'input'
    },
    {
        name: 'screenshot',
        message: 'Copy and paste the relative path of the screenshot for your project',
        type: 'input'
    },
    {
        name: 'email',
        message: 'Enter your email',
        type: 'input'
    },
    {
        name: 'ghubProfile',
        message: 'Enter the URL to your GitHub Profile',
        type: 'input'
    },
];

inquirer.prompt(questions).then(answer => {
    console.log(answer);
    const markdown = generateMarkdown(answer);
    console.log(markdown);
    writeToFile(markdown);
    
});




// Create a function to write README file
function writeToFile(data) {
    fs.writeFile("sample.md", data, error => {
        console.log(error);
    });
}


// Create a function to initialize app
// function init() {

// }

// Function call to initialize app
// init();
