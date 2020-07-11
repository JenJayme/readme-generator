const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const axios = require('axios');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

var userData = [];

//PROMPTS USER FOR PERSONAL INFO
function getUserInformation() {
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
        {
            type: "input",
            name: "githubURL",
            message: "Your Git Hub URL? "
        },
        {
            type: "input",
            name: "Title",
            message: "What's the Title of your app or project?"
        },
        {
            type: "input",
            name: "demo",
            message: "Enter a URL where a demo can be viewed (deployed link): "
        },
    ]).then(function (userInput) {
        // add the new quote with the corresponding author into our quote storage
        userData.push({
            name: userInput.name,
            location: userInput.location,
            bio: userInput.bio,
            linkedIn: userInput.linkedIn,
            githubURL: userInput.githubURL
        });
        console.log(userData);
    })
}

getUserInformation();