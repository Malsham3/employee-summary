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
        message: "What is your GitHub username?",
        when: (answers) => answers.employeeRole === 'Engineer'
    },
    {
        name: "schoolName",
        message: "What school are you attending?",
        when: (answers) => answers.employeeRole === 'Intern'
    },
    {
        type: "list",
        name: "moreEmployees",
        message: "Would you like to add more employees?",
        choices: ["Yes", "No"]
     }
]

module.exports = employeeQs;