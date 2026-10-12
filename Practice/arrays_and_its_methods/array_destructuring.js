// Destructuring of an array.

// Ecxercise 1: 
// let exc1employee = {
//     name: "Rahul",
//     age: 25,
//     salary: 50000
// };

// // The below format is called destructuring of an array.
// Object.entries(exc1employee).forEach(([key, value]) => {
//     console.log(key);
//     console.log(value);
// });

// // The same above format can be better understood as given in the below example. The declaration of the key and value variable to entry is as similar as directly declaring them inside method callback.  forEac(([key, value]) => {
// //     Code;
// // })
// Object.entries(exc1employee).forEach(entry => {
//     let [key, value] = entry;
//     console.log(key);
//     console.log(value);
// });

// More example to determine destructuring.
 let ex1nums = [100, 200];
ex1nums.forEach((first, second) => {
    console.log(first, second);
}) // OUTPUT : 100, 0   200, 1. 

// Note : forEach() by default takes the first parameter as entry, second parameter as index, and third parameter as array. Since we have given first in the place of entry, we get the elements in the array, and in the index's location we have given the variable name second which produces what is the inc=dex value at the time of looping execution, Rather than printing 100, 200. Which was our expected output. 

// Note : The reason the above example produced such unexpected output is because the forEach() method looks for all the elements inside a main array, if the element inside the main array is a sub array, then going for destructuring would be helpfull, if not it considers the variable names given as default parametric entries as per the forEach() method. Since ex1nums didn't have a sub array which held the values it doesn't produce the expected output. 

