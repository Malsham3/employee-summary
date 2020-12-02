//array of questions for user

// prompt the user for their email, id, and specific information based on their role with the company. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.
const managerQs = [
    {
        name: "managerName",
        message: "What is the Manager's name?"
    },
    {
        name: "managerID",
        message: "What is the Manager's ID?"
    },
    {
        name: "managerEmail",
        message: "What is the Manager's E-mail?"
    },
    {
        name: "managerOffice",
        message: "What is the Manager's office number?"
    }
]

module.exports = managerQs;
