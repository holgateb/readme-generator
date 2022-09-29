// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return ![license](`https://img.shields.io/badge/License-${license}-green.svg`);
  }
    return "";
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return "* [license](#License)";
  }
    return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    
    ${data.license}
    `
    }
    return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description

${data.description}
${renderLicenseBadge(data.license)}

## Table Of Contents

* [Installation](#Installation)
* [Usage](#Usage)
${renderLicenseLink(data.license)}
* [Contributing](#Contributing)
* [Testing](#Testing)
* [Questions](#Questions)

## Installation

${data.install}

## Usage

${data.usage}

## Contributing

${data.contribute}

## Testing

${data.test}

## Questions?

[Github](${data.github})

[Email](${data.email})

`;
}

module.exports = generateMarkdown;
