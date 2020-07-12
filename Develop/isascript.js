const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios")
let questions = [{
    type: "input",
    message: "Create project title?",
    name: "title"
}, {
    type: "input",
    message: "what is the description?",
    name: "description"
}, {
    type: "input",
    message: "What did you install?",
    name: "install"
}, {
    type: "input",
    message: "Usage?",
    name: "Usage"
}, {
    type: "list",
    message: "Select license",
    choices: ["YAY", "WOW", "MIT", "UCB"],
    name: "license"
}, {
    type: "input",
    message: "who contribute?",
    name: "contributing"
}, {
    type: "input",
    message: "what test?",
    name: "test"
}, {
    type: "input",
    message: "Questions",
    name: "Questions"
}]
function userInputs() {
    inquirer.prompt(questions)
        .then((work) => {
            console.log(work);
            var generate = `
        
  ## Project title: ${work.title}
  
  ## Description: ${work.description}
  
  ### Table of Contents: 
  
  ## Installation: ${work.install}
  
  ## Usage: ${work.Usage}
  
  ## License: ${work.license}
  
  ## Contributing: ${work.contributing}
  
  ## Tests: ${work.test}
 
  ## Questions: ${work.Questions}
 
 ![Powered By]https://img.shields.io/badge/NEWB-ITWORKED-brightgreen)
        `
            fs.writeFileSync("newReadme.md", generate, function() {
                console.log("YOU BETTER WORK")
            })
        })
}
axios
    .get("")
userInputs();