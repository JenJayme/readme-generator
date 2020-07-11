
//Do I need to use a promise?  If so...
    .then(function(results) {
      return new Promise(function(resolve, reject) {
              fs.writeFile(ASIN + '.json', JSON.stringify(results), function(err) {
                 if (err) reject(err);
                 else resolve(data);
              });
      });
    }).then(function(results) {
         console.log("results here: " + results)
    }).catch(function(err) {
         console.log("error here: " + err);
    });

// }

==========================================================================

function addQuotes() {
    // ask the user to input the author and then the quote
    inquirer.prompt([
      {
        type: "input",
        name: "author",
        message: "Please input the author's name: "
      },
      {
        type: "input",
        name: "quote",
        message: "Please input the quote: "
      }
    ]).then(function(userInput) {
      // add the new quote with the corresponding author into our quote storage
      quotes.push({
        author: userInput.author,
        quote: userInput.quote});
      mainMenu();
    })
  }


======================================================================

// async function getUserInformation() {
//     try {
//         const { name } = await inquirer.prompt({
//             message: "What's your name?",
//             name: "name"
//         });
//         const { location } = await inquirer.prompt({
//             message: "Where are you located?",
//             name: "name"
//         });
//         const { bio } = await inquirer.prompt({
//             message: "Please enter a brief bio.",
//             name: "name"
//         });
//         const { linkedIn } = await inquirer.prompt({
//             message: "What's your LinkedIn URL?",
//             name: "name"
//         });
//         const { githubURL } = await inquirer.prompt({
//             message: "What's your github URL?",
//             name: "name"
//         });
//     }

//     catch (err) {
//         console.log(err);
//     }

//     finally {
//         console.log(name)
//     }
// }

// function saveUserData(userInput) {
//     // add the data with the corresponding key name to userData array
//     userData.push({
//         name: userInput.name,
//         location: userInput.location,
//         bio: userInput.bio,
//         linkedIn: userInput.linkedIn,
//         githubURL: userInput.githubURL
//     });
// }
===============================================================

//==============================================================
    // .then(function (userInput) {
    //     // add the new quote with the corresponding author into our quote storage
    //     quotes.push({
    //         author: userInput.author,
    //         quote: userInput.quote
    //     });

//==============================================================
        //     const repoNames = res.data.map(function(repo) {
        //       return repo.

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

// ## field: $(response.field);

// fs.writeFile("readme.md", generate, data, function(err) {
//     console.log("do I work");
// })
