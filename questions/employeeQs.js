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
    //following question needs to be taken out...
    {
        type: "list",
        name: "moreEmployees",
        message: "Would you like to add more employees?",
        choices: ["Yes", "No"]
     }
]

module.exports = employeeQs;