// excercise no 1 :
function greetUser(name){
    return (`Hello ${name}`);
}
document.getElementById("myH1").textContent = greetUser("Shrinidhi");

// Excercise no 2:
function calculateArea(l, b){
    return l*b;
}
document.getElementById("area").textContent = calculateArea(2, 5);

// Excercise no 3 :
const square = ((num) => {
    return num * num ;
})
document.getElementById("squareNum").textContent = square(4)

// Excercise no 4 : Arrow function but with implicit return.
const cube = ((cubeNum) => cubeNum * cubeNum * cubeNum );
document.getElementById("cube").textContent = cube(2);

// Excercise no 5 : Default Parameters.
const welcome = ((name = "Guests.") => (`Welcome ${name}`));
document.getElementById("welFunc1").textContent = welcome(); // Default parameter value is displayed.
document.getElementById("welFunc2").textContent = welcome("Shrinidhi");

// Excercise no 6 : Higher Order Functions.
// Higher Order Functions are the functions that accepts another function or returns another function.

function higher(num){
    return function (subnum){
        return num * subnum;
    }
}
let multiplier = higher(2);
document.getElementById("higherOrder").textContent = multiplier(4);