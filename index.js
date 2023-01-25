const inquirer = require("inquirer");
const fs = require("fs");
let names =[];


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
        message:"What is your Project Title?"
    },
    {
        type:"list",
        name:"license",
        message:"Choose a License",
        choices:["Yes","No"]
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
        fs.writeFile("./generate/README.md", 
        `#${response.title}
            ## Description
            ${response.description}
            
            ## Table of Contents
            [Installation]*#Installation)
            [usage](#Usage)
            [license](#License)
            [Contributing](#Contributing)
            [Test](#Test)
            [Questions](#Questions)
            
            ## Installation
            
            ${response.installation}
            
            ## Usage
            ${response.usage}
            
            ## License
            
            ## Contributing,
            
            ## Tests
            
            ## Questions
            [${response.github}](https://github/${response.github})
            [${response.email}](${response.email})`, (err)=> err ? console.log(err):console.log("json file create"));
            }
    )}

start();