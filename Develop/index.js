// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'location',
    message: 'Where would you like me to send your file?',
  },
  {
    type: 'checkbox',
    name: 'sections',
    message: 'Which sections do you want?',
    choices: [
    'table of contents','About', 'Installation', 'Usage', 'future',
    ],
  },
];

var questionTwo = 
{
  type: 'input',
  name: 'content',
};

inquirer
  .prompt(
    questions,
  )
  .then(answers => {
    console.info('Answer:', answers.sections);
    var fileText;

    if (answers.sections[0] == 'table of contents')
    {
      for (var section in answers.sections)
      {
        if (section == 'table of contents')
          continue;
      }
    }
    
    for (var section in answers.sections)
    {
      if (section == 'table of contents')
        continue;
      
      questionTwo.message = 'Please type out your ' + section + ' section.';
      inquirer.prompt(questionTwo).then(answers => 
      {
        
      });
    }
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();