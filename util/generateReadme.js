// TODO: Create a function that returns a license badge based on which license is passed in

function generateReadme(answers) {
  return `
  <h1 align="center">${answers.title}</h1>

  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br/>
  

  ## Description 
  ${answers.description}

  ## Table of contents

  - [Description] (#Description)
  - [Instalation] (#Instalation)
  - [Usage] (#Usage)
  - [Licence] (#License)
  - [Contributors] (#Contributors)
  - [Test] (#Test)
  - [Repository Link] (#Repository)
  - [GitHub Info] (#GitHub)

  ## Instalation
  ${answers.installation}

  ## Usage 
  ${answers.description}

  ## Licence
  This application is covered by the ${answers.license} license.

  ## Contributors
  ${answers.contributing}

  ## Test
  ${answers.test}

  ## Repository

  - [Project Repo] [${answers.username}] (https://github.com/${answers.username})<br/>

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


