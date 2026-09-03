// // Topicws covered 
// //1. Destructuring of both arrays and objects.
// console.log("1. Destructuring of both arrays and objects.");
// console.log("1.a. Destructuring of objects.");

// // Destructuring :- It simply means "Taking out the values from either array or object and then putting them directly into new variables to make usage easier."
// // Syntax for the destructuring is " datatype {variable names} = parent array/object name;"

// //Ex: 

// const person = {
//     name : "shri",
//     age : 25,
//     city : "kolar"
// };
// // now in general, if we want to access the values inside the object the method is by calling the parent object with the variable name i,e. console.log(person.name);, but this still doesn't act as destructuring since we haven't assogned the new variables to the old. 
// console.log(person.name);
// //instead of doing thisd we can now simplify it by assining the new variables to the variables inside the onject ( old variables which uses " . " to pin point the value.) i,e. const name = person.name; now this acts as a destructured code.
// const name = person.name;
// const age = person.age;
// const city = person.city;

// console.log(name);
// console.log(age);
// console.log(city);

// console.log("**********************************************************");

// // Now rather then assing them explicitly for each one with new line of code the destructuring helps the assignment in just a single line.
//  //const {name, age, city} = person; // general destructuring method, but since i have already used name, age, city variables with const i cannot resue the same name here and also change it without renaming ( since the parent object doesn't have the same property name).

// //  console.log(name); //
// //  console.log(age);
// //  console.log(city);

//  // to achieve this we have now perform the next step that is renaming.
// console.log(" ")
//  console.log("Renaming in destructuring");
//  const {name : name2, age : age2, city : city2} = person;

//  console.log(name2);
//  console.log(age2);
//  console.log(city2);
 

//  console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = ");

// console.log("1.b. Destructuring of arrays.");
// console.log(" ");

// console.log(" Syntax of array destructuring is (datatype [variable names] = array name;)");
// console.log(" ")
// const numbers = [10, 20, 30];

// // we usually assign the new variables by using traditional method i,e. 
// // const a = numbers[0];
// // const b = numbers[1];
// // const c = numbers[2];

// // instead of this we can easily do this to achive destructuring, i,e.

// const [a, b, c] = numbers;

// console.log(a);
// console.log(b);
// console.log(c); 

// console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = =");

// console.log(" ");

// console.log("2. Spread operator. (...)");

// const numbers1 = [10, 20, 30];

// console.log(numbers1);// output will be [10, 20, 30]
// // and if we use the spread operator it displays the output as the text rather than an array.
// console.log(...numbers1); // output will now be 10, 20, 30

// console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = =");
// console.log(" ");
// console.log("2.1. Array copiying using spread operator :");
// console.log(" ");

// const originalarr = [100, 200, 300];
// console.log(originalarr); // output = [100, 200, 300]
// console.log(...originalarr); // output = 100, 200, 300

// const copy = [...originalarr]; // the array can be only copied using a new variable and then that varible is assigned the values of the older array with addition to spread operator, in the square braces. if the square braces are not used then the output will not be displayed in the form of an array for further operations.
// console.log(copy); // output = [100, 200, 300]
// const copy2 = [0, ...originalarr, 4, 5] // Addition of extra elements without using the methods of array.
// console.log(copy2); // output = [1, 100, 200, 300, 4, 5]
// console.log(" ");
// console.log("2.2. Array combining using spread operator : ");
// console.log(" ");
// const arr1 = [10, 20, 30];
// const arr2 = [40, 50, 60];

// // now to combine the two arrays to one array we must use spread operator if not then the output will be two sub arrays in a main array ( nested array ).
// const newarr1 = [arr1, arr2];
// const newarr2 = (arr1, arr2); // we cannot achieve the combination using this method, since it only accesses the last variable of the given condition and only prints that array as the output.
// console.log(newarr1); // output = [[10, 20, 30], [40, 50 ,60]] ( because the operation performed is just the summation rather than combinaing the arrays. so to acheive one single array we have to use spread operator.)
// console.log(newarr2); // output = [ 40, 50, 60 ]
// const newarr3 = [...arr1, ...arr2];
// console.log(newarr3); // output = [ 10, 20, 30, 40, 50, 60 ]. 

// console.log(" ");
// console.log("2.3. combining the objects.");
// console.log(" we already have the objest named person in this program so we shall make use of the same");

// const updatedperson = {
//     ...person,
//     course : "mca"
// };
// console.log(person);
// console.log(updatedperson);



console.log(" ");
console.log(" ");
console.log(" From here i have started Array methods. : very important.");
console.log(" ");

