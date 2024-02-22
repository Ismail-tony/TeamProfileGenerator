const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const teamMembers = [];

const addManager = () => { //Gets Manager's Information
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the team manager's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the team manager's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the team manager's email?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the team manager's office number?"
        },
    ])
    
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber); 
        teamMembers.push(manager); //pushes manager into teamMembers array
        addTeamMember();
    })
}

const addTeamMember = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'memberType',
            message: 'What type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'Finish building the team']
        }
    ])

    // if (answer === Engineer) {
    //     addEngineer();
    // }
    //     else if (answer === Intern) {
    //         addIntern();
    //     }
    //     else if (answer === 'Finish building the team') {
    //         renderTeam();
            
    //     }

    //I switched the if statement to a switch statement to be comfortable with using it
    //switch statement for getting team members information once option is selected in inquirer prompt
switch (memberType) {
    case 'Engineer': 
        addEngineer();
        break;

    case 'Intern':
        addIntern();
        break;
    
    case 'Finish building the team':
        renderTeam();
        break;
}
}

const addEngineer = () => {}

const addIntern = () => {}

const renderTeam = () => {}

