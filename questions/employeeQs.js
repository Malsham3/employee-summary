//Following questions will be used to get Employee's information (excluding the Manager).
//Includes conditional questions depending on role (Engineer or Inern).
//Final question prompts user if they wish to add more employees.
const employeeQs = [
    {
        type: "list",
        name: "employeeRole",
        message: "What is the employee's role?",
        choices: ["Engineer", "Intern"]
     },
    {
        name: "employeeName",
        message: "What is the employee's name?"
    },
    {
        name: "employeeID",
        message: "What is the employee's ID number?"
    },
    {
        name: "employeeEmail",
        message: "What is the employee's E-mail?"
    },
    {
        name: "github",
        message: "What is the Engineer's GitHub username?",
        when: (answers) => answers.employeeRole === 'Engineer'
    },
    {
        name: "school",
        message: "What school is the Intern currently attending?",
        when: (answers) => answers.employeeRole === 'Intern'
    },
    {
        type: "list",
        name: "moreEmployees",
        message: "Would you like to add more employees?",
        choices: ["Yes", "No"]
     }
]

//Export the Employee questions object array, to be used in the app.js file.
module.exports = employeeQs;