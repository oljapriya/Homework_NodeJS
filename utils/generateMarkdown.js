// TODO: Create a function that returns a license badge based on which license is passed in

function generateMarkdown(data, githubInfo) {
  return `
  # **${data.title}**
  ${data.badge}

  ## Description 
  ${data.description}

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
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Licence
  ${data.license}

  ## Contributors
  ${data.contributing}

  ## Test
  ${data.test}

  ## Repository

  - [Project Repo] (${data.repo})
  
  ## GitHub

  ![My Image] (${githubInfo.githubImage})
  - ${githubInfo.name}
  - [GitHub Profile] (${githubInfo.profile})
  - ${githubInfo.email}

  `;
}
module.exports = generateMarkdown;

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


