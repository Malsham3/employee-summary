//array of questions for user

// prompt the user for their email, id, and specific information based on their role with the company. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.
const questions = [
    {
        name: 'role',
        message: 'What is your role in the company?'
    },
    {
        name: 'id',
        message: 'What is your ID number?',
        type: 'list',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        name: 'email',
        message: 'What is your E-mail?',
    }
]