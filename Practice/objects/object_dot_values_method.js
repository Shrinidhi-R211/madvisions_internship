// Object.values() method.
// The Object.values() method returns an array containing an object's own enumerable property values, rathr than its property names.
// Syntax : Object.values(objectName);

// Example 1:
let ex1arr = {
    name : "Shrinidhi",
    age : 25,
    course : "Javascript",
    level : "Beginner"
};

// Now again there are two ways to use the method, one is by directly console logging it, and the other one is by assigning it to a variable and then console logging that variable.

console.log(Object.values(ex1arr)); // Output : [ 'Shrinidhi', 25, 'Javascript', 'Beginner' ]

let ex1arrres = Object.values(ex1arr);
console.log(ex1arrres); // Output : [ 'Shrinidhi', 25, 'Javascript', 'Beginner' ]


//  Excercise 1: 
let exc1gamer = {
    name : "Arun",
    game : "GTA",
    level : 15
};
console.log(Object.values(exc1gamer)); // Output : [ 'Arun', 'GTA', 15 ]


// Excercise 2 : Count values
const exc2product = {
    name: "Laptop",
    price: 70000,
    brand: "Dell",
    inStock: true
};

let exc2productres = Object.values(exc2product);
console.log(exc2productres); // Output : [ 'Laptop', 70000, 'Dell', true ]
console.log(exc2productres.length); // Output : 4

// Excercise 3 : Transform values with map()
const exc3scores = {
    math: 80,
    science: 90,
    english: 75
};

let exc3scoresarr = Object.values(exc3scores);
let exc3scoresres = exc3scoresarr.map(elem => {
    elem = elem + 5;
    return elem;
})
console.log(exc3scoresres); // Output : [ 85, 95, 80 ]

