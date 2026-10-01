// // Practice functions as Arguments

// // LEVEL 1....

// // Excercise no 1:
// function sayHello() {
//     console.log("hello!");
// }

// function funcAsArgument(argumentFunction) {
//     argumentFunction();
// }
// funcAsArgument(sayHello);

// // Excercise no 2 :
// function greet() {
//     return "Good Morning!";
// }
// function executeFunction(parameter){
//     return parameter();  //We are calling the function which is passed as an argument to the higher order function. 
// }
// console.log(executeFunction(greet)); // We should not call the fuunction here which is being passed as an argument to the higher order function.

// //Excercise no 3: 

// function add () {
//     return 10 + 20;
// }
// function executeAdd(functionAsArgument){
//     return functionAsArgument();
// }
// console.log(executeAdd(add));


// // LEVEL 2.....

// // Excercise no 4 :

// function processNumber (number, func){
//     return func(number);
// }
// function letsDouble(number){
//     return number * 2;
// }
// console.log(processNumber(5,letsDouble));

// function square (number){
//     return number * number;
// }
// function cube (number){
//     return square(number) * number;
// }

// console.log(processNumber(3,square));
// console.log(processNumber(7,cube));

// // Excercise no 6 : Calculate function with multiple sub functions as arguments.
// function calculateValues(a, b, funct){
//     return funct(a, b);
// }
// function addition(a, b){
//     let result = 0;
//     let add = a + b;
//     result += add;
//     return result;
// }
// console.log(calculateValues(3, 6, addition));

// function subtract (a, b){
//     return a - b;
// }
// console.log(calculateValues(55, 20, subtract));

// function multiply (a, b) {
//     return a * b;
// }
// console.log(calculateValues(4, 7, multiply));

// function divide (a, b) {
//     return a / b; 
// }
// console.log(calculateValues(10, 3, divide));

// // LEVEL 3 

// // Excercise no 7 :
// function checkNumber( number, checkingFunc){
//     return checkingFunc(number);
// }
// function isEven (number){
//     if (number % 2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// function isPositive (number) {
//     return number > 0;
// }

// function isGreaterThan100 (number) {
//     // if (number > 100){
//     //     return true;
//     // }
//     // return false; we can write in this manner, but to keep it even efficient we can write the same code as below;
//     return number > 100; // the return keyword itself gives the boolean values.
// }

// console.log(checkNumber(20, isEven));
// console.log(checkNumber(21, isEven));
// console.log(checkNumber(-1, isPositive));
// console.log(checkNumber(1, isPositive));
// console.log(checkNumber(20, isGreaterThan100));
// console.log(checkNumber(200, isGreaterThan100));

// // Excercise no 8 : Transform a value 

// function transform( value, transformingFunc){
//     return transformingFunc(value);
// }

// const transSquare = ((number) => number * number); // implicit return  syntax: declataration function_name = ((variable_name) => condition / code ); there is no need for {}, and return keyword for implicit arrow functions, since it only executes one line of code.

// const transCube = ((number) => {
//     return number * transSquare(number); // this is also another example of arroe function, but even though if it has a single line logic, we can write it in an extended way, but if we do that then {}, and return keyword is necessary.
// });

// const transAddTen = ((number) => number + 10);


// console.log(transform(4, transSquare));
// console.log(transform(4, transCube));
// console.log(transform(4, transAddTen));

// // Excercise no 9 : String Processor.

// const processText = ((text, operation) => operation(text));
// const processToUpperCase = ((stringVal) => stringVal.toUpperCase());
// const processToLowerCase = ((stringVal) => stringVal.toLowerCase());
// const processFindLength = ((stringVal) => stringVal.length);
// const processReverseTheString = ((stringVal)  => {
//     let reversedStr = "";
//     for( let i = stringVal.length-1; i >= 0; i--){
//         reversedStr += stringVal[i];
//     }
//     return reversedStr.toLowerCase();
// })
// console.log(processText("shRiNIdhi", processReverseTheString));
// console.log(processText("shriNidhi", processToUpperCase));
// console.log(processText("shriNidhi", processFindLength));

// // Excercise no 10 :

// function processMarks (marks, operation){
//     return operation(marks);
// }
// // the easiest method to check for the max value in a givrn array.
// let marks = [89, 58, 74, 93, 68];

// function highestMark (marks) {
//     return Math.max(...marks);
// } // we cannot use spread operator casually, as a variable taking the array and spreading it's values, we need to always call it inside a function or something. therefore highest = (...marks); and then console.log(Math.max(highest)); does not work.

// console.log(highestMark(marks));  

