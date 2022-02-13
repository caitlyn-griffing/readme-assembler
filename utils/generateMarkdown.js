// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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

  ${data.license}

`;
}

module.exports = generateMarkdown;

// for or while loop to attach screenshots to this code below