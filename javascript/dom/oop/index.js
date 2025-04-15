class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Teacher extends Person {
    
    constructor(fName, lName, sal) {
        super(fName, lName)
        this.salary = sal;
    }

    teach() {
        console.log("Teaching Student")
    }
}

const teacher1 = new Teacher("Mr", "X", 2000);


console.log(teacher1.getFullName())



class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    learn() {
        console.log("Learning something")
    }
}

