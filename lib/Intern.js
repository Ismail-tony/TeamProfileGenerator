// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email); //Calls the constructor of the parent class
        this.school = school;
    }
}

Intern.prototype.getRole = function () {
    return 'Intern'
}

Intern.prototype.getSchool = function () {
    return this.school
}

module.exports = Intern