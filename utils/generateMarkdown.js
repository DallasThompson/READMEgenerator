var licenses = {
  NPM: "https://docs.npmjs.com/policies/npm-license",
  NODE: "https://github.com/nodejs/node/blob/main/LICENSE",
  RUBY: "https://www.ruby-lang.org/en/about/license.txt",
};
var badges = {
  NPM: "https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white",
  NODE: "https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
  RUBY: "https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white",
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![image](${badges[license]})\n`;
}

function renderTitle(title) {
  return `#${title}\n\n`;
}
function renderDescription(description) {
  return `#Description\n - ${description}\n\n`;
}
function renderTableofContents(data) {
  var table = "#Table of Contents \n";
  table += data.description !== "" ? ` - [Description](#description) \n` : "";
  table +=
    data.installation !== "" ? ` - [Installation](#installation) \n` : "";
  table += data.usage !== "" ? ` - [Usage](#usage) \n` : "";
  table += data.license !== "" ? ` - [License](#license) \n` : "";
  table += data.contributing !== "" ? ` - [Contributes](#contributes) \n` : "";
  table += data.test !== "" ? ` - [Test](#test) \n` : "";
  table += data.questions !== "" ? ` - [Questions](#questions) \n` : "";
  return table;
}
function renderInstallation(installation) {
  return `#Installation\n - ${installation}\n\n`;
}
function renderUsage(usage) {
  return `#Usage\n - ${usage}\n\n`;
}
function renderLicense(license) {
  return `#License\n - [${license}](${licenses[license]})\n`;
}
function renderContribute(contributing) {
  return `#Contributes\n - ${contributing}\n\n`;
}
function renderTests(test) {
  return `#Tests\n - ${test}\n\n`;
}
function renderQuestions(questions) {
  return `#Questions\n - ${questions}\n`;
}
function renderEmail(email) {
  return ` - For additional questions email me here ${email}\n`;
}
function renderUsername(username) {
  return ` - [github](https://github.com/${username})\n`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var finalMarkdown = "";
  finalMarkdown =
    finalMarkdown + data.title !== "" ? renderTitle(data.title) : "";
  finalMarkdown += data.license !== "" ? renderLicenseBadge(data.license) : "";
  finalMarkdown +=
    data.description !== "" ? renderDescription(data.description) : "";
  finalMarkdown += renderTableofContents(data);
  finalMarkdown +=
    data.installation !== "" ? renderInstallation(data.installation) : "";
  finalMarkdown += data.usage !== "" ? renderUsage(data.usage) : "";
  finalMarkdown += data.license !== "" ? renderLicense(data.license) : "";
  finalMarkdown +=
    data.contributing !== "" ? renderContribute(data.contributing) : "";
  finalMarkdown += data.tests !== "" ? renderTests(data.tests) : "";
  finalMarkdown += data.questions !== "" ? renderQuestions(data.questions) : "";
  finalMarkdown += data.email !== "" ? renderEmail(data.email) : "";
  finalMarkdown += data.username !== "" ? renderUsername(data.username) : "";
  return finalMarkdown;
}

module.exports = generateMarkdown;
