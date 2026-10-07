// REDUCE (). 
// Take many values and progressively build ONE final result.

// SYNTAX : console.log(array.reduce((accumaulator, element) => {
//     update accumulator;
//     return accumulator
// }, initialvalue)); or in short we can write the entire reduce method in a variable and then console.log it. as we have done in the below exercise .

// Excercise 1: 
let exc1nums =  [10, 20, 30, 40, 50];
let exc1numsres = exc1nums.reduce((accu, elem) => {
    accu += elem;
    return accu;
},0);
console.log(exc1numsres); // Output : 150

// Excercise 2:
let exc2nums = [2, 3, 4, 5];
let exc2numsres = exc2nums.reduce((accu, elem) => {
    accu = accu * elem;
    return accu;
}, 1);
console.log(exc2numsres); // Output : 120

// Ecercise 3:
let exc3nums = [10, 25, 7, 40, 15, 60];
let exc3numsres = exc3nums.reduce((accu, elem) => {
    if(elem > 20){
        accu = accu + 1;
    }
    return accu; // we have to write return statement outside the if statement because if we write it inside the accu vaulue becomes undefined for elem <= 20. And then for the next itteration the accu value will be undefined and hence the overall result of the reduce() becomes NaN.
},0);
console.log(exc3numsres); // Output : 3

// Excercise 4: 
let exc4nums = [12, 45, 7, 89, 34, 56];
let exc4numsres = exc4nums.reduce((accu, elem) => {
    if(elem > accu){
        accu = elem;
    }
    return accu;
},exc4nums[0]);
console.log(exc4numsres); // Output : 89

// Excercise 5 :
let exc5nums = [42, 17, 89, 5, 31, 64];
let exc5numsres = exc5nums.reduce((accu, elem) => {
    if(elem < accu){
        accu = elem;
    }
    return accu;
}, exc5nums[0]);
console.log(exc5numsres); // Output : 5

// Excercise 6: 
let exc6nums = [10, 25, 7, 40, 15, 60];
let exc6numsres = exc6nums.reduce((accu, elem) => {
    if(elem > 20){
        accu = accu + elem;
    }
    return accu;
}, 0);
console.log(exc6numsres);

// // Excercise 7: 
let exc7products = [
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 8000 },
    { name: "USB Cable", price: 300 }
];

let exc7productsres = exc7products.reduce((accu, elem) => {
    accu = accu + elem.price;
    return accu;
},0);
console.log(exc7productsres); // Output : 10300.

// // Excercise 8 :
let exc8products = [
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 8000 },
    { name: "USB Cable", price: 300 }
];
let exc8productsres = exc8products.reduce((accu, elem) => {
    if(elem.price > 1000){
        accu = accu + elem.price
    }
    return accu;
},0);
console.log(exc8productsres); // Output : 9500

// // Excercise 9:
let exc9nums = [10, 20, 30, 40];
let exc9numsres = exc9nums.reduce((accu, elem) => {
    accu.sum = accu.sum + elem;
    accu.count = accu.count + 1;
    return accu;
},
{
    sum : 0,
    count : 0
});

console.log(exc9numsres);