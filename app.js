//Import Manager, Engineer, and Intern classes.
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//Import inquirer, path, fs modules.
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//Import Manager questions and employee questions.
const managerQs = require("./questions/managerQs");
const employeeQs = require("./questions/employeeQs")

//create variables that contains path to where generated file is placed.
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

//Import the render that will generate the HTML page accordingly.
const render = require("./lib/htmlRenderer");

//Start with an empty employees array.
let employees = [];

//Using inquirer module, First prompt questions to the manager.
inquirer.prompt(managerQs).then((response) => {
    
    //create Manager object using input data aquired from inquirer.
    const manager = new Manager(
        response.managerName,
        response.managerID,
        response.managerEmail,
        response.managerOffice
        )
    
    //Add manager to employees array.
    employees.push(manager);
    
    //Informative message about next questions.
    console.log("On To Employees...");

    //Function that will get all employees data.
    addEmployees();
});


function addEmployees() {

    //Using inquirer module, prompt user questions about employees.
    inquirer.prompt(employeeQs).then((response) => {

        //If the employee is an Intern,
        if(response.employeeRole === 'Intern'){

            //then create a new intern object with the input data.
            const intern = new Intern(
                response.employeeName,
                response.employeeID,
                response.employeeEmail,
                response.school
            )
            
            //Add the new intern to the employees array.
            employees.push(intern);

        //Otherwise If the employee is an Engineer,
        }else if(response.employeeRole === 'Engineer'){

            //then create a new Engineer object with the input data.
            const engineer = new Engineer(
                response.employeeName,
                response.employeeID,
                response.employeeEmail,
                response.github
            )
            
            //Add the new Engineer to the employees array.
            employees.push(engineer);
        }

        //confirm if therer are more employees
        //If user selects Yes, then addEmployees function is called again
        if(response.moreEmployees === 'Yes'){
            addEmployees();

        //otherwise finalize the task by generating the team's HTML page properly using the path, page render, modified employees array.
        }else{
            fs.writeFile(outputPath, render(employees), (err) => console.log(err));
        }
    })
}