// There are 5 different types of looping statements, available in js.
// 1. for loop.
// 2. while loop.
// 3. do while loop. 
// 4. for of loop. 
// 5. for in loop. 

// Let us go one by one. first of let us go with the "for loop"
// syntax : for ( start; condition; update){ code. }....


// Excercise no 1.
let x = 1;
 for( let i = x; i<=10; i++) {
    //console.log(i);
}

// output :
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10


// Excercise no 2 :
for ( i = 1 ; i <= 10 ; i++) {
    //console.log ( i * 2);
}

// output :
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20

// Excercise no 3 :
for ( i = 1 ; i <= 10 ; i++) {
    //console.log(i * 3);
}

// Output :
// 3
// 6
// 9
// 12 
// 15
// 18
// 21
// 24
// 27
// 30

// Excersice no 4 :  ( practice on Array )

let fruits = ["apple", "banana", "mango", "orange"];
for ( i = 0; i < fruits.length; i++) {
    //console.log(fruits[i]);  // if we print only i then we will only get the index values of the array elements, there fore we have to print the array[index].
}

// Excercise no 5: Reversing the numbers.

for ( i = 5; i >=0; i--) {
    //console.log(i);
}


// WHILE LOOP 

// The while loop is used when we have no certain limit of condition. 

// Example 1:

let y = 1;
while (y <= 10) {
    //console.log(y);
    y++;
}

// output :
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
let z = 15;
while (z >= 1){
    //console.log(z);
    z--;
}


// DO WHILE LOOP 
// This format is used when we have something to be printed or functioned once irrespective of the condition.


// Excercise no 6 :
let a = 5;

do{
    //console.log(a);
    a++;
} while (a >= 10);

// Practicle Example for Do WHile loop. 
//
let pwd = 12345;
let userentry;

do {
    userentry = Number(prompt("Enter your password : ")); // prompt() method is a browser defined method and is not supported for node.js execution, hence we have to create a new html file externally and link this js file to it, and then run the HTML file.
    if(userentry === pwd) {
        console.log(" Password accepted!");
        console.log(" Access Granted to the Application")
    } else {
        console.log("Password not Recognized");
        break;
    }
} while ( userentry !== pwd )

// FOR OF LOOP : ( This looping statements are basically used on Arrays, to extract all the elements from the Array.) 
// Excercise no 7 : 

const fruitsArray = ["Apple", "Banana", "Mango", "orange"];
for (const fruitNames of fruitsArray) {
    //console.log(fruitNames);
}

// FOR IN LOOP : ( These looping statements are basically used to work on the Objects, since it gets the keys, we basically use this to work on the Objects.)
// Excercise no 8 : 
const user = {
    name: "Shri",
    age: 25,
    role: "FEnd Developer Intern"
};

for (const key in user) {
    //console.log(key) // even though if we have declared the variable named as "key" to take the values of the object, but when we console it only gives the names of the keys, rather than the values it holds. To obtain the values we have to use the indexing technique. i.e. Objectvariable[keyname];
    //console.log(`${key} : ${user[key]}`); //--> template literals
}

// FOR LOOP but with Continue keyword :
// Excercise no 9 :
for(let num = 1; num <= 10; num++){
    if (num === 5){
        continue; // continue keyword helps to skip the specified conditon and then continue the loop inlike break keyword.
    }
    //console.log(num);
}

// Excercise no 10 :
for ( num = 1; num <= 10; num++){
    if(num === 5){
        break; // break keyword stops / breaks out of the loop once if it satisfies the condition.
    }
    //console.log(num);
}