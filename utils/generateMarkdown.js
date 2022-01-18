// // This is a function that that will returns a license badge based on which license is passed in
// // If there is no license, return an empty string

function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-blue)";
    case "Apache-2.0":
      return "![License](https://img.shields.io/badge/License-Apache--2.0-brightgreen)";
    case "GPL-2.0":
      return "![License: ISC](https://img.shields.io/badge/License-GPL--2.0-green)";
    case "BSD-3-Clause":
      return "![License: GPL v3](https://img.shields.io/badge/License-BSD--3--Clause-yellowgreen)";
    case "MPL-2.0":
      return "![License: GPL v3](https://img.shields.io/badge/License-MPL--2.0-yellow)";
    case "CDDL-1.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-CDDL--1.0-orange)](https://opensource.org/licenses/CDDL-1.0)";
    case "No License":
      return "";
  }
}

// this function will return the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "[License: MIT](https://opensource.org/licenses/MIT)]";
    case "Apache-2.0":
      return "[License](https://opensource.org/licenses/Apache-2.0)]";
    case "GPL-2.0":
      return "[License: ISC](https://opensource.org/licenses/GPL-2.0)";
    case "BSD-3-Clause":
      return "[License: GPL v3](https://opensource.org/licenses/BSD-3-Clause)";
    case "MPL-2.0":
      return "[License: GPL v3](https://opensource.org/licenses/MPL-2.0)";
    case "CDDL-1.0":
      return "[License: GPL v3](https://opensource.org/licenses/CDDL-1.0)";
    case "No License":
      return "";
  }
}

// This function will  return the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "No License":
      return "";
    default:
      return `# This Project is licensed under the ${license} license`;
  }
}

// // TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description\n
${data.description}
## Table of Contents\n
- [Installation](#installation)\n
- [Usage](#usage)\n
${renderLicenseLink(data.license)}
- [Contributing](#contributing)\n
- [Tests](#tests)
## Installation\n
${data.installation}
## Usage\n
${data.usage}
${renderLicenseSection(data.license)}
## Contributing\n
${data.contribution}
## Tests\n
${data.test}
---\n
## Questions\n
Contact me at\n
Github: [@${data.username}](https://github.com/${data.username})\n
Email: ${data.email}
`;
}
// function generateMarkdown(data) {
//   console.log(data); //can removed
//   return `# ${data.project}

//   ## Description

//   ${data.description}

//   ## License

//   ## Contact

//   Check my GitHub account: [${data.github}](https://www.github.com/${data.github})
//   Check my Email: ${data.email}

// `;
// }
module.exports = generateMarkdown;
