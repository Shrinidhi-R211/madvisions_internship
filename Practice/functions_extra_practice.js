// Practice functions as Arguments

// LEVEL 1....

// Excercise no 1:
function sayHello() {
    console.log("hello!");
}

function funcAsArgument(argumentFunction) {
    argumentFunction();
}
funcAsArgument(sayHello);

// Excercise no 2 :
function greet() {
    return "Good Morning!";
}
function executeFunction(parameter){
    return parameter();  //We are calling the function which is passed as an argument to the higher order function. 
}
console.log(executeFunction(greet)); // We should not call the fuunction here which is being passed as an argument to the higher order function.

//Excercise no 3: 

function add () {
    return 10 + 20;
}
function executeAdd(functionAsArgument){
    return functionAsArgument();
}
console.log(executeAdd(add));


// LEVEL 2.....

// Excercise no 4 :

function processNumber (number, func){
    return func(number);
}
function letsDouble(number){
    return number * 2;
}
console.log(processNumber(5,letsDouble));

function square (number){
    return number * number;
}
function cube (number){
    return square(number) * number;
}

console.log(processNumber(3,square));
console.log(processNumber(7,cube));

// Excercise no 6 : Calculate function with multiple sub functions as arguments.
function calculateValues(a, b, funct){
    return funct(a, b);
}
function addition(a, b){
    let result = 0;
    let add = a + b;
    result += add;
    return result;
}
console.log(calculateValues(3, 6, addition));

function subtract (a, b){
    return a - b;
}
console.log(calculateValues(55, 20, subtract));

function multiply (a, b) {
    return a * b;
}
console.log(calculateValues(4, 7, multiply));

function divide (a, b) {
    return a / b; 
}
console.log(calculateValues(10, 3, divide));

// LEVEL 3 

// Excercise no 7 :
function checkNumber( number, checkingFunc){
    return checkingFunc(number);
}
function isEven (number){
    if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
function isPositive (number) {
    return number > 0;
}

function isGreaterThan100 (number) {
    // if (number > 100){
    //     return true;
    // }
    // return false; we can write in this manner, but to keep it even efficient we can write the same code as below;
    return number > 100; // the return keyword itself gives the boolean values.
}

console.log(checkNumber(20, isEven));
console.log(checkNumber(21, isEven));
console.log(checkNumber(-1, isPositive));
console.log(checkNumber(1, isPositive));
console.log(checkNumber(20, isGreaterThan100));
console.log(checkNumber(200, isGreaterThan100));

// Excercise no 8 : Transform a value 

function transform( value, transformingFunc){
    return transformingFunc(value);
}

const transSquare = ((number) => number * number); // implicit return  syntax: declataration function_name = ((variable_name) => condition / code ); there is no need for {}, and return keyword for implicit arrow functions, since it only executes one line of code.

const transCube = ((number) => {
    return number * transSquare(number); // this is also another example of arroe function, but even though if it has a single line logic, we can write it in an extended way, but if we do that then {}, and return keyword is necessary.
});

const transAddTen = ((number) => number + 10);


console.log(transform(4, transSquare));
console.log(transform(4, transCube));
console.log(transform(4, transAddTen));

// Excercise no 9 : String Processor.

const processText = ((text, operation) => operation(text));
const processToUpperCase = ((stringVal) => stringVal.toUpperCase());
const processToLowerCase = ((stringVal) => stringVal.toLowerCase());
const processFindLength = ((stringVal) => stringVal.length);
const processReverseTheString = ((stringVal)  => {
    let reversedStr = "";
    for( let i = stringVal.length-1; i >= 0; i--){
        reversedStr += stringVal[i];
    }
    return reversedStr.toLowerCase();
})
console.log(processText("shRiNIdhi", processReverseTheString));
console.log(processText("shriNidhi", processToUpperCase));
console.log(processText("shriNidhi", processFindLength));

// Excercise no 10 :

let marks = [89, 58, 74, 97, 68];
console.log(Math.max(...marks));