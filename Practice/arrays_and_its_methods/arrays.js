let arr = [1, 2, 3, 4, 5, 6];
let arr2 = ["a", "b", "c"];
let arr3 = [1, 343, 656.64, 2.65, "charmander"];
let arr4 = [1, 2.34, "animals", ["pikachu", "squirtle", "bulbasaur"]];
let arr5 = [{name : "tonystark" , superpower : "Ironman"}, {name : "Thor", superpower : "God of Lightning",}, {name: "peter parker", superpower : "Spiderman"}];

// So an Array is a collection of data. The data could be of any datatype. 
// An array can contain multiple values, and the values does not require to be of equal datatype.
// once after the creation of the array, the accessing and modification is also necessary, therefore let us head to accessing section first.

// Array accessing.
 
// To access an array : we directly access it using indexing. 
// INDEXING. It is the concept of arrays, and the value starts from zero (0). The concept of arrays is totally based on the indexing.

// method no 1:
let arrval= arr [3]; 
console.log(arrval);

// method no 2: (directly without any variable)
console.log(arr2[2]);

// Now let us head to the concept of length. The length is a concept that gives the length of the array. ( or in short - the count of noumber of elements in the array.)

console.log(arr4.length);

// Since we have discussed about the concept of array storing values of multiple datatypes, what if an array contains another array inside it? How do we access it?

let arr6 = [2, 56.6, " ahfh ", ["bayleaf", "mew-two", "chikorita"], ["burpy", "joules", "banger", "doc", "stinker"]];
// Look at the above example we have an array which contains two sub arrays inside it. Now how do we access an element inside a subarray.

console.log(arr6[3][2]); // chikorita
console.log(arr6[4][1]); // joules.

// Modification of an Array. 
// we have 4 different methods whichh we use to add and remove element at a specific location ( either at the beggining or at the end ). and they are { push() - add at the end, pop() - remove at the end, unshift() - add at the beggining, shift() - remove at the beggining }.

// let us say, we need to add / remove an element inside an array which already consists of elements.

// we can do it by cloning the array into a new variable (if we need the original array to be unchanged) or by directly modifying the original array.

// Example : (without cloning that is actually modifying the array)

// method no 1: push().
let alphabets = ["a", "b", "c", "d"];
// to add e we will use a method called push() - this method adds an element at the end of an array and returns the entire array. And it takes a value that is to be inserted at the end of the array.
alphabets.push("e");
console.log(alphabets);

// method no 2: pop().
console.log(alphabets.pop());
console.log(alphabets);
// pop() - it is a method used to pop or remove an element at the end of an array and it doesnot require any argument, and it returns the poped or removed element from the array.

// method no 3: unshift() - add at the beggining of an array.
console.log(alphabets.unshift("no alphabelt before a"));
console.log(alphabets);
// unshift() - this method adds an element at the begginig of an array and it requires one argument, that is the element that needs to be pushed at the beggining. And it returns the length of the array after updation.

// method no 4 : shift() - remove at the beggining
console.log(alphabets.shift());
console.log(alphabets);
// shift() functions exactly same as pop(), but at the beggining of an array. That is no need for an argument, and it returns the poped element.

// Example : ( By cloning the actual array, we can preserve the structure of the original array and use the cloned array for tempoprary utilization.)

// we can also alter the elements present inside an array by accessing their index values.

let alphabeticalWords = alphabets;
console.log(alphabets);
alphabeticalWords[2] = "carrot";
console.log(alphabeticalWords);