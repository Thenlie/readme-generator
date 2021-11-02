// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    }, {
        type: 'input',
        name: 'user',
        message: 'What is your GitHub username?'
    }, {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }, {
        type: 'input',
        name: 'description',
        message: 'What is the descritption of your project?'
    }, {
        type: 'input',
        name: 'install',
        message: 'What are the installation instructions for you project?'
    }, {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for your project?'
    }, {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for your project?'
    }, {
        type: 'input',
        name: 'test',
        message: 'What are the test instruction for your project?'
    }, {
        type: 'list',
        name: 'license',
        message: 'What is the license of your project?',
        choices: ['MIT', 'ISC', 'Apache', 'GPL'],
        default: 'MIT'
    }])
    .then(input => {
        return input;
    })
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions() // Prompt user to get input data
        .then(input => {
            return generateMarkdown(input);
        })
        .then(markdown => {
            console.log(markdown)
        })
}

// Function call to initialize app
init()

