const inquirer = require('inquirer');

inquirer.prompt([
    {
        name: 'title',
        message: 'Enter your repository title here',
        type: 'imput'
    }])
    .then(function(answer) {
        console.log(answer);
    })