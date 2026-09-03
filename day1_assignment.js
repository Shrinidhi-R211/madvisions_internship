// reversing a string in an array.
// to do this we need to learn 3 basic array methods. ( split, reverse, and join ) because the js doen't have the simpler version like python to directly reverse a string inside an array.

// console.log("Reversing a string without using map or filter functions.");
// console.log(" ");
const array = ["hey", "my", "name", "is", "Shrinidhi"];
let result = []; // creates an empty array to store the result values.
let x;
for(let a =0; a < array.length; a++){
    const revarray = array[a].split("").reverse().join("");
    //console.log(array);
    result.push(revarray);
    //console.log(" ");
   //console.log(result);
    x = result;
};
   

// now to reverse the entire resultant array we have to just apply a new logic using for loop.

let reversedArray = [];
for(let a2 = x.length ; a2>0; a2--){
    console.log(a2);
}