// // but the same concept can be written in logical version.

// let marksArr = [23, 76, 46, 21, 94, 97];
// let marksArr1 = [53, 72, 46, 91, 84, 97];
// let marksArr2 = [83, 76, 86, 71, 64, 99];
// let marksArr3 = [63, 96, 86, 61, 94, 98];



// function highestMarks (marksArr){
// let highest = marksArr[0];
// for ( let i = 0; i < marksArr.length; i++){
//     if(marksArr[i] > highest){
//         highest = marksArr[i];
//     }
// }
// return highest; // we are returning the highest outside the for loop because it does not update the value of highest if we return it inside the loop or even inside the "if" conditional statement.
// }

// // with the same concept we can perform multiple other functions.
// // for the loowest in the array.
// function lowestMarks (marksArr){
//     let lowest = marksArr[0];
//     for (let j = 0 ; j < marksArr.length ; j++){
//         if (marksArr[j] < lowest){
//             lowest = marksArr[j];
//         }
//     }
//     return lowest;
// }


// // function to get the total value.
// function totalMarks (marks){
//     let total = 0;
//     for (let i = 0; i < marks.length; i++){
//         total = total + marks[i];
//     }
//     return total;
// }



// // function to calculate the average

// function averageMarks( marks ){
//     let average = totalMarks(marks) / marks.length;
//     return average 
// };



// // now to get the function passed as arguments.

// console.log(processMarks(marksArr, highestMark));
// console.log(processMarks(marksArr, lowestMarks));
// console.log(processMarks(marksArr, totalMarks));
// console.log(processMarks(marksArr, averageMarks));


// // by using the same function we can perform operations on multiple values.
// // for example:
// console.log(processMarks(marksArr1, lowestMarks));
// console.log(processMarks(marksArr2, totalMarks));
// console.log(processMarks(marksArr3, averageMarks));


// // Excercise no 11 :
// function processNumber(number, condition, successMessage, failureMessage) {
//     if (condition(number)) {
//         return successMessage;
//     } else {
//         return failureMessage;
//     }
// }

// function isEven(number) {
//     return number % 2 === 0;
// }

// console.log(processNumber(25, isEven, "Even!", "Odd!"));
// console.log(processNumber(22, isEven, "Even!", "Odd!"));


// // Excercise no 12 Boss problem or just extra revision.
// const performOperation = (...args) => {
//     let operation = args.pop();
//     return operation (...args);
// } // this method is helpful if we want to take the input as normal values rather than in an array format. 

// const sum = (...values) => {
//     let sum = 0;
//     for (let i = 0; i < values.length; i++){
//         sum += values[i];
//     }
//     return sum;
// } // (...values) --> here the ...'s represent rest operator, unlike spread operator, it looks similar but functions differently. (NOTE : if the input is given in the array format, ... acts as spread operator, and if the input is given normally then the ... acts as rest operator.)

// const average = (...values) => {
//     let avg = sum(...values) / values.length;
//     return avg;
// }

// const maxinum = (...numbers) => {
//     let maxnum = numbers[0];
//     for( let i = 0; i < numbers.length; i++){
//         if(numbers[i] > maxnum ){
//             maxnum = numbers[i];
//         }
//     }
//     return maxnum;
// }

// const mininum = (...numbers) => {
//     let minnum = numbers[0];
//     for ( let i = 0; i < numbers.length; i++){
//         if( numbers[i] < minnum){
//             minnum = numbers[i];
//         }
//     }
//     return minnum;
// }

// console.log(performOperation(12,43,45,23,75,34,mininum));

// // counter function for closures.

// const counterFunction = () => {
//     let count = 0;
//     return function(){
//         count++;
//         return count;
//     }
// }
// const counter = counterFunction();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());



// //
// // let students = [
// //     { name: "Rahul", age: 18 },
// //     { name: "Priya", age: 21 },
// //     { name: "Arun", age: 19 }
// // ];

// // let student = students.find(student => student.age === 21);

// // console.log(student);

// let students = ["shri","ram", "janaki", "lakshman"]
// function student(studentObj) {
//     for (let i = 0 ; i < students.length; i++){
//         if(studentObj === students[i]){
//             return studentObj;
//         }
//     }
//     return "Match not found."
// }
// console.log(student("charan"));

let studs = [{name: "Shri", age : 25}, {name : "ram", age : 26}, {name : "janaki", age : 21}, {name : " lakshman", age : 24}];

function findStud(){
    for ( let i = 0 ; i < studs.length; i++){
        if(studs[i].age === 21){
            return studs[i];
        }
    }
}
console.log(findStud());