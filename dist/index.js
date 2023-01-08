#! /usr/bin/env node
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import { generateMarkdown, renderLicense } from './utils/generateMarkdown.js';
// Array of questions for user input
const questions = async () => {
    const response = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: function (name) {
                if (name) {
                    return true;
                }
                else {
                    console.log('You must enter your project title!');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'user',
            message: 'What is your GitHub username? (Required)',
            validate: function (name) {
                if (name) {
                    return true;
                }
                else {
                    console.log('You must enter your GitHub username!');
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
            choices: [
                'MIT',
                'BSD 2-Clause',
                'BSD 3-Clause',
                'Boost',
                'GNU LGPL',
                'GNU AGPL',
                'GNU GPL v2',
                'GNU GPL v3',
                'Mozilla',
                'Unlicense',
                'none'
            ],
            default: 'MIT'
        }
    ]);
    return response;
};
// Write file to '/out' directory
function writeToFile(dirName, readme, license) {
    try {
        fs.writeFileSync(dirName + '/README.md', readme);
        console.log('✅ README Created Successfully!');
        if (license) {
            fs.writeFileSync(dirName + '/LICENSE', license);
            console.log('✅ LICENSE Created Successfully!');
        }
    }
    catch (error) {
        console.error('❌ ' + error);
    }
}
// Main app function
const init = async () => {
    const answers = await questions();
    const markdown = generateMarkdown(answers);
    const license = renderLicense(answers);
    const directory = path.join(path.resolve(), '/out');
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }
    writeToFile(directory, markdown, license);
};
// Function call to initialize app
init();
//# sourceMappingURL=index.js.map