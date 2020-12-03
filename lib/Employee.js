// TODO: Write code to define and export the Employee class.
//Defining the Employee class
class Employee {

    //constructor includes name, id, and email parameters.
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    //method that will return the employee's name.
    getName() {
        return this.name;
    }

    //method that will return the employee's ID number.
    getId() {
        return this.id;
    }

    //method that will return the employee's Email.
    getEmail() {
        return this.email;
    }
    //method that will return the employee's role.
    getRole() {
        return "Employee";
    }
}

//export the Employee class to be used inside of the subclasses (Manager, Engineer, Intern.
module.exports = Employee;