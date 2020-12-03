//Import Employee class.
const Employee = require("./Employee");

//Defining the Manager class that will inherit from Employee.
class Manager extends Employee {

    //Manager's constructor includes the Manager's office number as an extra parameter.
    constructor(name, id, email, officeNumber){

        //passing the name, ID, email parameters to the parent constructor of Employee.
        super(name, id, email, officeNumber)

        //The variable that will store Manager's office number.
        this.officeNumber = officeNumber;
    }

    //Method that will retrieve the Manager's office number.
    getOfficeNumber() {
        return this.officeNumber;
    }
    
    //Method that will override the role with the string "Manager".
    getRole() {
        return "Manager";
    }
}

//Export the Manager class, to be used in the app.js file.
module.exports = Manager;