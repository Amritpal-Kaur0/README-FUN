// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  }
  return `![License](https://img.shields.io/badge/license-${encodeURIComponent(
  license
  )}-Orange)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  }
  return `For more information about the license, go to [License](https://choosealicense.com/licenses/${license.toLowerCase()}/).`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  }
  return `## License\n\nThis project is licensed under the ${license} license. ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const licenseBadge = renderLicenseBadge(answers.license);
 return `# ${answers.Title}
# ${licenseBadge}

## Table of Content

 - [Project Description](#Description)
 - [Usage](#Usage)
 - [Contribution](#Contribution)
 - [Installation](#Instation)
 - [Questions](#Questions)
 - [Licenece](#Licence)



## Description
  ${answers.Description}

## Usage
 ${answers.Usage}

## Installation
  ${answers.Installation}

## Author 
 ${answers.author}

## Contribution
 Contribution ,issues and feature requests are Welcome.
 Feel free to Check ${answers.contribution}


  ${renderLicenseSection(answers.license)}


## Test
 ${answers.tests}

## Questions
 Email -${answers.email}
 Github - [${answers.github}]      Link -(https://github.com/${answers.github})
 LinkedIn -${answers.LinkedIn}
  `;
  };


module.exports = generateMarkdown;