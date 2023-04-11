// Packages needed for this application
const inquirer = require('inquirer');
const MarkDown = require('./lib/ReadmeGen')
const fs = require('fs') 
//  An array of questions for user input required for the README
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project Title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project Description?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Project Usage?',
    },
    {
        type: 'input',
        name: 'contribution guidelines',
        message: 'Contributors?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'For questions (email)?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'GitHub username?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'License?',
        choice: ['MIT', 'GNU', 'Apache License'],
        filter(val) {
            return val.toLowerCase();
        }
    },
];

async function runQuery(){
    return inquirer.prompt(questions)
    .then((answers)=>{
        const mark = MarkDown.generateReadme(answers)
        fs.writeFile('README.md', mark, function(err) {
            if (err){
                console.log('Could not save file')
            } else {
                console.log('Success: new README created')
            }
        })
    })
    .catch((error)=>{
        console.log(error)
    })
}

runQuery()