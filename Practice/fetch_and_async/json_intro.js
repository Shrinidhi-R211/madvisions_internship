// TOPIC 1: What is JSON, and why do we need it?

// JSON - stands for JavaScript Object Notation.

// It's a lightweight text format used to represent structured data, especially when exchanging information between applications.


// NOrmal Array containing objects inside it, before becoming json format. This value cannot be stored in to the localstorage, hence we need json format of this data, to move around between different applications.

const tasks = [
{id: 1, title : "Learn JSON", completed : false, priority : "high"},
{id: 2, title : "Practical DOM", completed : true, priority : "medium"},
{id: 3, title : "Learn Fetch", completed : false, priority : "low"}
];

console.log(tasks);

// topic 1.2. Difference between JavaScript Objects and JSON.

// JavaScript object	            JSON
// JavaScript value	                Text-based data format
// Keys can be unquoted	            Keys must use double quotes
// Can contain functions	        Cannot contain functions
// Can contain undefined	        Cannot contain undefined
// Can be directly manipulated	    Must be parsed before using it as an object

// Note : suppose you want to store this data in localStorage. Local storage stores string values only, not JS objects directly. Thereore we need to convert our object into a string in JSON format. And to do that we need a method called json.stringify().

// JSON.stringify() - it converts a JavaScript value, such as an object or array, into a JSON-format string, to help store it in the localstorage.

const tasksjson = JSON.stringify(tasks);
console.log(tasksjson);
console.log(typeof(tasksjson));

// Note : Notice two things after conversion.
// 1. The property names now have double quotes.
// 2. The result's data type is string, not object.

// localStorage.setItem("myTasks", tasksjson); - This code stores the text in the browser and then the browser can retain the saved data even after the page refreshes.
localStorage.setItem("myTasks", tasksjson);

// NOTE : since the localStorage stores the data in the browser, it does not work in node.js setup. We need to run it in either browser directly or we need to create a separate HTML file, and run that file using go live.


// TOPIC 1.3 : JSON.parse() - JSON.parse() converts valid JSON text into its corresponding JavaScript value, such as an object or array.

// JSON.stingify() method has already converted the data or object into a string, and the localStorage.setItem(), has stored the data inside the browser storage.

//  Suppose, if the user refreshes the webpage, and wants to retrieve the tasks saved earlier. Then we can use -> const savedItems = localStorage.getItem("myTasks");.

//   But however, the output that we get will be in the string format. And we cannot directly use array methods such as, .filter() on that JSON string to filter out our task Object. Hence we use JSON.parse(), to convert it back to javascript array or an object.

const newTasks = localStorage.getItem("myTasks");
const restoredtasks = JSON.parse(newTasks);
console.log(restoredtasks);
console.log(restoredtasks[0].title);
console.log(restoredtasks[0].priority);
console.log(restoredtasks[1].title);
console.log(restoredtasks[1].priority);
// console.log(restoredtasks[5].title); // throughs an error, since we don't have any element inside the array with the index 5.


const restoredTasksEmpty = JSON.parse(localStorage.getItem("myTasks") || []);
// This uses an empty array when no saved string exists. Later, when we cover error handling, we'll handle cases where the stored JSON itself is invalid.





// Exercise 3 — Restore tasks

// Scenario: The user refreshes your To-Do List application. You need to restore the saved tasks and identify the unfinished ones.


// 1. Retrieve "myWorks" from localStorage.
// 2. Convert the JSON string back into a JavaScript array.
// 3. Store the restored array in restoredWorks.
// 4. Print the restored array.
// 5. Use .filter() to get only tasks where completed is false.
// 6. Print the unfinished works.
// 7. Print the title of the first unfinished work.

const works = [ {id: 1, title : "Learn JSON", completed : false, priority : "high"}, {id: 2, title : "Learn Fetch", completed : true, priority : "mid"},{id: 3, title : "Learn JS", completed : false, priority : "low"} ];

const stringWorks = JSON.stringify(works);
console.log(stringWorks);

localStorage.setItem("myWorks", stringWorks); // check for the localstorage data in Applications section in F12 or DevTools.

// 1. Retrieve "myWorks" from localStorage. 
// 2. Convert the JSON string back into a JavaScript array.
// 3. Store the restored array in restoredWorks.
const retrivedWorks = JSON.parse(localStorage.getItem("myWorks") || []);

// 4. Store the restored array in restoredTasks.
// console.log(retrivedWorks);

// 5. Use .filter() to get only works where completed is false.
// 6. Print the unfinished tasks.
const retrivedWorksData = retrivedWorks.filter(work => {
    if(work.completed === false){
        return work; 
    }
});

// 7. Print the title of the first unfinished task.
console.log(retrivedWorksData);
console.log(retrivedWorksData[0].title);