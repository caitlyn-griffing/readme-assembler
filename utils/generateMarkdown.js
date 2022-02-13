// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (license === 'IBM') {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  }
  else if(license === 'MOZILLA'){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {return renderLicenseBadge(license)}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {return renderLicenseLink(license)}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
  # ${data.title}
  ---

  > If you are not willing to learn, no one can help you. If you are determined to learn, no one can stop you. -Zig Ziglar

  ## Description 

  ${data.description}

  ---

  ## Table of Contents:

  *[Installation](#installation)

  *[Usage](#usage)

  *[License](#license)

  *[Questions](#questions)

  ---

  ### Installation

  Install the necessary dependencies below:

  ${data.installation}

  ---

  ### screenshots

  ![Image 1](${data.screenshots})

  ---

  ### License

  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;

// for or while loop to attach screenshots to this code below