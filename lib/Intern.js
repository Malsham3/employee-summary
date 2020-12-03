//Import Employee class.
const Employee = require("./Employee");

//Defining the Intern class that will inherit from Employee.
class Intern extends Employee {

    //Intern's constructor includes the Intern's school name as an extra parameter.
    constructor(name, id, email, school){

        //passing the name, ID, email parameters to the parent constructor of Employee.
        super(name, id, email, school)

        //The variable that will store Intern's school name.
        this.school = school;
    }

    //Method that will retrieve the Intern's school name.
    getSchool() {
        return this.school;
    }

    //Method that will override the role with the string "Intern".
    getRole() {
        return "Intern";
    }
}

//Export the Intern class, to be used in the app.js file.
module.exports = Intern;