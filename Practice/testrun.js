// // console.log("test case 1")

// // let x = 10;
// // //console.log(x);

// // const person = {
// //     name : "shri",
// //     age:25
// // };

// // console.log(person.age);

// // person.age = 21;
// // console.log(person.age);

// console.log("test case 2");

// const person2 = {
//     name : "xyz",
//     age : 25
// };
// console.log(person2.name);
// console.log(person2.age);

// person2 = {
//     name : "zyx",
//     age : 26
// };
// console.log(person2.name);
// console.log(person2.age);


// //  Functions 
// console.log("Functions concepts begins from here:");
// console.log(" ");

// function add(a, b){
//     return result = a +b;  
// };

// console.log(add(3,5));
// console.log(result);

// function multiplefuncs(a, b, c){
//     const result1 = a+b;
//     const result2 = result1 + c;
//     console.log(`Addition of 1st two numbers value i,e RESULT1 = ${result1}`);
//     console.log(" ");
//     console.log(`Addion of third number to first two gives the result2 = ${result2}`);
//     return result2;
// }

// console.log(multiplefuncs(5, 7, 10));
// console.log(multiplefuncs(result1)); this will give us error since the result1 and 2 are applicable only inside the scope of the function.
// console.log(multiplefuncs(result2));

// console.log(" Nested function or function inside a functon concept :");
// console.log(" ");

// function multiplefuncs1(a, b, c){ 
//     function addFirstTwo(){
//         return a+b;
//     }
//     const addiotionOfFirstTwo = addFirstTwo();
//     console.log(`Addition of the first two values is = ${addiotionOfFirstTwo}`); // output : Addition of the first two values is = 3 (if the values are given 1, 2 ,3)
    
//     const extraAddition = addiotionOfFirstTwo + c;
//     console.log(`Addition of all the values = ${extraAddition}`); // output : Addition of all the values = 6 (if the values are given 1, 2 ,3)
//     return extraAddition;
// }
// multiplefuncs1(1, 2, 3);

