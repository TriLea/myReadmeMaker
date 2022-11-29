// TODO: Include packages needed for this application
const inquirer = require('inquirer');
var fs = require('fs');

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
    'Table Of Contents','About', 'Installation', 'Usage', 'Future',
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
    var fileText = '';

    if (answers.sections[0] == 'Table Of Contents')
    {
      for (var section in answers.sections)
      {
        if (section == 'Table Of Contents')
          fileText = '## Table Of Contents/n/n';
        
        else
          fileText += '- [' + section + '](#' + section + ')/n';
      }
    }
    
    for (var section in answers.sections)
    {
      if (section == 'Table Of Contents')
        continue;
      
      questionTwo.message = 'Please type out your ' + section + ' section.';
      inquirer.prompt(questionTwo).then(answers => 
      {
        fileText += '/n## ' + section + '/n/n';
        fileText += answers.content;
      });
    }
    writeToFile(answers.location + '/README.md', fileText);
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) 
{
  try {
    fs.writeFileSync(fileName, data);
    console.info('file written successfully');

  } catch (err) {
    console.error(err);
  }
}

// TODO: Create a function to initialize app
function init() 
{
  
}

// Function call to initialize app
init();