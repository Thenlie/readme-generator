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
  const { license } = data;
  return `
  # ${data.title}
  ## License
  ${renderLicenseBadge(license)}
  `;
}

module.exports = { generateMarkdown };
