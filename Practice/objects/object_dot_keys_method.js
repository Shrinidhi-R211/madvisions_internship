// // Object.keys() : - this method returns an array containing the object's own enumerable string- keyed property names.
// // In simple Object.keys(), helps us to get the collection of key names present inside the given specific object, where the manual selection of key name can become difficult with larger key value pairs inside an object.


// // Let us say for ex.
// let ex1studs = {
//     name : "Shrinidhi",
//     age : 25,
//     course : "JavaScript"
// }
// // to access the elements from inside the object we use the technique of objectname.keyname or this.keyname. in this case let's say ex1studs.name gives "Shrinidhi".
// console.log(ex1studs.name); // Shrinidhi

// // let us assume if there are 100s of properties inside an object then remembering all of those key names will become hectic, hence that is where the Object.keys() method will come in handy.

// // the same example can be simplified or easily writtem as below:

// // Syntax : Object.key(objectName);
// console.log(Object.keys(ex1studs)); // [ "name", "age", "course" ]
// // we can directly console log the expression or we can assign a variable to the expression and then console log that variable as given below:
// let ex1studsres = Object.keys(ex1studs);
// console.log(ex1studsres); //  [ "name", "age", "course" ]

// // ince if we get the key names as arrays, then we can perform multiple operations of arrays on it, that is map(), forEach(), filter(), reduce(). And mainly we can make use of indexing to make modifications.

// console.log(ex1studsres.length); // 3
// console.log(ex1studsres[0]); // name
// console.log(ex1studsres[1]); // age

// // Excercise 1:
// const exc1gamer = {
//     name : "Alex",
//     game : "GTA",
//     level : 25
// };
// let exc1gamerres = Object.keys(exc1gamer);
// console.log(exc1gamerres); // [ 'name', 'game', 'level' ]

// // Excercise 2:
// const exc2product = {
//     name: "Laptop",
//     price: 70000,
//     brand: "Dell",
//     inStock: true
// };

// let exc2productres = Object.keys(exc2product);
// console.log(exc2productres.length); // 4

// // Excercise 3:
// const exc3employee = {
//     name: "Arun",
//     role: "Developer",
//     salary: 50000
// };

// let exc3employeeResArr = Object.keys(exc3employee);

// exc3employeeResArr.forEach(elem => console.log(elem));

// // Output for the above code.:
// // name
// // role
// // salary

// // Excercise 4: 
// const exc4user = {
//     name: "Shrinidhi",
//     role: "Developer",
//     city: "Bengaluru"
// };

// let exc4userRes = Object.keys(exc4user);
// let exc4newarr = exc4userRes.map(elem => elem.toUpperCase());
// console.log(exc4newarr); // [ 'NAME', 'ROLE', 'CITY' ]

// // Excercise 5: 
// const exc5product = {
//     name: "Laptop",
//     price: 70000,
//     brand: "Dell",
//     inStock: true
// };

// let exc5productres = Object.keys(exc5product).filter(elem => {
//     if(elem.length > 4){
//         return elem;
//     }
// });
// console.log(exc5productres); // ["price", "brand", "inStock"]

// Excercise 7: 
const exc7employee = {
    name: "Arun",
    role: "Developer",
    salary: 50000,
    department: "Engineering"
};

 Object.keys(exc7employee).forEach(elem => console.log(`${elem} : ${exc7employee[elem]}`));
// // Output :
// name: Arun
// role: Developer
// salary: 50000
// department: Engineering