// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license) {
      return `https://img.shields.io/badge/license-${license}-brightgreen`
    } else {
      return '';
    }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
    ## License

    ${renderLicenseBadge(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#license)
  * [Contributions](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.test}
  
  ## Questions

  If you have any questions about the project you can reach out to me at the email below or message me on GitHub with the username below. 

  Email: ${data.email} 
  GitHub Username: ${data.user}
  
  `;
}

module.exports = { generateMarkdown };
