// There are 5 different types of looping statements, available in js.
// 1. for loop.
// 2. while loop.
// 3. do while loop. 
// 4. for of loop. 
// 5. for in loop. 

// Let us go one by one. first of let us go with the "for loop"
// syntax : for ( start; condition; update){ code. }....


// Excersice no 1.
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


// Excersice no 2 :
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

// Excersice no 3 :
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

// Excersice no 5: Reversing the numbers.

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

let a = 5;

do{
    //console.log(a);
    a++;
} while (a >= 10);

// Practicle Example for Do WHile loop. 
let pwd = 12345;
let userentry;

do {
    userentry = Number(prompt("Enter your password : "));
    if(userentry === pwd) {
        console.log(" Password accepted!");
    } else {
        console.log("Password not Recognized");
    }
} while ( userentry !== pwd )

    console.log(" Access Granted to the Application")