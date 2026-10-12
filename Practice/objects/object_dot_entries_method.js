// // Object.entries() Method.
// // It is a built-in JS method, that takes an object and returns an array of key-value pairs.

// // Syntax : Object.entries(objectName);

// // Example 1 : 
// let ex1employee = {
//     name: "Rahul",
//     age: 25,
//     salary: 50000
// };

// // Now same as object.key() and object.values(), we have two ways to display the output. 1. using varable, 2. directly logging it.

// console.log(Object.entries(ex1employee)); // Output : [ [ 'name', 'Rahul' ], [ 'age', 25 ], [ 'salary', 50000 ] ]

// let ex1employeeres = Object.entries(ex1employee);
// console.log(ex1employeeres); // Output : [ [ 'name', 'Rahul' ], [ 'age', 25 ], [ 'salary', 50000 ] ]

// // NOTE : notice the Object.entries() returns an array of smaller arrays, with exactly two elements in the smaller array. 

// // Index 0 - Property name, 
// // Index 1 - Corresponding property value.

// // NOTE 2 : These methods does not modify the original object, they just return new array.

// // Excercise 1 : 
// let exc1gamer = {
//     game: "GTA",
//     level: 10,
//     online: true
// };

// console.log(Object.entries(exc1gamer)); // Output : [ ['game', 'GTA'], ['level', 10], ['online', true] ]

// // Excercise 2 : accessing individual keys and values inside the nested arrays.
// let exc2gamer = {
//     game: "GTA",
//     level: 10,
//     online: true
// };

// let exc2gamerres = Object.entries(exc2gamer);
// // Now the exc2gamerres is an array of subarrays with the key value pair items listed as array elements. Therefore to access either of the property, we use nested array technique.

// console.log(exc2gamerres[1]); // Output : [ 'level', 10 ]
// console.log(exc2gamerres[1][0]); // Output : level
// console.log(exc2gamerres[1][1]);  // Output : 10.

// // Sub Excercise 1 : Print the entire second key-value pair.
// console.log(exc2gamerres[1]);

// // Sub Excercise 2 : Print the key "level" using array indexing.
// console.log(exc2gamerres[1][0]); // Output : level

// // Sub Excercise 3 : Print the value 10 using array indexing.
// console.log(exc2gamerres[1][1]);  // Output : 10.

// // Sub Excercise 4 : Print the key "online".
// console.log(exc2gamerres[2][0]); // Output : online

// // Sub Exercise 5. Print the value true.
// console.log(exc2gamerres[2][1]); // Output : true

// Exercise 3 : Looping through Object.entries().

let exc3employee = {
    name: "Rahul",
    age: 25,
    salary: 50000
};

Object.entries(exc3employee).forEach(entry => {
    console.log(entry);
}); // Output : [ 'name' , 'Rahul' ] [ 'age', 25 ] [ 'salary' , 50000 ]

Object.entries(exc3employee).forEach(entry => {
    console.log(entry[0]);
    console.log(entry[1]);
});

// The above code can be written in even better form by using Array destructuring.

Object.entries(exc3employee).forEach(([key, value]) => {
    console.log(key);
    console.log(value);
}); // Same output but different techniques. 