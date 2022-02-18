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
        name: 'mainSS',
        message: 'Copy and paste the relative path of your Main SS photo here',
        type: 'input'
    },
    {
        name: 'installation',
        message: 'List step-by-step instructions on how to install your project',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'Provide step-by-step instructions on how to use your app. Add more photos if necessary - ![image title here](relativePathToImageHere.png)',
        type: 'input'
    },
    {
        name: 'license',
        message: 'Select the license you wish to use for your project',
        type: 'list',
        choices: ['MIT', 'IBM', 'MOZILLA'],
    },
    {
        name: 'tests',
        message: 'Give explicit instructions on how to run all necessary tests',
        type: 'input'
    },
    {
        name: 'contributers',
        message: 'Add everyone who contributed towards this project',
        type: 'input'
    },
    {
        name: 'deployed',
        message: 'Enter the URL to your deployed application',
        type: 'input'
    },
    {
        name: 'ghubLink',
        message: 'Enter the URL to this projects GitHub',
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
    {
        name: 'portfolio',
        message: 'Enter URL to your portfolio',
        type: 'input'
    }
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
