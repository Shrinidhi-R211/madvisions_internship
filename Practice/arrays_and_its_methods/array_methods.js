// let arr = [1, 2, 3, 4, 5, 6];
// let arr2 = ["a", "b", "c"];
// let arr3 = [1, 343, 656.64, 2.65, "charmander"];
// let arr4 = [1, 2.34, "animals", ["pikachu", "squirtle", "bulbasaur"]];
// let arr5 = [{name : "tonystark" , superpower : "Ironman"}, {name : "Thor", superpower : "God of Lightning",}, {name: "peter parker", superpower : "Spiderman"}];
// let arr6 = [2, 56.6, " ahfh ", ["bayleaf", "mew-two", "chikorita"], ["burpy", "joules", "banger", "doc", "stinker"]];

// // ARRAY SEARCHING
// // │
// // ├── includes()
// // │   └── Does this exact value exist?
// // │
// // ├── indexOf()
// // │   └── At what index does this exact value exist?
// // │
// // ├── find()
// // │   └── Which element satisfies my condition?
// // │
// // └── findIndex()
// //     └── At what index is the element satisfying my condition?

// // Using Alt Codes (Numeric Keypad Required): Hold down the Alt key and type 192 or 218 on your numeric keypad, then release Alt. (Note: we can get "└" & "┌" these symbol.)


// // includes().
// // syntax : array.includes(value);

// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits.includes("Banana"));
// console.log(fruits.includes("Orange"));

// // NOTE : includes() - this method returns a boolean value. ( either true / false ).

// // indexOf().
// // Syntax : array.indexOf(value);

// console.log(fruits.indexOf("Banana"));

// // NOTE : indexOf() - this method returns the index value of the element in the array. And if the value doesn't exist then it simply return's -1.

// // find().
// // Syntax : let / const variable = array.find(element => condition); or 
// // let / const variable = array.find(function(element) {
// //     return condition;
// // });
// let students = [
//     { name: "Rahul", age: 18 },
//     { name: "Priya", age: 21 },
//     { name: "Arun", age: 19 }
// ];
// let person = students.find(student => student.age === 21);
// console.log(person); // output : { name: 'Priya', age: 21 }.
// let person1 = students.find(student => student.age === 20);
// console.log(person1); // Output : undefined ( because there is no such element which satisfies the condition )

// // find() - this method is useful when we do not know specificics, or is useful when we need to search based on a condition rather than an exact value, and it returns the first matching element and then stops searching.

// // findIndex().
// // Syntax : let / const variable = array.findIndex(element => condition );

// // The basic idea is that even this method functions the same way as find(), but the only catch is that it provides us the index value of the element rather than the element itself.

// let person3 = students.findIndex(student => student.name === "shri");
// console.log(person3); // -1 ( because there is no name : "shri")

// let person4 = students.findIndex(student => student.name == "Rahul");
// console.log(person4); // 0 ( Rahul is present in the first index of the array.)

// // NOTE : findIndex() is case sensitive, that is even with only == and not === it checks for specific characters. rahul !== Rahul .

// let numbers = [4, 9, 15, 22, 30];

// let result = numbers.find(number => number > 20);
// console.log(result); // Output : 22 ( only first satisfying element. )

// let result1 = numbers.findIndex(number => number > 20);
// console.log(result1); // Output : 3

// let marvel = arr5.find(hero => hero.name === "Thor");
// console.log(marvel); // output : { name: 'Thor', superpower: 'God of Lightning' }

// // ARRAY LAYER. or 
// // ARRAY TRANSFORMATION & FILTERING
// // │
// // ├── map() - Transform every element into something new.
// // │
// // ├── filter() - Keep only the elements that satisfy my condition.
// // │
// // ├── forEach() - Do something with every element.
// // │
// // └── reduce() - Combine all elements into one final result.


// // forEach()

// let fruitsForEachLoop = ["Apple", "Banana", "Mango"];
// // without forEach(), we have to write longer logic, i.e. 
// for (let i = 0; i <= fruitsForEachLoop.length-1; i++){
//     console.log(fruitsForEachLoop[i]);
// }; // this is not wrong but, with the forEach method we can achieve it even easily.

