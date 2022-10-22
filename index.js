// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: function(name) {
            if (name) {
                return true;
            } else {
                console.log('You must enter your project title!')
                return false;
            }
        }
    }, {
        type: 'input',
        name: 'user',
        message: 'What is your GitHub username? (Required)',
        validate: function(name) {
            if (name) {
                return true;
            } else {
                console.log('You must enter your GitHub username!')
                return false;
            }
        }
    }, {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }, {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?'
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
        choices: ['MIT', 'ISC', 'GNU LGPL', 'Unlicense', 'none'],
        default: 'MIT'
    }])
    .then(input => {
        return input;
    })
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) throw err;
        console.log('README has been created!')
    })
}

// TODO: Create a function to initialize app
function init() {
    questions() // Prompt user to get input data
        .then(input => {
            return generateMarkdown(input);
        })
        .then(markdown => {
            writeToFile('./dist/README.md', markdown);
        })
        .catch(err => {
            console.log(err);
        })
}

// Function call to initialize app
init()

