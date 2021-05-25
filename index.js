// TODO: Include packages needed for this application
const fs = require ('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateReadme = require('./util/generateReadme');
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function promptUser() {
  return inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is your project title?"
  },
  {
    type: "input",
    name: "description",
    message: "Please provide the project usage"
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide the installation instructions"
  },
  {
    type: "list",
    name: "licence",
    message: "Please provide the project licence or your badge link",
    choices: [
      "Apache",
      "Academic",
      "GNU",
      "ISC",
      "MIT",
      "Mozilla",
      "Open"    
    ]
  },
  {
    type: "input",
    name: "contributing",
    message: "Please provide the contributing parties",
  },
  {
    type: "input",
    name: "test",
    message: "Please provide the project tests",
  },
  {
    type: "input",
    name: "username",
    message: "What it your github user name?"
  },
  {
    type: "input",
    name: "username",
    message: "What is your repo link?"
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email:"

  }
]);
}
// TODO: Create a function to write README file
async function init() {
  try {
    const answers = await promptUser();
    const generateContent = generateReadme(answers);
    await writeFileAsync('./README.md', generateContent);
    console.log("Successfully wrote to README.md");
  }catch(err){
    console.log(err)
  }
}
// Function call to initialize app
init();