//  fruitsForEachLoop.forEach(elem => {
//     console.log(elem);
// }); // Easy peasy, we don't even need to assign a variable, we can directly get the output for both "for loop" and "forEach()"

// let numbersforEachLoop = [10, 20, 30];

// numbersforEachLoop.forEach((number, index) => {
//     console.log(`${index+1}. ${number}`); // the reason we are giving index + 1, is because the index values starts from zero(0), if we directly write index, then the output index values will be starting from zero, but we humans count from one therefore index + 1.
// });

// // NOTE: forEach() does not create a new array. Instead it only performs tasks given to it, and results the output.

// // very important - Note : it is true that the forEach(), cannot create a new array but it can definitely modify the things inside a forEch() callback.

// let numbersforEachLoopProof = [1, 2, 3];

// numbersforEachLoopProof.forEach((number, index) => {
//     numbersforEachLoopProof[index] = number * 2; // we are explicitly reassigning / modifying the values of numbersForEachLoopProof array.
// });

// console.log(numbersforEachLoopProof); // output : [2, 4, 6]

// // end of forEach() basics concept. 


// // map(). 
// let names = ["rahul", "james", "priya", "arjun"];
// let intro = names.map(element => "hello " + element);
// console.log(intro);
// let indexedintro = names.map((element, index) => `${index+1}. ${element}`);
// console.log(indexedintro);

// let nums = [10, 20, 30, 40]
// let a = nums.map((element, index) => `${element} is at index ${index}`);
// console.log(a);

// let users = [
//     { name: "Tony", role: "Developer" },
//     { name: "Peter", role: "Designer" },
//     { name: "Steve", role: "Manager" }
// ];

// let b = users.map(user => user.name);
// console.log(b);

// let c = users.map(elem => `${elem.name} - ${elem.role}`);
// console.log(c);

// let userObject = users.map(elem => ({
//     name : elem.name,
//     isdeveloper: elem.role === "Developer"
// }));
// console.log(userObject);

// let abc = [2, 5, 8, 11, 14];
// let d = abc.map(elem => {
//     if (elem % 2 == 0){
//        return elem * 2;
//     }
//     else if (elem % 2 != 0){
//        return elem * 2; 
//     }
// })
// console.log(d);
// // or the same if ladder can be written as ternaray operators. 

// let e = abc.map(elem => elem % 2 == 0 ? elem * 2 : elem * 2)
// console.log(e);

// let namesAbc = ["rahul", "PRIYA", "ArUn", "kiran"];
// let f = namesAbc.map(elem => elem.toUpperCase());
// let g = namesAbc.map(elem => elem[0].toUpperCase() + elem.slice(1).toLowerCase());
// console.log(f);
// console.log(g);

// let productsAbc = [
//     { name: "Laptop", price: 50000 },
//     { name: "Phone", price: 30000 },
//     { name: "Tablet", price: 20000 }
// ];

// let h = productsAbc.map(elem => ({
//     name: elem.name,
//     price: elem.price,
//     discountedPrice: elem.price - (elem.price * 10 / 100)
// }));
// console.log(h);

// let usersAbc = [
//     { name: "Tony", age: 25, role: "Developer" },
//     { name: "Peter", age: 19, role: "Designer" },
//     { name: "Steve", age: 32, role: "Manager" }
// ];

// let i = usersAbc.map(elem => ({
//     name: elem.name,
//     age: elem.age,
//     role: elem.role,
//     experienceLevel: elem.age >= 25 ? "Senior" : "Junior"
// }));
// console.log(i);

// let usersDef = [
//     { name: "Tony", age: 25, role: "Developer" },
//     { name: "Peter", age: 19, role: "Designer" },
//     { name: "Steve", age: 32, role: "Manager" },
//     { name: "Bruce", age: 28, role: "Developer" }
// ];

// let j = usersDef.map(elem => ({
//     name: elem.name,
//     age: elem.age,
//     role: elem.role,
//     isDeveloper: elem.role === "Developer"
// }));
// console.log(j);

let number = [1, 10, 23, 43, 65];
number.forEach(elem => console.log(elem > 30));// these conditions become useless when we want to check for specific conditions, therefore we use filter() to overcome the problem faced with forEach(). It is not that we can achieve the desired output, but filter() is much efficient than forEach() when it comes to searching through specific conditions.
