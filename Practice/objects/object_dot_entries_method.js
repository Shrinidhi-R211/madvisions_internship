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

// // Exercise 3 : Looping through Object.entries().

// let exc3employee = {
//     name: "Rahul",
//     age: 25,
//     salary: 50000
// };

// Object.entries(exc3employee).forEach(entry => {
//     console.log(entry);
// }); // Output : [ 'name' , 'Rahul' ] [ 'age', 25 ] [ 'salary' , 50000 ]

// Object.entries(exc3employee).forEach(entry => {
//     console.log(entry[0]);
//     console.log(entry[1]);
// });

// // The above code can be written in even better form by using Array destructuring.

// Object.entries(exc3employee).forEach(([key, value]) => {
//     console.log(key);
//     console.log(value);
// }); // Same output but different techniques. 

// // Exercise 4 : Transforming entries using map().

//  let exc4emps = {
//     name : "Rahul",
//     salary : 50000,
//     experience : 3
//  };

// let exc4empsres = Object.entries(exc4emps).map(([key, value]) => {
//     return (`${key} : ${value}`);
// });
// console.log(exc4empsres); // Output : [ 'name : Rahul', 'salary : 50000', 'experience : 3' ]

// // Excercise 5 : 
// let exc5student = {
//     name : "Arun",
//     age : 21,
//     course : "JavaScript"
// };

// let exc5studentres = Object.entries(exc5student).map(([key, value]) => {
//     return (`${key} is ${value}`);
// });
// console.log(exc5studentres);


// // // Excercise 6 : Preserve and transform properties.

// let exc6product = {
//     name: "Keyboard",
//     price: 2000,
//     stock: 15
// };

// let exc6productres = Object.entries(exc6product);
// console.log(exc6productres);

// // // Output : 
// // // [ [ 'name', 'Keyboard' ], [ 'price', 2000 ], [ 'stock', 15 ] ]

// let exc6productresmapping = exc6productres.map(([key, value]) => {
//     if(key === "name"){
//         return [key, `Product : ${value}`];
//     }
//     else if(key === "price"){
//         return [key, `Price : ${value}`];
//     }
//     else if (key === "stock"){
//         return [key, `Available : ${value} units.`];
//     }
// });
// console.log(exc6productresmapping);
// // Output :
// // [
// // [ 'name', 'Product : Keyboard' ],
// //  [ 'price', 'Price : 2000' ],
// //  [ 'stock', 'Available : 15 units.' ]
// // ]


// // To achieve the output in the array format, we use [], but if in case we wanted the output in the object format then we have to make use of another method, that is Object.fromEntries(), which converts the array into an Object. 

// // THE concept is called "Object reconstruction."
// definition : Creating an object from an array of key-value pairs using Object.fromEntries().

// // The same above problems output will be changed below.

// // Excercise 7 : fromEntries() method.

// let exc7products = {
//     name : "Keyboard",
//     price : 2000,
//     stock : 15
// };

// let exc7productsres = Object.fromEntries(Object.entries(exc7products).map(([key , value]) => {
//     if (key === "name"){
//         return [key , `Product : ${value}`];
//     }
//     else if (key === "price"){
//         return [key , `Price : ${value}`];
//     }
//     else if(key === "stock"){
//         return [key , `Available : ${value} units`];
//     }
// }
// ));

// console.log(exc7productsres); 

// // Output : {
// //  name: 'Product : Keyboard',
// //  price: 'Price : 2000',
// //  stock: 'Available : 15 units'
// // }

// // Excercise 8
// // //Object.entries plus filter().
// let exc8employees = {
//     Arun: 30000,
//     Meera: 45000,
//     Kiran: 50000
// };

// let exc8employeesres = Object.fromEntries(
//     Object.entries(exc8employees).filter(([key, value]) => value > 40000)
// );

// console.log(exc8employeesres);

// // NOTE : Remember the jobs of each method:
// // - Object.entries() — converts the object into key-value pairs.
// // - filter() — keeps only pairs that satisfy the condition.
// // - Object.fromEntries() — converts those pairs back into an object.
// // - if no employee had a salary greater than 60000? The result would be {} because the filtered array would be empty.


// // // excercise 9 : 
// let exc9scores = {
//     Arun : 40,
//     Meera : 85,
//     Kiran : 65
// };

// let exc9scoresres = Object.fromEntries(Object.entries(exc9scores).filter(([key, value]) => {
//     return value >= 60;
// })
// );

// console.log(exc9scoresres); // Output : { Meera: 85, Kiran: 65 }


// // // Destructuring.
// // // Destructuring lets you extract values from arrays or objects and store them in variables without repeatedly accessing each property or index.

// // Excercise 10 : Destructuring of an Array.
// let exc10colors = ["red", "blue", "green", "orange"];

// let [exc10first, , exc10third, exc10fourth] = exc10colors;

// console.log(exc10first);  // "red"
// console.log(exc10second); // Reference Error, since we have skipped the exc10second. We can skip it in the destructuring, but we should not console it.
// console.log(exc10third);  // "green"
// console.log(exc10fourth); // "orange."

// // Excercise no 11 : Object Destructuring.
// let exc11user = {
//     name: "Arun",
//     age: 21,
//     role: "Developer"
// };

// let { exc11name, exc11age } = exc11user;

// console.log(exc11name); // undefined
// console.log(exc11age);  // undefined

// Note : The Object destructuring matches property names, not the variable names we invent. There fore the below example works but not the above one. 

// // There are two ways to achieve it. 

// // Method 1 : Use the original property names.
// // Excercise 12 :
// let exc12user = {
//     name: "Arun",
//     age: 21,
//     role: "Developer"
// };

// let { name, age } = exc12user;

// console.log(name); // "Arun"
// console.log(age);  // 21

// // // Method 2 : Rename the variables. 
// let {
//     name : exc12name,
//     age : exc12age
// } = exc12user;

// console.log(exc12name); // Arun
// console.log(exc12age); // 21


// // Spread Operator.

// // Excercise 13 : 
let exc13product = {
    name: "Keyboard",
    price: 2000
};

let exc13updatedProduct = {
    ...exc13product,
    price: 1800,
    stock: 10
};

console.log(exc13updatedProduct); //{ name: 'Keyboard', price: 1800, stock: 10 }
console.log(exc13product.price); // 2000