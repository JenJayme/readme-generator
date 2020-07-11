//UTILITIES NEEDED
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const axios = require('axios');
const json2md = require("json2md")

// const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//ARRAY TO HOLD PERSONAL DATA
const userData = {};

//ARRAY TO HOLD README FILE CONTENT
const fileContent = [];

//ARRAY OF OBJECTS FOR QUESTIONS, with input types and var names for key values. 
let questions = [
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
];

//PROMPTS USER FOR PERSONAL INFO
function getUserInformation() {
    return inquirer.prompt(questions).then(function (userInput) {
        console.log("userInput: ", userInput);
        userData.name = userInput.name,
        userData.location = userInput.location,
        userData.bio = userInput.bio,
        userData.linkedIn = userInput.linkedIn,
            // userData.githubURL = userInput.githubURL,
            // userData.title = userInput.title,
            // userData.demo = userInput.demo,
            // userData.introText = userInput.introText,
            // userData.instructions = userInput.instructions,
            // userData.screenshot = userInput.screenshot,
            // userData.example = userInput.example,
            // userData.shoutOuts = userInput.shoutOuts
            // add installation, license, tests, questions
        console.log("userData: ", userData);
    })
};

// writeFile function with filename, content and callback function
function writeFile(userData) {
    var userDataStr = generateMarkdown(userData);

    fs.writeFile('NewREADME.md', userDataStr, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
};

function generateMarkdown(userData) {
    return `

## Project title 
${userData.title}

## Description
${userData.introText}

## Demo
${userData.githubURL}

### Table of Contents
${userData.toc}

## Installation
${userData.instructions}

## License
${userData.license}

## Contributing
${userData.contributing}

## Tests
${userData.test}

## Questions
${userData.questions}

## Authored By
${userData.name}\n
${userData.bio}\n
${userData.location}\n
LinkedIn: ${userData.linkedIn}

## Gif Example
![Screenshot](${userData.screenshot})
 `;
}

module.exports = generateMarkdown;


async function init() {
    await getUserInformation();
    writeFile(userData);
    // writeFile();
}

init();