// TODO: Include packages needed for this application
const inquirer = require('inquirer');
var fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'Header'
  },

  {
      type: 'input',
      message: 'Explain your project?',
      name: 'About'
  },

  {
      type: 'input',
      message: 'Describe how to install your project?',
      name: 'installation'
  },

  {
      type: 'input',
      message: 'Descrie your usage?',
      name: 'usage'
  },

  {
    type: 'input',
    message: 'What is the future of your project?',
    name: 'future'
  },

  {
      type: 'list',
      message: 'Select a license?',
      name: 'license',
      choices: ['MIT', 'Apache 2.0', 'GPLv2', 'The UnLicense']
  },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) 
{
  return fs.writeFileSync(fileName, data);
}
// file written successfully

// // TODO: Create a function to initialize app

// i think answers might be the wrong thing to pass
function init() 
{ 
  inquirer.prompt(questions).then((answers) => 
  {
    console.log('README.MD Generated');
    writeToFile('README.md', generateMarkdown({answers}));
  });
}

// Function call to initialize app
init();