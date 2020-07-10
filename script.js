const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const axios = require('axios')

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function getUserInformation() {
    try {
      const { name } = await inquirer.prompt({
        message: "What's your name?",
        name: "name"
      });
      const { location } = await inquirer.prompt({
        message: "Where are you located?",
        name: "name"
      });
      const { bio } = await inquirer.prompt({
        message: "Please enter a brief bio.",
        name: "name"
      });
      const { linkedIn } = await inquirer.prompt({
        message: "What's your LinkedIn URL?",
        name: "name"
      });
      const { githubURL } = await inquirer.prompt({
        message: "What's your github URL?",
        name: "name"
      });
      console.log(data);
    
    } catch (err) {
      console.log(err);
    }
  }

  //     const repoNames = res.data.map(function(repo) {
//       return repo.

  getUserInformation();

      //   const { data } = await axios.get(
    //     `https://www.omdbapi.com/?t=${movie}&apikey=trilogy`
    //   );

//   var htmlContent = '<html>Whatever</html>';
  
//   fs.writeFile('/my-page.html', htmlContent, (error) => { /* handle error */ });

//   inquirer
//   .prompt({
//     message: "Enter your GitHub username",
//     name: "username"
//   })
//   .then(function({ username }) {
//     const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
//   })

//   axios.get(queryUrl).then(function(res) {
//     const repoNames = res.data.map(function(repo) {
//       return repo.name;                                                                                                                                                                    
//     });
//   })

// const repoNamesStr = repoNames.join("\n");

// fs.writeFile("repos.txt", repoNamesStr, function(err) {
//   if (err) {
//     throw err;
//   }

//   console.log("Saved ${repoNames.length} repos");
// });


