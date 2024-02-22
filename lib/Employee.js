// TODO: Write code to define and export the Employee class

class Employee {  //Creates a class called Employee using the ES6 class syntax
    constructor(name, id, email) { //Creates a constructor that takes in name, id, and email
        this.name = name,
        this.id = id,
        this.email = email
    }

    getName() { //Creates a method that returns the name
        return this.name;
    }

    getId() { //Creates a method that returns the id
        return this.id;
    }

    getEmail() { //Creates a method that returns the email
        return this.email;
    }

    getRole() { //Creates a method that returns the role
        return 'Employee';
    }
}

module.exports = Employee //Exports the class
