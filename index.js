// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./lib/Generate.js');

console.log(" 😍 Welcome to README Generator App")

const questions =[
    {
      type: 'input',
      name: 'Title',
      message: '✅ What is the Title of your Project?',
    },
    {
      type: 'input',
      name: 'Description',
      message: '📨 Provide a short description explaining  your Project?',
    },
    {
      type: 'input',
      name: 'author',
      message: '👤 Who is the  author of this Project?',
    },
    {
      type: 'input',
      name: 'Usage',
      message: '🔧 What is the Usage of this Project ?',
    },
    {
      type: 'input',
      name: 'Installation',
      message: '🪜 What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
      type: 'input',
      name: 'contribution',
      message: '👪 How can users contribute to this project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: '👪 Enter tests Instructions?',
    },
    {
      type: 'input',
      name: 'github',
      message: '👤  Enter your GitHub Username(Required)',
  
    },
    {
      type: 'input',
      name: 'email',
      message: '📧 For any Queries related this Project Please Email at -',
    },
    {
      type: 'input',
      name: 'LinkedIn',
      message: '📧 Enter Your LinkedIn Username? -',
    },
    {
      type: 'list',
      name: 'license',
      message: '🪪 Choose a license that will best suits your projects?',
      choices:['C++','Apache','Unlicense','Node','MIT',]
    },
  ]

//  Function to write README file. 
function writeToFile(fileName, answers) {
      fs.writeFile(fileName, answers, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`${fileName} has been generated successfully!`);
        }
      });
 }
  
//  function to initialize the App 
function init() {
  inquirer.prompt(questions).then((answers) => {
      const file =generateMarkdown(answers);
      writeToFile("README.md",file)
    })
}

init();
