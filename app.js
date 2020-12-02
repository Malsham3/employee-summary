const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employees = [];

// Write code to use inquirer to gather information about the development team members,
const managerQs = require("./questions/managerQs");
const employeeQs = require("./questions/employeeQs")

inquirer.prompt(managerQs).then((response) => {
    const manager = new Manager(
        response.managerName,
        response.managerID,
        response.managerEmail,
        response.managerOffice
        )
    
    employees.push(manager);

    console.log("On to employees...");

    //add employees function. 
    // addEmployees();

    // last question is to add more or not.
    // if not, No more prompt and form your HTML in output.

    inquirer.prompt(employeeQs).then((response) => {
        if(response.employeeRole === 'Intern'){
            const school = askIntern();

            const intern = new Intern(
                response.employeeName,
                response.employeeID,
                response.employeeEmail,
                school
            )
            
            employees.push(intern);

        }else if(response.employeeRole === 'Engineer'){
            const gitHub = askEngineer();

            const engineer = new Engineer(
                response.employeeName,
                response.employeeID,
                response.employeeEmail,
                gitHub
            )
        }
    })

});

function askIntern() {
    inquirer.prompt("What school are you attending?").then((school) => {
        return school; 
    })
}

function askEngineer() {
    inquirer.prompt("What is your GitHub username?").then((github) => {
        return github; 
    })
}

function addEmployees() {
    inquirer.prompt(employeeQs).then((response) => {
        if(response.employeeRole === 'Intern'){
            const school = askIntern();

            const intern = new Intern(
                response.employeeName,
                response.employeeID,
                response.employeeEmail,
                school
            )
            
            employees.push(intern);

        }else if(response.employeeRole === 'Engineer'){
            const gitHub = askEngineer();

            const engineer = new Engineer(
                response.employeeName,
                response.employeeID,
                response.employeeEmail,
                gitHub
            )
        }

        if(response.moreEmployees === 'Yes'){
            addEmployees();
        }else{
            fs.writeFile("team.html", render(employees), (err) => console.log(err));
        }
    })
}

// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
