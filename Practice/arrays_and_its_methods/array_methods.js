let arr = [1, 2, 3, 4, 5, 6];
let arr2 = ["a", "b", "c"];
let arr3 = [1, 343, 656.64, 2.65, "charmander"];
let arr4 = [1, 2.34, "animals", ["pikachu", "squirtle", "bulbasaur"]];
let arr5 = [{name : "tonystark" , superpower : "Ironman"}, {name : "Thor", superpower : "God of Lightning",}, {name: "peter parker", superpower : "Spiderman"}];
let arr6 = [2, 56.6, " ahfh ", ["bayleaf", "mew-two", "chikorita"], ["burpy", "joules", "banger", "doc", "stinker"]];

// ARRAY SEARCHING
// │
// ├── includes()
// │   └── Does this exact value exist?
// │
// ├── indexOf()
// │   └── At what index does this exact value exist?
// │
// ├── find()
// │   └── Which element satisfies my condition?
// │
// └── findIndex()
//     └── At what index is the element satisfying my condition?

// Using Alt Codes (Numeric Keypad Required): Hold down the Alt key and type 192 or 218 on your numeric keypad, then release Alt. (Note: we can get "└" & "┌" these symbol.)


// includes().
// syntax : array.includes(value);

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.includes("Banana"));
console.log(fruits.includes("Orange"));

// NOTE : includes() - this method returns a boolean value. ( either true / false ).

// indexOf().
// Syntax : array.indexOf(value);

console.log(fruits.indexOf("Banana"));

// NOTE : indexOf() - this method returns the index value of the element in the array. And if the value doesn't exist then it simply return's -1.

// find().
// Syntax : let / const variable = array.find(element => condition); or 
// let / const variable = array.find(function(element) {
//     return condition;
// });
let students = [
    { name: "Rahul", age: 18 },
    { name: "Priya", age: 21 },
    { name: "Arun", age: 19 }
];
let person = students.find(student => student.age === 21);
console.log(person); // output : { name: 'Priya', age: 21 }.
let person1 = students.find(student => student.age === 20);
console.log(person1); // Output : undefined ( because there is no such element which satisfies the condition )

// find() - this method is useful when we do not know specificics, or is useful when we need to search based on a condition rather than an exact value, and it returns the first matching element and then stops searching.

// findIndex().
// Syntax : let / const variable = array.findIndex(element => condition );

// The basic idea is that even this method functions the same way as find(), but the only catch is that it provides us the index value of the element rather than the element itself.

let person3 = students.findIndex(student => student.name === "shri");
console.log(person3); // -1 ( because there is no name : "shri")

let person4 = students.findIndex(student => student.name == "Rahul");
console.log(person4); // 0 ( Rahul is present in the first index of the array.)

// NOTE : findIndex() is case sensitive, that is even with only == and not === it checks for specific characters. rahul !== Rahul .

let numbers = [4, 9, 15, 22, 30];

let result = numbers.find(number => number > 20);
console.log(result); // Output : 22 ( only first satisfying element. )

let result1 = numbers.findIndex(number => number > 20);
console.log(result1); // Output : 3

let marvel = arr5.find(hero => hero.name === "Thor");
console.log(marvel); // output : { name: 'Thor', superpower: 'God of Lightning' }

// ARRAY LAYER. or 
// ARRAY TRANSFORMATION & FILTERING
// │
// ├── map() - Transform every element into something new.
// │
// ├── filter() - Keep only the elements that satisfy my condition.
// │
// ├── forEach() - Do something with every element.
// │
// └── reduce() - Combine all elements into one final result.