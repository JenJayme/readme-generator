//UTILITIES & GLOBAL VARIABLES===============================================================

const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');

// const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//ARRAY TO HOLD PERSONAL DATA
const userData = {};

//ARRAY TO HOLD README FILE CONTENT
const fileContent = [];

//ARRAY OF OBJECTS FOR QUESTIONS, with input types and var names for key values.===============================================================

let questions = [
    {
        type: "input",
        name: "title",
        message: "What's the title of your app or project? "
    },
    {
        type: "input",
        name: "introText",
        message: "Enter a few sentences about the project for the intro section: "
    },
    {
        type: "input",
        name: "demo",
        message: "Enter the link where a demo can be viewed (deployed link) - https:// "
    },
    {
        type: "input",
        name: "githubPage",
        message: "Your Git Hub page - https://github.com/"
    },
    {
        type: "input",
        name: "githubRepo",
        message: "Repo name on Git Hub - https://github.com/yourname/"
    },
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
        message: "Enter a short bio tag line (eg web developer):"
    },
    {
        type: "input",
        name: "linkedIn",
        message: "Your linkedIn page - https://www.linkedin.com/in/"
    },
    {
        type: "input",
        name: "contact",
        message: "Best phone or email to contact you with questions?"
    },
    {
        type: "input",
        name: "instructions",
        message: "Enter instructions to install and run the app: "
    },
    {
        type: "input",
        name: "images",
        message: "have you saved a screenshot.png and an example.gif in the images folder? "
    },
    {
        type: "input",
        name: "shoutOuts",
        message: "Any acknowledgements to include? "
    },
    //add tests, questions
];

//PROMPTS USER FOR PERSONAL INFO AND SAVES RESPONES TO USERDATA OBJECT===============================================================

function getUserInformation() {
    return inquirer.prompt(questions).then(function (userInput) {
        console.log("userInput: ", userInput);
        userData.title = userInput.title,
        userData.introText = userInput.introText,
        userData.instructions = userInput.instructions,
        userData.demo = userInput.demo,
        userData.githubPage = userInput.githubPage,
        userData.githubRepo = userInput.githubRepo,
        userData.name = userInput.name,
        userData.location = userInput.location,
        userData.bio = userInput.bio,
        userData.linkedIn = userInput.linkedIn,
        userData.contact = userInput.contact,
        userData.images = userInput.images,
        userData.shoutOuts = userInput.shoutOuts
        // dd installation, license, tests, questions
        console.log("userData: ", userData);
    })
};

// CREATE NEW README FILE WITH USERDATA. GRABS DATA FROM USERDATA OBJ, INSERTS DATA INTO STRING WITH MD HEADINGS, STRINGIFIES THAT, AND WRITES IT ALL TO NEW README.===============================================================

function writeFile(userData) {
    var userDataStr = generateMarkdown(userData);

    fs.writeFile('README.md', userDataStr, function (err) {
        if (err) throw err;
        console.log('Your README File has been created! You will find it in the folder where you ran the start command.');
    });
};

//README TEMPLATE===============================================================

function generateMarkdown(userData) {
    return `

<style>

hr {
    clear: both;
    padding-top: 20px;
    padding-bottom: 20px;
  };

img[src*="#visuals"] {
    width:600px;
 };

img[src*="#icons"] {
    height: 60px;
    float: left;
    clear: right;
};

img[src*="#profile-pic"] {
    height: 70px;
    float: left;
    display: block;
    border-radius: 50%
};

img[src*="#li-logo"] {
    height: 15px;
};
 </style>

# ${userData.title}
![Travis Status](https://img.shields.io/travis/:jenjayme/:readme-generator)
![License](https://img.shields.io/github/license/jenjayme/readme-generator)
![Inquirer](https://img.shields.io/npm/v/inquirer)
<hr>

${userData.introText}

<hr>

## Contents | Quick Links
[Getting Started](#start)     |     [Instructions](#instruct)     |     [Demo](#demo)     |     [Built With](#built)     |     [Author](#author)     |     [Visuals](#visuals)     |     [Contributing & Tests](Contributing.md)     |     [Contact](#contact)

<hr>

## [Getting Started](#start)

### Download the app from Git Hub here:
* [Repo URL](https://github.com/${userData.githubPage}/${userData.githubRepo}/)

### To run: 
* ${userData.instructions}

### You can view a demo here: 
* [Deployed URL](https://${userData.demo}#demo)

<hr>

## [Visuals](#visuals)

![Screenshot](images/screenshot.png#visuals)

![Example Gif](images/example.gif#visuals)

<hr>

## [Built With](#built)
![HTML5, CSS & Javascript](images/ic-html-css-js.png#icons)
![VS Code](images/ic-vscode.png#icons)
![Markdown](images/ic-md.png#icons)

<hr>

## [Author](#author)
${userData.name}\n
${userData.bio}\n
${userData.location}\n
![LinkedIn](images/li-logo.png#li-logo)[/JenJayme](https://www.linkedin.com/in/jenjayme)

## Questions
For questions or to discuss collaborations on this or other projects, contact me at:\
${userData.contact}(#contact)

 `;
}

//END README TEMPLATE===============================================================

//MAKE MARKDOWN DATA AVAILABLE OUTSIDE BROWSER 
module.exports = generateMarkdown;

//CALL FUNCTIONS===============================================================

async function init() {
    await getUserInformation();
    writeFile(userData);
    // writeFile();
}

init();