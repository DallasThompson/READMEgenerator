const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the Title of your READ.ME?",
      name: "title",
    },
    {
      type: "input",
      message: "Enter your Description section information.",
      name: "description",
    },

    {
      type: "input",
      message: "Enter your Installation section information.",
      name: "installation",
    },
    {
      type: "input",
      message: "Enter your Usage section information",
      name: "usage",
    },
    {
      type: "list",
      message: "Enter your License section information.",
      name: "license",
      choices: ["NPM", "NODE", "RUBY"],
    },
    {
      type: "input",
      message: "Enter your Contributors section information",
      name: "contributing",
    },
    {
      type: "input",
      message: "Enter your Tests section information",
      name: "tests",
    },
    {
      type: "input",
      message: "Enter your Questions section information",
      name: "questions",
    },
    {
      type: "input",
      message: "Enter email address here.",
      name: "email",
    },
    {
      type: "input",
      message: "Enter your GITHUB username here.",
      name: "username",
    },
  ])
  .then((response) => {
    var finalMarkdown = generateMarkdown(response);
    writeToFile(finalMarkdown);
  });

function writeToFile(content) {
  fs.writeFileSync("generatedFiles/README.md", content);
}
