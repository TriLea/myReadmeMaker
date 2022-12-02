// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## License:
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  - [About](#About)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Future](#future)

  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ${renderLicenseLink(data.license)}
  ## License:
  ${renderLicenseSection(data.license)}
  ## Testing:
  ${data.test}
  ## Contact Information:
  - Github: [${data.github}](https://github.com/${data.github}
  - Email: [${data.email}](mailto:user@example.com) `;

};

module.exports = generateMarkdown;
