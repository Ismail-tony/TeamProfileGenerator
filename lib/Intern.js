// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email); //Calls the constructor of the parent class
        this.school = school;
    }
}

module.exports = Intern