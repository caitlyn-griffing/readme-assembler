// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (license === 'IBM') {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  }
  else if (license === 'MOZILLA'){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {return renderLicenseBadge(license)}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {return renderLicenseLink(license)}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
  # ${data.title}

  > If you are not willing to learn, no one can help you. If you are determined to learn, no one can stop you. -Zig Ziglar

  ## Description 

  ${data.description}

  ![Image 1](${data.mainSS})

  ---

  ## Table of Contents:

  *[Links](#links)

  *[Installation](#installation)

  *[Usage](#usage)

  *[Tests](#tests)

  *[License](#license)

  *[Contrubuters](#contributers)

  *[Contact](#contact)

  ---

  ## Links

  - [Deployed URL](${data.deployed})

  - [GitHub URL](${data.ghubLink})

  ---

  ## Installation

  Install the necessary dependencies below:

  ${data.installation}

  ---

  ## Usage

  In order to utilize this application follow the instructions listed below

  ${data.usage}

  ---

  ## Tests

  Below are explicit instructions on how to run all necessaary tests for this application

  ${data.tests}

  ---

  ## License

  ${renderLicenseSection(data.license)}

  ---

  ## Contributers

  Listed below are all of the people who contributed towards this project

  ${data.contributers}

  ---

  ## Contact

  If you have any additional questions you can contact me through email at ${data.email}.

  AND you can check out my work through the following links

  - [GitHub Profile](${data.ghubProfile})

  - [Portfolio](${data.portfolio})

`;
}

module.exports = generateMarkdown;

// future planning: see if i can create a for loop or a while loop to attach screenshots to the screenshot code for only the amount of screenshots you have
