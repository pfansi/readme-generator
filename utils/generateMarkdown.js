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
      return "[License: MIT](https://opensource.org/licenses/MIT)";
    case "Apache-2.0":
      return "[License](https://opensource.org/licenses/Apache-2.0)";
    case "GPL-2.0":
      return "[License: ISC](https://opensource.org/licenses/GPL-2.0)";
    case "BSD-3-Clause":
      return "[License: BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause)";
    case "MPL-2.0":
      return "[License: MPL-2.0](https://opensource.org/licenses/MPL-2.0)";
    case "CDDL-1.0":
      return "[License: CDDL-1.0](https://opensource.org/licenses/CDDL-1.0)";
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
  ## Description:
  ${data.description}
  ## Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation:
  ---
  Run this command to install dependencies:
  <pre><code>
  ${data.installation}
  </code></pre>

  ## Usage:
  ---
  Run this command to start the app:
  <pre><code>
  ${data.usage}
  </code></pre>

  ## License:
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  
  ## Contributing:
  ${data.contributing}

  ## Tests:
  ${data.tests}
  
  ## Questions:
  * **Contact details:**
    * Github: [@${data.username}](https://github.com/${data.username})
    * Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
