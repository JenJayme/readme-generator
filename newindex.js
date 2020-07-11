const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios")

//PROMPTS USER FOR PERSONAL INFO
//TODO: Try to shorten this function by using the above questions array instead of typing out all prompts. But don't break it 'cause this works.
let questions = [{

    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What's your name?"
        },
        {
            type: "input",
            name: "location",
            message: "Where are you located?"
        },
        {
            type: "input",
            name: "bio",
            message: "Please enter a tag line or brief bio statement:"
        },
        {
            type: "input",
            name: "linkedIn",
            message: "Your linkedIn page? "
        },
        // {
        //     type: "input",
        //     name: "githubURL",
        //     message: "Enter the link to the Repo on Git Hub: "
        // },
        // {
        //     type: "input",
        //     name: "title",
        //     message: "What's the title of your app or project? "
        // },
        // {
        //     type: "input",
        //     name: "demo",
        //     message: "Enter the link where a demo can be viewed (deployed link): "
        // },
        // {
        //     type: "input",
        //     name: "introText",
        //     message: "Enter a few sentences to introduce the project and it's use: "
        // },
        // {
        //     type: "input",
        //     name: "instructions",
        //     message: "Enter instructions to install and run the app: "
        // },
        // {
        //     type: "input",
        //     name: "screenshot",
        //     message: "Enter the relative path for your screenshot: "
        // },
        // {
        //     type: "input",
        //     name: "example",
        //     message: "Enter the relative path for your example gif: "
        // },
        // {
        //     type: "input",
        //     name: "shoutOuts",
        //     message: "Any acknowledgements to include? "
        // },
        //add license, tests, questions
    ])
};


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