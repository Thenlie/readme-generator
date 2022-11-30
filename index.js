import inquirer from 'inquirer';
import fs from 'fs';
import { generateMarkdown } from './utils/generateMarkdown.js';

// Array of questions for user input
const questions = async () => {
    const response = await inquirer.prompt([
        {
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
        }
    ]);

    return response;
};

// Write file to /dist directory
function writeToFile(fileName, data) {
    try {
        fs.writeFileSync(fileName, data);
    } catch (error) {
        console.error(error);
    }
}

// Main app function
const init = async () => {
    const answers = await questions();
    const markdown = generateMarkdown(answers);
    writeToFile('./dist/README.md', markdown);
}

// Function call to initialize app
init();
