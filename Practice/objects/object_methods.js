// Object Methods : A property stores data. A method stores behavior (a function) belonging to the object.

// Object Methods
// │
// ├── What is an object method?
// ├── Property vs Method
// ├── Creating a method
// ├── Calling a method
// ├── Method shorthand
// ├── Using object properties inside methods
// ├── The `this` keyword
// ├── `this` with object methods
// ├── Modifying object properties through methods
// ├── Methods with parameters
// ├── Methods returning values
// └── Practical Object Method problems

// Excercise 1:
const exc1students = {
    name : "Shrinidhi",
    course : "JavaScript",
    introduce() {
        console.log(`My name is ${exc1students.name} and i am learning ${exc1students.course}`);
    }
};

console.log(exc1students);
exc1students.introduce();

// Excercise 2:
const calculator = {
    sayHello() {
        console.log(`Hello from calculator`);
    }
};
calculator.sayHello();

// Excercise 3:
const exc3person = {
    name : "Rahul",
    age : 23,
    showInfo() {
        console.log(`Name : ${exc3person.name} Age : ${exc3person.age}`);
    }
};

exc3person.showInfo();


// "this" keyword.
// It is used to refer to the current object we are working on.

// Excercise 4:
let exc4students = {
    name : "Shrinidhi",
    introduce() {
        console.log(`Hello I'm ${this.name} i am displaying my name using "this" keyword.`);
        console.log(`Hello i'm ${exc4students.name}, i am displaying my name without using "this" keyword.`);
    }
};
exc4students.introduce();

// Note : "this" keyword becomes very helpful when we are working with multiple objects, since we cannot remember so many object names we can just use "this.propertyname" keyword instead of those variablenames.propertyname....

// Example for using "this" keyword with multiple objects.
const ex1student1 = {
    name: "Shrinidhi",

    introduce() {
        console.log(`My name is ${this.name}`);
    }
};

const ex1student2 = {
    name: "Rahul",

    introduce() {
        console.log(`My name is ${this.name}`);
    }
};

ex1student1.introduce(); // My name is Shrinidhi
ex1student2.introduce(); // My name is Rahul

// Excercise 5:
const exc5emp = {
    name : "Arun",
    role : "Frontend Developer",
    salary : 50000,
    showDetails() {
        console.log(`name : ${this.name}`);
        console.log(`role : ${this.role}`);
        console.log(`salary : ${this.salary}`);
    }
};
exc5emp.showDetails();

// Methods with Parameters
// Excercise 6:
const exc6calci = {
    add(a, b){
        console.log(a+b);
    }
};
exc6calci.add(23,676); // Output : 699


// let us have a more interesting example.
let ex2emps = {
    name : "Arun",

    greet(person) {
        console.log(`${this.name} is a good friend of ${person}`);
    }
};
ex2emps.greet("Rahul") // Output : Arun is a good friend of Rahul

// Excercise 7:
const exc7calci = {
    multiply (a, b) {
        return a*b;
    }
};
console.log(exc7calci.multiply(34, 789)); // 26826

// Excercise 8:
const exc8studs = {
    name : "Shrinidhi",

    greet(subject){
        console.log(`${this.name} is learning ${subject}`);
    }
};
exc8studs.greet("JavaScript"); // Shrinidhi is learning JavaScript

// Excercise 9 :
const exc9products = {
    name : "Laptop",
    price : 70000,
    
    showDiscount(discount) {
        console.log(this.name);
        console.log(`original price : ${this.price}`);
        console.log(`Discount : ${discount}%`);
        return ((this.price) - (this.price * discount) / 100); 
    }
};
console.log(exc9products.showDiscount(10));

// Excercise 10: Counter

const exc10Counter = {
    count : 0 ,

    increase() {
        this.count = this.count + 1;
        return this.count;
    }
};
console.log(exc10Counter.increase());
console.log(exc10Counter.increase());
console.log(exc10Counter.increase());


// Excercise 11 : Add Points 
const exc11Player = {
    name : "Shrinidhi",
    score : 0,

    addPoint(points) {
        this.score += points;
        return this.score;
    }
};
console.log(exc11Player.addPoint(10));

// Excercise 12 : Modify a property.
let exc12emp = {
    name : "Arun",
    salary : 50000,

    increaseSalary(amount) {
        this.salary += amount;
        return this.salary;
    }
};
console.log(exc12emp.increaseSalary(5000));


// Excercise 13 : Boss Problem (MINI BANK ACCOUNT)

let exc13BankAcc = {
    owner : "Shrinidhi",
    balance : 1000,

    deposit(amount) {
        this.balance += amount;
        return this.balance;
    },

    withdraw(amount) {
        if(this.balance > amount) {
            this.balance -= amount;
            return this.balance;
        }
        else {
            return ("Insufficient Balance");
        }
    },

    showBalance() {
        console.log(this.owner);
        console.log(this.balance);
    }
};
console.log(exc13BankAcc.deposit(30000));
console.log(exc13BankAcc.withdraw(300000));
exc13BankAcc.showBalance();
