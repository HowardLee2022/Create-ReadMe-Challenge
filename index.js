const inquirer = require("inquirer");
const fs = require("fs");
let badge="";
let badgeInfo="";

const start = () => {
    inquirer.prompt([{
        type:"input",
        name:"title",
        message:"What is your Project Title?"
    },
    {
        type:"input",
        name:"description",
        message:"Description"
    },
    {
        type:"input",
        name:"usage",
        message:"Whats the Usage?"
    },
    {
        type:"input",
        name:"installation",
        message:"What is the Installation Instructions?"
    },
    {
        type:"input",
        name:"contribution",
        message:"What is the contribution?"
    },
    {
        type:"list",
        name:"license",
        message:"Choose a License",
        choices:["MIT","Mozilla"]
    },
 
    {
        type:"input",
        name:"test",
        message:"Are there any Test?"
    },
    {
        type:"input",
        name:"github",
        message:"What is your Github User?"
    },
    {
        type:"input",
        name:"email",
        message:"What is your Email?"
    }])
    .then((response) => {
        if(response.license == "MIT"){
            badge = "https://img.shields.io/badge/License-MIT-blue";
            badgeInfo="https://choosealicense.com/licenses/mit/"
        }else if(response.license =="Mozilla"){
            badge = "https://img.shields.io/badge/License-Mozilla-orange";
            badgeInfo="https://choosealicense.com/licenses/mpl-2.0/"
        }
        fs.writeFile("./generate/README.md", 
`#${response.title}
![badge](${badge})
## Description
${response.description}            
## Table of Contents
- [Installation](#Installation)
- [usage](#Usage)
- [license](#License)
- [Contributing](#Contributing)
- [Test](#Test)
- [Questions](#Questions)
 ## Installation 
${response.installation}           
## Usage
${response.usage}     
## License
${response.license} license. For more information, please visit [Mit License](${badgeInfo})
## Contributing
${response.contribution}
## Tests
${response.test}
## Questions
You can visit the Github Page at: [${response.github}](https://github.com/${response.github})

For further question, you can Email Me at: [${response.email}](${response.email})`
,(err)=> err ? console.log(err):console.log("json file create"));
        })
    }
start();