// // An object is a way of grouping the related data in key-value pairs.
// // SYNTAX :
// // let objectName = {
// //     key: value,
// //     key: value,
// //     key: value
// // };
// // Example 1:
// let student = {
//     name: "Rahul",
//     age: 21,
//     course: "JavaScript"
// };

// // Note : Here the students is an Object and the (name, age, course) ae all properties of an object, whereas ("rahul", 21, "JavaScript") are the values.

// // Important Remainder:  An object is one thing that contains related pieces of information identified by keys.

// // Excercise 1:
// let laptop = {
//     brand : "ASUS",
//     model : "F17",
//     price : 71000,
//     ram : "8Gb",
//     processor : "intel i5"
// };
// console.log(laptop);

// let movie = {
//     title : "I want to eat your pancreas",
//     year : 2018,
//     rating : 5,
//     isAvailableOnCrunchyroll : true,
//     genres : ["Slice of life", "Romance", "Emotional"]
// };
// console.log(movie);

// // NOTE : An object's property can hold another data structure as its value.

// // NOTE 2: Objects are mutable datatypes. The original object can be modified.  




// // DOT NOTATION to access the properties of an object.
// // To access a specific property from an object we use dot notation.

// // For example if we only wanted to access the title property from movie object, then we will do it in the way displayed below.
// console.log(movie.title); // Output : "I want to eat your pancreas"
// console.log(movie.genres); // Output : [ 'Slice of life', 'Romance', 'Emotional' ]

// // Since we have an array inside the object to access array elements inside the object we have to make use of indexing techniques.

// console.log(movie.genres[1]); // Output: Romance

// // To alter the values of the property we will just do a simple trick that is to directly modify the value, using property name.

// movie.genres[2] = "Super emotional";
// console.log(movie.genres[2]);
// console.log(movie);



// // Extra concept : Bracket Notatation, it is super important when we want JavaScript to use the value inside propertyName to decide which property to access.
// let propertyName = "title";
// let propertyYear = "year";
// let propertyCategory = "genres";
// // To access these values inside these properties, we have to use "BRACKET NOTATION."
// console.log(movie[propertyCategory]); // Output : ["Slice of life", "Romance", "Super emotional"]
// console.log(movie[propertyName]); // Output : "I want to eat your pancreas."
// // or we can use bracket notation even without assing a variable.
// console.log(movie["director"]); // Output : "Shin'ichiro Ushijima"




// // Adding, Updating and Deleting Object Properties:
// // There are 3 fundamental operations related to object modifications and they are: 

// // 1. adding
// // 2. updating.
// // 3. deleting.



// // Adding a new property into an object.

// // We already have an object named movie, and we have different properties present inside it, but still we will try to add a new property to it.

// movie.director = "Shin'ichiro Ushijima";
// console.log(movie);
// movie.success = "Blockbuster"; 



// // Updating an existing property,

// // Suppose if i want to alter the value of an existing property, then we simply do this:

// console.log(movie.title);
// movie.title = "I Want To Eat Your Pancreas"
// console.log(movie.title);


 
// // Deleting a property.

// // to delete a property, we have to make use of a keyword called "delete". 

// // for ex:
// console.log(movie);
// delete movie.success; // this remoes the property named success which is inside the movie object. 
// console.log(movie);

// // Nested Objects:

// let nestedStudent = {
//     name : "Shrinidhi",
//     age : 25,
//     course : "Master of Computer Application",
//     address : {
//         city : "Bangalore",
//         state : "Karnataka",
//         country : "India"
//     }
// };
// console.log(nestedStudent);
// // To read the nested object property.
// console.log(nestedStudent.address.state);

// // We can also achieve this using bracket notation.
// console.log(nestedStudent["address"]["city"]);

// // We can also modify or either add properties to the nested objects.
// nestedStudent.address.pincode = 563135;
// console.log(nestedStudent.address);


// // Excercise no 2:
// let employee = {
//     name : " abc ",
//     role : " front-end developer",
//     salary : 30000,
//     address : {
//         city : "Bangalore",
//         state : "Karnataka",
//         country : "India"
//     }
// };
// console.log(employee.name);
// console.log(employee.address.city);
// employee["address"]["state"] = "KARNATAKA";
// employee.address["pincode"] = 563135;
// delete employee.address.country;
// console.log(employee["address"]["city"]);
// console.log(employee);

// // ARRAY + OBJECTS :
// let studs = [
//     {name : "Shri", age : 25},
//     {name : "Rahul", age : 24},
//     {name : "Arjun", age : 26}
// ];

// console.log(studs[0]); // Output : {name : "Shri", age : 25}
// console.log(studs[1].name); // Output : Rahul

// // ARRAY -> OBJECT -> ARRAY:
// let studs2 = [
//     {name : "Rahul", skills : ["html", "css", "js"]},
//     {name : "Priya", skills : ["Python", "SQL"]}
// ];
// console.log(studs2[1]["skills"][1]); // Output : SQL

// Objects can also contain arrays of Objects.

let company = {
    name : "MadVisions",
    employee :[
        {
            ename : "Madhu Sudhan",
            role : "Chief Executive Officer",
            salary : 100000
        },
        {
            ename : "Amna",
            role : "Manager",
            salary : 75000
        },
        {
            ename : "Munib Akthar",
            role : "AI Developer",
            salary : 60000
        },
        {
            ename : "Waheed Ullah",
            role : "Ai Developer",
            salary : 60000
        }
    ]
};
// console.log(company["name"]);
// console.log(company["employee"][1]["ename"]);console.log(company["employee"][1].role);
// console.log(company["employee"][0]["ename"]);console.log(company["employee"][0].role);

company.employee.filter(elem => {
    if(elem.salary > 70000){
        console.log(elem);
    }
});

// Note : The filter() method belongs to arrays and does not work on objects, however if we have arrays inside an object then we can first access the array and then perform filter() on that array insude the object, as demonstrated in the above example.