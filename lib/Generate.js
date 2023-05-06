//  function that returns a license badge based on which license is passed in
// If  no license, returning an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  }
  return `![License](https://img.shields.io/badge/license-${encodeURIComponent(
  license
  )}-Orange)`;
}

// function that returns the license link
// If there is no license, returning an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  }
  return `For more information about the license, go to [License](https://choosealicense.com/licenses/${license.toLowerCase()}/).`;
}

//function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  }
  return `This project is licensed under the ${license} license. ${renderLicenseLink(license)}`;
}

// function to generate markdown for README
function generateMarkdown(answers) {
  const licenseBadge = renderLicenseBadge(answers.license);
 return `# ${answers.Title}
# ${licenseBadge}

## Table of Content
 - [Description](#description)
 - [Usage](#usage)
 - [Contribution](#contribution)
 - [Installation](#installation)
 - [Questions](#questions)
 - [License](#license)



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

## License
  ${renderLicenseSection(answers.license)}


## Test
 ${answers.tests}

## Questions
 If you have encounter any issues or have any Questions Regarding this Project. Connect with me at
- Email -${answers.email} \n
- Github - [${answers.github}]   \n   Link -(https://github.com/${answers.github}) \n
- LinkedIn -${answers.LinkedIn}
  `;
  };


module.exports = generateMarkdown;
