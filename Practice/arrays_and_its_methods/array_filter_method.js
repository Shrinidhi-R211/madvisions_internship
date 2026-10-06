// // FILTER method of array.

// // "Go through every element and keep only the elements that pass my condition."
// let numbers = [1, 23, 34, 53, 60];

// let result = numbers.filter(elem => elem > 30);
// console.log(result); // output: [34, 53, 60], the original array is unchanged.
// console.log(numbers); //  the filter() does not modify the original array.

// // // filter() always returns a resultant array, which passes the condition.

// // // NOTE : Unlike map() which transforms every element regardless of the condition, filter decides which elements survive to become a new array.

// // // Basic Syntax : array.filter(callback); or in most common format array.filter(element => condition); the arrow function...

// // // Example Problems: 
// let ages = [12, 18,15,32,25];
// let adults = ages.filter(elem => elem >= 18);
// console.log(adults);

// // // Filter method with "strings"'
// let strs = ["John", "Alex", "Christopher", "Sam"];
// let strsresult = strs.filter(elem => elem.length > 4);
// console.log(strsresult); // Output : ["Christopher"]

// // the callbacks can receive the indexes too.
// let arr = [1, 4, 54, 23, 12, 56];
// let arrresult = arr.filter(( elem , index) => index > 1);
// console.log(arrresult); // Output : [ 54, 23, 12, 56 ]
// let arrresult2 = arr.filter(index => index > 1);
// console.log(arrresult2); // Output : [ 4, 54, 23, 12, 56 ]

// // // Excercise 1: 
// let numbers1 = [5, 10, 15, 20, 25];
// let numbers1result = numbers1.filter(elem => elem > 15); 
// console.log(numbers1result); // Output : [20, 25]

// // // Excercise 2: 
// let numbers2 = [2, 4, 7, 9, 12, 15];
// let numbers2result = numbers2.filter(elem => elem % 2 === 0); 
// console.log(numbers2result); // Output : [2, 4, 12]

// // // Excercise 3:
// let names1 = ["John", "Alex", "Christopher", "Sam", "David"];
// let names1result = names1.filter(name => name.length >= 5);
// console.log(names1result); // Output : ["Christopher", "David"]

// // // Excercise 4:
// let nums3 = [10,55, 23, 80, 42, 91, 17];
// let nums3res = nums3.filter(elem => elem >= 50);
// console.log(nums3res); // Output : [ 55, 80, 91 ]

// // // Excercise 5:
// let usersObj1 = [{name : "John", age : 17}, {name : "Alex", age : 22}, {name : "Sam", age : 15}, {name : "David", age : 30} ];
// let usersObj1Res = usersObj1.filter( elem => elem.age >= 18);
// console.log(usersObj1Res); // Output : [{name : "Alex", age : 22 }, {name : "David", age : 30 }]


// // Excercise 6:
let nums4 = [5, 12, 25, 8, 30, 17];
let nums4res = nums4.filter( elem => elem < 20);
console.log(nums4res); // Output : [ 5, 12, 8, 17 ]

// // Excercise 7: Keep numbers between 10 and 30, including both

let nums5 = [5, 10, 15, 25, 30, 35, 40];
let nums5res = nums5.filter(elem => elem >= 10 && elem <= 30);
console.log(nums5res); // Output : [ 10, 15, 25, 30 ]

// // Excercise 8: Keep names that start with "A".

let exc8names = ["Alex", "John", "Andrew", "Sam", "Alice", "David"];
let exc8namesres = exc8names.filter(elem => elem[0] === "A");
console.log(exc8namesres); // Output : [ 'Alex', 'Andrew', 'Alice' ]

// // Excercise 9 : Keep names that contain the letter "a"
let exc9names = ["John", "Alex", "David", "Mike", "Sam", "Robert"];
let exc9namesres = exc9names.filter(elem => elem.includes("a"));
console.log(exc9namesres); // Output : [ 'David', 'Sam' ]

// // Excercise 10 : Keep products costing more than 1000.

let exc10products = [
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 8000 },
    { name: "USB Cable", price: 300 }
];

let exc10productsres = exc10products.filter(elem => elem.price > 1000);
console.log(exc10productsres); // Output : [ { name: 'Keyboard', price: 1500 }, { name: 'Monitor', price: 8000 } ]

// // Excercise 11 : Keep users who are adults and active.

let exc11users = [
    { name: "John", age: 17, active: true },
    { name: "Alex", age: 22, active: true },
    { name: "Sam", age: 25, active: false },
    { name: "David", age: 30, active: true }
];
let exc11usersres = exc11users.filter(elem => elem.age >= 18 && elem.active);
console.log(exc11usersres); // Output : [ { name: 'Alex', age: 22, active: true }, { name: 'David', age: 30, active: true }]

// // Excercise 12 : Keep users who are either admins OR moderators.
let exc12users = [
    { name: "John", role: "user" },
    { name: "Alex", role: "admin" },
    { name: "Sam", role: "moderator" },
    { name: "David", role: "user" },
    { name: "Mike", role: "admin" }
];
let exc12usersres = exc12users.filter(elem => elem.role === "admin" || elem.role === "moderator");
console.log(exc12usersres); // Output : [{ name: 'Alex', role: 'admin' }, { name: 'Sam', role: 'moderator' }, { name: 'Mike', role: 'admin' } ]

// // Excercise 13 : Keep elements whose index is even.
let exc13numbers = [10, 20, 30, 40, 50, 60];
let exc13numbersres = exc13numbers.filter((elem, index) => index % 2 === 0);
console.log(exc13numbersres); // Output : [ 10, 30, 50 ]

// // Excercise 14: Keep students who scored at least 70 AND passed.
let exc14students = [
    { name: "John", score: 65, passed: false },
    { name: "Alex", score: 85, passed: true },
    { name: "Sam", score: 75, passed: false },
    { name: "David", score: 90, passed: true },
    { name: "Mike", score: 72, passed: true }
];
let exc14studentsres = exc14students.filter(elem => elem.score >= 70 && elem.passed);
console.log(exc14studentsres); // Output : [ { name: 'Alex', score: 85, passed: true }, { name: 'David', score: 90, passed: true }, { name: 'Mike', score: 72, passed: true } ]

// // Excercise 15: keep products that are : 1. in stock, 2. price is below 5000, 3. category is either "electronics" or "accessories".
let exc15products = [
    { name: "Mouse", price: 800, category: "accessories", inStock: true },
    { name: "Monitor", price: 7000, category: "electronics", inStock: true },
    { name: "Keyboard", price: 2500, category: "electronics", inStock: false },
    { name: "Headphones", price: 3000, category: "electronics", inStock: true },
    { name: "USB Cable", price: 400, category: "accessories", inStock: true },
    { name: "Chair", price: 4500, category: "furniture", inStock: true }
];
let exc15productsres = exc15products.filter(elem => elem.inStock && elem.price < 5000 && (elem.category ==="electronics" || elem.category === "accessories"));
console.log(exc15productsres); // Outptut : [ { name: 'Mouse', price: 800, category: 'accessories', inStock: true }, { name: 'Headphones', price: 3000, category: 'electronics', inStock: true }, { name: 'USB Cable', price: 400, category: 'accessories', inStock: true }]