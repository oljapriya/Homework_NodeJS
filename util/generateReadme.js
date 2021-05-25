// TODO: Create a function that returns a license badge based on which license is passed in

function generateReadme(answers) {
  return `
  # **${answers.title}**
  ${answers.badge}

  ## Description 
  ${answers.description}

  ## Table of contents

  - [Description] (#Description)
  - [Instalation] (#Instalation)
  - [Usage] (#Usage)
  - [Licence] (#Licence)
  - [Contributors] (#Contributors)
  - [Test] (#Test)
  - [Repository Link] (#Repository)
  - [GitHub Info] (#GitHub)

  ## Instalation
  ${answers.installation}

  ## Usage 
  ${answers.usage}

  ## Licence
  ${answers.license}

  ## Contributors
  ${answers.contributing}

  ## Test
  ${answers.test}

  ## Repository

  - [Project Repo] (${answers.repo})
  
  ## GitHub

  ![My Image] (${answers.githubImage})
  - ${answers.name}
  - [GitHub Profile] (${answers.profile})
  - ${answers.email}

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


