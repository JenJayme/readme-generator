//UTILITIES NEEDED
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const axios = require('axios');

// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

//ARRAY TO HOLD PERSONAL DATA
var userData = [];

//ARRAY TO HOLD README FILE CONTENT
const fileContent = [];

//ARRAY OF OBJECTS FOR QUESTIONS, with input types and var names for key values. 
const questions = [
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
];

//PROMPTS USER FOR PERSONAL INFO
//TODO: Try to shorten this function by using the above questions array instead of typing out all prompts. But don't break it 'cause this works.
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
            message: "Enter the link to the Repo on Git Hub: "
        },
        {
            type: "input",
            name: "title",
            message: "What's the title of your app or project? "
        },
        {
            type: "input",
            name: "demo",
            message: "Enter the link where a demo can be viewed (deployed link): "
        },
        {
            type: "input",
            name: "introText",
            message: "Enter a few sentences to introduce the project and it's use: "
        },
        {
            type: "input",
            name: "instructions",
            message: "Enter instructions to install and run the app: "
        },
        {
            type: "input",
            name: "screenshot",
            message: "Enter the relative path for your screenshot: "
        },
        {
            type: "input",
            name: "example",
            message: "Enter the relative path for your example gif: "
        },
        {
            type: "input",
            name: "shoutOuts",
            message: "Any acknowledgements to include? "
        },
    //add instructions, installation, license, contributing, tests, questions
    ]).then(function (userInput) {
        // add the new quote with the corresponding author into our quote storage
        userData.push({
            name: userInput.name,
            location: userInput.location,
            bio: userInput.bio,
            linkedIn: userInput.linkedIn,
            githubURL: userInput.githubURL,
            title: userInput.title,
            demo: userInput.demo,
            introText: userInput.introText,
            instructions: userInput.instructions,
            screenshot: userInput.screenshot,
            example: userInput.example
            //add table of contents, installation, usage, license, contributing, tests, questions
        });
        console.log(userData);
    })
};

// writeFile function with filename, content and callback function
function writeToFile(fileName, data) {

    fs.writeFile('NewREADME.md', 'NEW CONTENT - is this working?', function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  }); 

//Get README template content from the given templatePath
 @param {string} templatePath

 const getReadmeTemplate = async templatePath => {
   const spinner = ora('Loading README template').start()
 
   try {
     const template = await promisify(fs.readFile)(templatePath, 'utf8')
     spinner.succeed('README template loaded')
     return template
   } catch (err) {
     spinner.fail('README template loading fail')
     throw err
   }
 }


};

function init() {
    getUserInformation().then(writeToFile())
}

init();