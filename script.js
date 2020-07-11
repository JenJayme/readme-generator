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
            message: "Please enter your name: "
        },
        {
            type: "input",
            name: "location",
            message: "Please enter your location: "
        },
        {
            type: "input",
            name: "bio",
            message: "Please enter your bio: "
        },
        {
            type: "input",
            name: "linkedIn",
            message: "Please enter your linkedIn: "
        },
        {
            type: "input",
            name: "githubURL",
            message: "Please enter your Git Hub URL: "
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