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
    }
]

module.exports = employeeQs;