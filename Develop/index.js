// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [{
        type: 'checkbox',
        name: 'sections',
        message: 'Which sections do you want?',
        choices: [
        'table of contents','About', 'Installation', 'Usage', 'future',
        ],
    },
];

inquirer
  .prompt(
    questions,
  )
  .then(answers => {
    console.info('Answer:', answers.sections);
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();