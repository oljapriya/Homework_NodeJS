// TODO: Create a function that returns a license badge based on which license is passed in

function generateReadme(answers) {
  return `
  <h1 align="center">${answers.title}</h1>

  ![badge](https://img.shields.io/badge/license-${answers.license}-green)
  


  ## Description 
  ${answers.description}

  ## Table of contents
  - [Description] (#description)
  - [Instalation] (#installation)
  - [Usage] (#usage)
  - [Licence] (#license)
  - [Contributors] (#contributing)
  - [Test] (#test)
  - [Repository Link] (#repo)
  - [Questions] (#questions)
  

  ## Installation
  ${answers.installation}

  ## Usage 
  ${answers.usage}

  ## Licence
  ![badge](https://img.shields.io/badge/license-${answers.license}-green)<br/>
  This application is covered by the ${answers.license} license.

  ## Contributing
  ${answers.contributing}

  ## Test
  ${answers.test}

  ##Qustions
  $${answers.questions}
  - Find me on GitHub[${answers.username}] (https://github.com/${answers.username})<br/>

  - Email me with any questions: ${answers.email}
  
 

  `;
}
module.exports = generateReadme;

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }


