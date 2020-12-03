//Import Employee class.
const Employee = require("./Employee");

//Defining the Engineer class that will inherit from Employee.
class Engineer extends Employee {

    //Engineer's constructor includes the Engineer's github username as an extra parameter.
    constructor(name, id, email, github){
         
        //passing the name, ID, email parameters to the parent constructor of Employee.
        super(name, id, email)
        
        //The variable that will store Engineer's GitHub username.
        this.github = github; 
    }
    
    //Method that will retrieve the GitHub username.
    getGithub() {
        return this.github; 
    }
    
    //Method that will override the role with the string "Engineer".
    getRole() {
        return "Engineer"; 
    }
}

//Export the Engineer class, to be used in the app.js file.
module.exports = Engineer;