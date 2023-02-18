import { ApacheLicense, BoostLicense, BSD2License, BSD3License, CCZ1License, Eclipse2License, GNUAGPL3License, GNUGPL2License, GNUGPL3License, GNULGPL2_1License, MITLicense, MozillaLicense, Unlicense } from '../lib/licenses/index.js';
// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'none') {
        return `![Project License Badge](https://img.shields.io/badge/license-${license}-brightgreen)`;
    }
    else {
        return '';
    }
}
// Function that returns the license link
// If there is no license, return an empty string
export function renderLicense(data) {
    const year = new Date().getFullYear();
    switch (data.license) {
        case 'Apache':
            return ApacheLicense(year, data.user);
        case 'BSD 2-Clause':
            return BSD2License(year, data.user);
        case 'BSD 3-Clause':
            return BSD3License(year, data.user);
        case 'Boost':
            return BoostLicense();
        case 'Creative Commons Universal':
            return CCZ1License();
        case 'Eclipse':
            return Eclipse2License();
        case 'GNU AGPL':
            return GNUAGPL3License(year, data.user);
        case 'GNU GPL v2':
            return GNUGPL2License(year, data.user);
        case 'GNU GPL v3':
            return GNUGPL3License(year, data.user);
        case 'GNU LGPL':
            return GNULGPL2_1License(year, data.user);
        case 'Mozilla':
            return MozillaLicense();
        case 'MIT':
            return MITLicense(year, data.user);
        case 'Unlicense':
            return Unlicense();
        default:
            return '';
    }
}
// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
    return `
  ## License
  
    ${data.license !== 'none'
        ? renderLicense(data)
        : 'There has not been any license set for this project.'}
    `;
}
// Function to generate markdown for README
export function generateMarkdown(data) {
    return `
  # ${data.title}  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [License](#license)
  * [Questions](#Questions)

  ***

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.test}
  
  ${renderLicenseSection(data)}
  
  ## Questions

  If you have any questions about the project you can reach out to me via email or GitHub with the information below. 

  >Email: ${data.email} 

  >GitHub : [${data.user}](https://github.com/${data.user})

  `;
}
//# sourceMappingURL=generateMarkdown.js.map