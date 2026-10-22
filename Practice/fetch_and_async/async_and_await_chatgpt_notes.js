/*
===============================================================================
🚀 JAVASCRIPT — ASYNC & AWAIT MASTER NOTES
===============================================================================

📚 LEVEL       : Beginner → Intermediate
💻 LANGUAGE    : JavaScript
📂 FILE        : async_and_await.js
🎯 OBJECTIVE   : Understanding asynchronous JavaScript with practical examples.

===============================================================================
🗺️ COMPLETE TOPIC ROADMAP
===============================================================================

01. Understanding async
02. Understanding await
03. Combining async and await
04. Returning Values from Async Functions
05. Error Handling — try, catch, finally
06. Sequential vs Concurrent Execution
07. Promise.all()
08. Fetch API with async/await

BONUS:
    - Fetch API + filter() + map()
    - Displaying API data using DOM
    - Common Mistakes
    - Final Revision Notes
    - Practice Challenges

===============================================================================
📌 HOW TO USE THESE NOTES
===============================================================================

1. Read the definition and syntax of each topic.
2. Understand WHY and WHERE the concept is used.
3. Study your original exercises under their corresponding topics.
4. Predict the output before executing the code.
5. Read the common mistakes after the working examples.
6. Complete the practice challenges at the bottom.

TO RUN:

    node async_and_await.js

Use Node.js 18+ for the optional built-in Fetch API example.

NOTE:
The Fetch API section makes an external request only when enabled.
The DOM example must be tested inside a browser.

===============================================================================
*/


// =============================================================================
// ⚙️ CONFIGURATION & HELPERS
// =============================================================================

// Set to true when you want to test the real Fetch API.
const ENABLE_LIVE_FETCH = false;


// Helper for printing topic headings.
function printHeading(number, topic) {

    console.log("\n" + "=".repeat(65));

    console.log(`📘 TOPIC ${number} : ${topic}`);

    console.log("=".repeat(65));
}


// Helper for creating a Promise that resolves after a delay.
const wait = (ms) => {

    return new Promise((resolve) => {

        setTimeout(resolve, ms);

    });
};


// =============================================================================
// 📘 TOPIC 01 — UNDERSTANDING async
// =============================================================================

/*
===============================================================================
1. DEFINITION
===============================================================================

The async keyword declares an asynchronous function.

An async function ALWAYS returns a Promise.

Even when the function returns an ordinary value such as:

    - Number
    - String
    - Boolean
    - Array
    - Object

JavaScript makes the value available through a Promise.


===============================================================================
2. WHY DO WE NEED async?
===============================================================================

- To create Promise-returning functions.
- To write readable asynchronous code.
- To use await inside a function.
- To handle asynchronous results with .then() or await.


===============================================================================
3. SYNTAX
===============================================================================

METHOD 1 : Function Declaration

async function functionName() {
    return value;
}


METHOD 2 : Arrow Function

const functionName = async () => {
    return value;
};


METHOD 3 : Function Expression

const functionName = async function() {
    return value;
};


===============================================================================
4. IMPORTANT MENTAL MODEL
===============================================================================

Normal Function:

    return 100;

    Result → 100


Async Function:

    return 100;

    Result → Promise fulfilled with 100


NOTE:
An async function starts executing when it is called.

The async keyword does NOT automatically make every operation
inside the function non-blocking.

===============================================================================
*/


// =============================================================================
// ✅ TOPIC 01 — WORKING EXAMPLES
// =============================================================================

async function topic1Examples() {

    printHeading("01", "UNDERSTANDING async");


    // ---------------------------------------------------------
    // Example 1 : Normal Function
    // ---------------------------------------------------------

    function normalGetNumber() {

        return 100;

    }

    console.log(normalGetNumber());

    // OUTPUT : 100


    // ---------------------------------------------------------
    // Example 2 : Async Function
    // ---------------------------------------------------------

    async function asyncGetNumber() {

        return 100;

    }

    const result = asyncGetNumber();

    console.log(result);

    // OUTPUT : Promise fulfilled with 100
    // Exact console formatting depends on the environment.

    console.log(result instanceof Promise);

    // OUTPUT : true


    // ---------------------------------------------------------
    // Example 3 : Accessing the Resolved Value
    // ---------------------------------------------------------

    const number = await asyncGetNumber();

    console.log(number);

    // OUTPUT : 100


    // ---------------------------------------------------------
    // Example 4 : Async Arrow Function
    // ---------------------------------------------------------

    const greet = async () => {

        return "Hello JavaScript!";

    };

    const message = await greet();

    console.log(message);

    // OUTPUT : Hello JavaScript!

}


/*
===============================================================================
❌ COMMON MISTAKE — TOPIC 01
===============================================================================

async function getNumber() {
    return 100;
}

const result = getNumber();

console.log(result + 10);


PROBLEM:

result contains a Promise, not the number 100.


✅ CORRECT APPROACH:

async function displayResult() {

    const result = await getNumber();

    console.log(result + 10);

}

displayResult();


OUTPUT : 110

===============================================================================
*/


// =============================================================================
// 📘 TOPIC 02 — UNDERSTANDING await
// =============================================================================

/*
===============================================================================
1. DEFINITION
===============================================================================

The await keyword pauses the surrounding asynchronous function
until the awaited Promise settles.

IF THE PROMISE FULFILLS:
await produces the resolved value.

IF THE PROMISE REJECTS:
await throws the rejection reason.


===============================================================================
2. WHY DO WE NEED await?
===============================================================================

Without await:

We generally use .then() to access Promise results.

With await:

We can assign a Promise's resolved value directly to a variable.


===============================================================================
3. SYNTAX
===============================================================================

async function getData() {

    const result = await somePromise;

    console.log(result);

}


===============================================================================
4. IMPORTANT MENTAL MODEL
===============================================================================

- await pauses the surrounding async function.
- It does NOT pause the entire JavaScript program.
- Other JavaScript code can continue executing.
- Code before the first await executes immediately when called.
- Code after await resumes asynchronously.

NOTE:
await also works with non-Promise values, although its
primary use is waiting for Promises.

===============================================================================
*/


// =============================================================================
// 🧪 YOUR PRACTICE — EXERCISE 1
// =============================================================================

/*
===============================================================================
EXERCISE 1 : CHECKING THE ORDER OF EXECUTION
===============================================================================

OBJECTIVE:

Understand how JavaScript executes statements before and after await.

CONCEPTS USED:

- Promise constructor
- setTimeout()
- resolve()
- async function
- await
- console.log()

NOTE:
This is a simulated delayed operation, not a real API request.

===============================================================================
*/

async function exercise1() {

    printHeading("02", "await — EXECUTION ORDER");


    console.log(
        ".........Printing Message at the top of async function........."
    );


    // Step 1 : Creating a Promise with a two-second delay.

    const exc1fetchTasks = new Promise((resolve) => {

        setTimeout(() => {

            resolve(["Learn JS", "Learn React"]);

        }, 2000);

    });


    // Step 2 : Creating an async function.

    async function exc1getTasks() {

        console.log("Fetching tasks...");

        const exc1tasks = await exc1fetchTasks;

        console.log(exc1tasks);

        console.log("Tasks Fetched successfully!");

    }


    // Step 3 : Calling the async function.

    const exc1Pending = exc1getTasks();


    // Step 4 : Code outside continues executing.

    console.log(
        "Printing the message below the async function...."
    );


    // Wait before starting the next exercise.

    await exc1Pending;

}


/*
===============================================================================
✅ EXPECTED OUTPUT — EXERCISE 1
===============================================================================

.........Printing Message at the top of async function.........

Fetching tasks...

Printing the message below the async function....

[ Approximately 2-second delay ]

[ 'Learn JS', 'Learn React' ]

Tasks Fetched successfully!


===============================================================================
🔍 EXECUTION EXPLANATION
===============================================================================

STEP 1:
The first console.log() executes immediately.

STEP 2:
The Promise constructor runs and schedules the timer.

STEP 3:
exc1getTasks() is called.

STEP 4:
"Fetching tasks..." prints immediately.

STEP 5:
JavaScript encounters:

    const exc1tasks = await exc1fetchTasks;

The async function pauses while the Promise is pending.

STEP 6:
JavaScript continues executing code outside exc1getTasks().

STEP 7:
The message below the function call gets printed.

STEP 8:
After approximately 2 seconds, the Promise resolves.

STEP 9:
exc1tasks receives the resolved array.

STEP 10:
The tasks array and success message get printed.


===============================================================================
📌 IMPORTANT NOTES
===============================================================================

NOTE 1:
async does not automatically delay function execution.

NOTE 2:
Statements before await execute immediately.

NOTE 3:
Statements after await execute when the function resumes.

NOTE 4:
setTimeout() schedules a callback to execute after a delay.
It does not block the entire JavaScript program.

NOTE 5:
The Promise begins its work when the Promise constructor runs,
not when await is encountered.

===============================================================================
*/


// =============================================================================
// 📘 TOPIC 03 — COMBINING async AND await
// =============================================================================

/*
===============================================================================
1. DEFINITION
===============================================================================

async and await work together to simplify Promise-based operations.

async:
Declares a function that returns a Promise.

await:
Retrieves the resolved value of an awaited Promise.


===============================================================================
2. SYNTAX
===============================================================================

async function functionA() {

    return value;

}

async function functionB() {

    const result = await functionA();

    console.log(result);

}

functionB();


===============================================================================
3. WHY IS THIS USEFUL?
===============================================================================

We can:

- Retrieve API responses.
- Process arrays returned by asynchronous operations.
- Access object properties after loading data.
- Call one async function from another.
- Use filter(), map(), and other array methods on resolved data.

===============================================================================
*/


// =============================================================================
// 🧪 YOUR PRACTICE — EXERCISE 2
// =============================================================================

/*
===============================================================================
EXERCISE 2 : USING async AND await WITH OBJECTS
===============================================================================

OBJECTIVE:

Retrieve a JavaScript object from a Promise and access its properties.

===============================================================================
*/

async function exercise2() {

    printHeading("03", "ASYNC AND AWAIT WITH OBJECTS");


    const exc2fetchUser = Promise.resolve({

        id: 1,

        name: "Arun",

        role: "Developer"

    });


    async function exc2getUser() {

        console.log("Fetching user...");

        const exc2user = await exc2fetchUser;

        console.log(exc2user.name);

        console.log(exc2user.role);

    }


    await exc2getUser();

}


/*
===============================================================================
✅ EXPECTED OUTPUT — EXERCISE 2
===============================================================================

Fetching user...
Arun
Developer


===============================================================================
🔍 EXPLANATION
===============================================================================

1. Promise.resolve() creates a fulfilled Promise.

2. The Promise contains an object.

3. await retrieves the object.

4. exc2user.name accesses the name property.

5. exc2user.role accesses the role property.


NOTE:
await retrieves the fulfilled value.

The value may be a:

- String
- Number
- Array
- Object
- Boolean
- Another supported JavaScript value

===============================================================================
*/


// =============================================================================
// 🧪 YOUR PRACTICE — EXERCISE 3
// =============================================================================

/*
===============================================================================
EXERCISE 3 : REALISTIC TO-DO APPLICATION
===============================================================================

OBJECTIVE:

1. Simulate asynchronous task retrieval.
2. Retrieve tasks using await.
3. Filter unfinished tasks.
4. Extract their titles.
5. Display the resulting array.

CONCEPTS:

async + await + Promise.resolve() + filter() + map()

===============================================================================
*/

async function exercise3() {

    printHeading("03", "REALISTIC TO-DO APPLICATION");


    // Original practice array.
    // Corrected the repeated IDs to make them unique.

    const exc3tasks = [

        {
            id: 1,
            title: "learn JS",
            completed: true
        },

        {
            id: 2,
            title: "Learn React",
            completed: false
        },

        {
            id: 3,
            title: "Build To-Do App",
            completed: false
        }

    ];


    // Simulated asynchronous data.

    const exc3FetchTasks = Promise.resolve(exc3tasks);


    // Using an async function.

    async function exc3DisplayTasks() {


        // Step 1 : Wait for the data.

        const exc3alltasks = await exc3FetchTasks;


        // Step 2 : Filter unfinished tasks.
        // Preserving your original filter logic.

        const exc3UnfinishedTasks = exc3alltasks.filter((tasks) => {

            if (tasks.completed !== true) {

                return tasks;

            }

        });


        // Step 3 : Extract only task titles.

        const exc3UnfinishedTasksTitle = exc3UnfinishedTasks.map((elem) => {

            return elem.title;

        });


        // Step 4 : Display the titles.

        console.log(exc3UnfinishedTasksTitle);

    }


    await exc3DisplayTasks();

}


/*
===============================================================================
✅ EXPECTED OUTPUT — EXERCISE 3
===============================================================================

[ 'Learn React', 'Build To-Do App' ]


===============================================================================
🔍 EXPLANATION
===============================================================================

STEP 1:
await retrieves the tasks array.

STEP 2:
filter() checks each task's completed property.

STEP 3:
Only unfinished tasks are selected.

STEP 4:
map() extracts the title from each selected object.

STEP 5:
console.log() prints the resulting array.


===============================================================================
💡 BETTER FILTER SYNTAX
===============================================================================

YOUR ORIGINAL CODE:

const unfinished = tasks.filter(task => {

    if (task.completed !== true) {

        return task;

    }

});


WHY DOES THIS WORK?

filter() keeps an element when the callback returns
a truthy value.

Your callback returns the task object when incomplete.
Objects are truthy, so the matching task is retained.

However, filter() is clearer when its callback returns
a Boolean condition.


RECOMMENDED:

const unfinished = tasks.filter(task => {
    return task.completed === false;
});


SHORTER ARROW FUNCTION:

const unfinished = tasks.filter(
    task => task.completed === false
);


NOTE:
Your original version works for these objects.

The shorter version communicates the condition more clearly.


===============================================================================
⚠️ ORIGINAL PRACTICE MISTAKE
===============================================================================

You originally assigned:

id: 1
id: 1
id: 1

This does not cause a JavaScript syntax error.

However, task IDs should generally be unique in an application,
especially when updating, deleting, or locating individual tasks.

Corrected IDs:

1, 2, 3

===============================================================================
*/


// =============================================================================
// 🧪 YOUR PRACTICE — EXERCISE 4
// =============================================================================

/*
===============================================================================
EXERCISE 4 : CALLING ONE ASYNC FUNCTION FROM ANOTHER
===============================================================================

OBJECTIVE:

Pass a value into one async function and retrieve the result
inside another async function.

===============================================================================
*/

async function exercise4() {

    printHeading("03", "CALLING ASYNC FUNCTIONS");


    async function exc4greet(name) {

        return name;

    }


    async function exc4displayName(name) {

        const exc4Name = await exc4greet(name);

        console.log(exc4Name);

    }


    await exc4displayName("Arun");

}


/*
===============================================================================
✅ EXPECTED OUTPUT — EXERCISE 4
===============================================================================

Arun


===============================================================================
🔍 EXECUTION FLOW
===============================================================================

exc4displayName("Arun")
        |
        v
name = "Arun"
        |
        v
exc4greet(name)
        |
        v
Promise fulfilled with "Arun"
        |
        v
await retrieves "Arun"
        |
        v
exc4Name = "Arun"
        |
        v
console.log(exc4Name)


===============================================================================
❌ YOUR PREVIOUS MISTAKE
===============================================================================

You previously wrote:

async function exc4displayName() {

    const exc4Name = await exc4greet();

    console.log(exc4Name);

}

exc4displayName("Arun");


PROBLEM:

You passed "Arun" into exc4displayName().

But exc4displayName did not declare a name parameter.

You also called exc4greet() without passing the name.


CORRECT:

async function exc4displayName(name) {

    const exc4Name = await exc4greet(name);

    console.log(exc4Name);

}


IMPORTANT MENTAL MODEL:

Arguments do not automatically transfer between functions.

Each function must explicitly receive and pass the values it needs.

===============================================================================
*/


// =============================================================================
// 📘 TOPIC 04 — RETURNING VALUES FROM ASYNC FUNCTIONS
// =============================================================================

/*
===============================================================================
1. DEFINITION
===============================================================================

The return statement inside an async function determines
the fulfillment value of the Promise returned by that function.


===============================================================================
2. IMPORTANT RULES
===============================================================================

1. An async function always returns a Promise.

2. return value makes the Promise fulfill with that value.

3. If a function finishes without returning a value,
   its Promise normally fulfills with undefined.

4. await retrieves the fulfilled value.

5. .then() can also retrieve the fulfilled value.

6. If an async function throws an error,
   its Promise rejects instead of fulfilling.


===============================================================================
3. THREE WAYS TO WORK WITH AN ASYNC RETURN VALUE
===============================================================================

METHOD 1:
Calling the async function directly.

METHOD 2:
Using .then().

METHOD 3:
Using await.


===============================================================================
4. DIFFERENCE BETWEEN return AND console.log()
===============================================================================

console.log():
Prints a value.

return:
Makes a value available to the calling code.

NOTE:
Printing a value does NOT automatically return it.

===============================================================================
*/


// =============================================================================
// 🧪 YOUR PRACTICE — EXERCISE 5
// =============================================================================

/*
===============================================================================
EXERCISE 5 : RETURNING VALUES FROM ASYNC FUNCTIONS
===============================================================================
*/

async function exercise5() {

    printHeading("04", "RETURNING VALUES — THREE METHODS");


    // ---------------------------------------------------------
    // METHOD 1 : Calling Directly
    // ---------------------------------------------------------

    console.log("Calling Directly without await.");


    async function exc5met1getNumber() {

        return 100;

    }


    const exc5result = exc5met1getNumber();


    console.log(exc5result);

    // OUTPUT : A Promise object.


    console.log(exc5result instanceof Promise);

    // OUTPUT : true


    // ---------------------------------------------------------
    // METHOD 2 : Using .then()
    // ---------------------------------------------------------

    console.log("Using .then() method to get the value.");


    async function exc5met2getNumber() {

        return 100;

    }


    await exc5met2getNumber().then((result) => {

        console.log(result);

    });

    // OUTPUT : 100


    // ---------------------------------------------------------
    // METHOD 3 : Using await
    // ---------------------------------------------------------

    console.log("Using await to get the value.");


    async function exc5met3getNumber() {

        return 100;

    }


    async function exc5met3displayNumber() {

        const exc5result = await exc5met3getNumber();

        console.log(exc5result);

    }


    await exc5met3displayNumber();

    // OUTPUT : 100

}


/*
===============================================================================
📌 COMPARISON — EXERCISE 5
===============================================================================

METHOD 1:

const result = getNumber();

RESULT:
A Promise object.


METHOD 2:

getNumber().then(result => {
    console.log(result);
});

RESULT:
The fulfilled value.


METHOD 3:

const result = await getNumber();

RESULT:
The fulfilled value.


IMPORTANT:
await normally belongs inside an async function.

You can also use top-level await inside JavaScript modules.


===============================================================================
❌ COMMON MISTAKE
===============================================================================

async function getNumber() {
    return 100;
}

const number = getNumber();

console.log(number + 10);


PROBLEM:
number contains a Promise.


CORRECT:

async function displayNumber() {

    const number = await getNumber();

    console.log(number + 10);

}


OUTPUT : 110

===============================================================================
*/


// =============================================================================
// 🧪 YOUR PRACTICE — EXERCISE 6
// =============================================================================

/*
===============================================================================
EXERCISE 6 : RETURNING A VALUE FROM ONE ASYNC FUNCTION TO ANOTHER
===============================================================================

OBJECTIVE:

Understand how returned values travel between asynchronous functions.

===============================================================================
*/

async function exercise6() {

    printHeading("04", "ASYNC RETURN VALUE BETWEEN FUNCTIONS");


    async function exc6greet(name) {

        return `Hello, ${name}`;

    }


    async function exc6displayGreeting() {

        const exc6message = await exc6greet("Arun");

        console.log(exc6message);

    }


    await exc6displayGreeting();

}


/*
===============================================================================
✅ EXPECTED OUTPUT — EXERCISE 6
===============================================================================

Hello, Arun


===============================================================================
🔍 EXPLANATION
===============================================================================

1. exc6displayGreeting() calls exc6greet("Arun").

2. exc6greet() returns a Promise fulfilled with "Hello, Arun".

3. await retrieves the resolved string.

4. exc6message stores the string.

5. console.log() prints the message.


===============================================================================
💡 IMPORTANT NOTE
===============================================================================

Returning a value and printing a value are different operations.


EXAMPLE:

async function getName() {
    console.log("Arun");
}

async function displayName() {

    const name = await getName();

    console.log(name);

}

displayName();


OUTPUT:

Arun
undefined


WHY?

getName() prints "Arun" but returns nothing.

Therefore, its Promise fulfills with undefined.

===============================================================================
*/


// =============================================================================
// 📘 TOPIC 05 — ERROR HANDLING
// =============================================================================

/*
===============================================================================
1. DEFINITION
===============================================================================

Error handling allows us to manage operations that might fail.

The three important keywords are:

try
catch
finally


===============================================================================
2. SYNTAX
===============================================================================

async function getData() {

    try {

        const result = await somePromise;

        console.log(result);

    } catch (error) {

        console.log(error.message);

    } finally {

        console.log("Operation completed");

    }

}


===============================================================================
3. RESPONSIBILITIES
===============================================================================

try:
Contains operations that might throw an error.

catch:
Handles errors thrown from the try block.

finally:
Performs cleanup whether the operation succeeds or fails.


===============================================================================
4. ERROR OBJECT
===============================================================================

new Error("Something went wrong");

Creates an Error object.


throw new Error("Something went wrong");

Throws the Error.


error.message

Accesses the message stored inside an Error object.


===============================================================================
5. IMPORTANT RULES
===============================================================================

- throw interrupts the current execution path.
- Statements after an unconditional throw are unreachable.
- await throws when the awaited Promise rejects.
- catch receives errors thrown inside the try block.
- finally executes after try/catch.

NOTE:
try...catch is a general JavaScript feature.

It can handle synchronous errors and errors from
rejected Promises encountered through await.

===============================================================================
*/


// =============================================================================
// 🧪 YOUR PRACTICE — EXERCISE 7
// =============================================================================

/*
===============================================================================
EXERCISE 7 : ERROR HANDLING WITH try, catch, finally
===============================================================================

OBJECTIVE:

Understand:

1. Successful Promise fulfillment.
2. Deliberately causing an error.
3. Catching the error.
4. Executing the finally block.
5. Handling rejected Promises.

===============================================================================
*/

async function exercise7() {

    printHeading("05", "ERROR HANDLING");


    // ---------------------------------------------------------
    // METHOD 1 : Deliberate ReferenceError
    // ---------------------------------------------------------

    async function exc7getTasks() {

        return ["Learn JS", "Learn React"];

    }


    async function exc7displayTasks() {

        try {

            const exc7tasks = await exc7getTasks();

            console.log(exc7tasks);


            /*
            INTENTIONAL ERROR:

            The next function name is deliberately misspelled.

            Correct function name:
            exc7getTasks()

            Incorrect function name:
            excgetTasks()

            This throws a ReferenceError.

            It is kept intentionally for error-handling practice.
            */


            const exc7Tasks2 = await excgetTasks();

            console.log(exc7Tasks2);


        } catch (error) {

            console.log("Error:", error.message);


        } finally {

            console.log("Operation completed");

        }

    }


    await exc7displayTasks();


    /*
    EXPECTED OUTPUT:

    [ 'Learn JS', 'Learn React' ]

    Error: excgetTasks is not defined

    Operation completed


    IMPORTANT:

    The first request succeeds.

    The second statement throws a ReferenceError.

    The catch block handles that error.

    The finally block executes afterward.
    */


    // ---------------------------------------------------------
    // METHOD 2 : Handling a Rejected Promise
    // ---------------------------------------------------------

    async function exc7met2getTasks() {

        return Promise.reject(

            new Error("Server unavailable")

        );

    }


    async function exc7met2displayTasks() {

        try {

            const exc7met2tasks = await exc7met2getTasks();

            console.log(exc7met2tasks);


        } catch (error) {

            console.log("Error:", error.message);


        } finally {

            console.log("Operation completed");

        }

    }


    await exc7met2displayTasks();


    /*
    EXPECTED OUTPUT:

    Error: Server unavailable

    Operation completed


    WHY?

    exc7met2getTasks() returns a rejected Promise.

    await throws its rejection reason.

    Execution jumps to catch.

    finally executes afterward.
    */

}


/*
===============================================================================
📌 EXERCISE 7 — IMPORTANT DIFFERENCE
===============================================================================

METHOD 1:

const result = await excgetTasks();

ERROR:
ReferenceError.

WHY?
The function name is not defined.


METHOD 2:

return Promise.reject(
    new Error("Server unavailable")
);

ERROR:
Promise rejection.

WHY?
The Promise was deliberately rejected.


BOTH CAN BE HANDLED USING try...catch.

However, the source of the errors is different.


===============================================================================
❌ COMMON MISTAKE
===============================================================================

async function getData() {

    throw new Error("Failed");

    console.log("Success");

}


PROBLEM:

console.log("Success") never executes.

The throw statement interrupts that execution path.


CORRECT:

async function displayData() {

    try {

        await getData();

    } catch (error) {

        console.log(error.message);

    }

}

===============================================================================
*/


// =============================================================================
// 📘 TOPIC 06 — SEQUENTIAL VS CONCURRENT EXECUTION
// =============================================================================

/*
===============================================================================
1. DEFINITION
===============================================================================

SEQUENTIAL EXECUTION:

Operations start and complete one after another.

The second operation begins only after the first awaited
operation finishes.


CONCURRENT EXECUTION:

Independent asynchronous operations start without waiting
for each other to finish.

Their waiting periods may overlap.


===============================================================================
2. WHY DO WE NEED BOTH?
===============================================================================

SEQUENTIAL:
Useful when one operation depends on the previous result.

EXAMPLES:

- Login first, then retrieve a protected user profile.
- Create a record, then use its generated ID.


CONCURRENT:
Useful when operations are independent.

EXAMPLES:

- Retrieve user data and public news data.
- Load independent dashboard statistics.
- Fetch weather and other unrelated information.


===============================================================================
3. SYNTAX
===============================================================================

SEQUENTIAL:

const result1 = await task1();

const result2 = await task2();


CONCURRENT:

const promise1 = task1();

const promise2 = task2();

const result1 = await promise1;

const result2 = await promise2();


===============================================================================
4. IMPORTANT MENTAL MODEL
===============================================================================

SEQUENTIAL:

Task A → Wait → Task B → Wait → Finish


CONCURRENT:

Task A ────────────┐
                   ├── Both results available
Task B ────────────┘


NOTE:
Concurrent does not necessarily mean that JavaScript
executes multiple tasks on different threads.

It means the asynchronous operations can be in progress
during overlapping periods.

===============================================================================
*/


// =============================================================================
// 🧪 YOUR PRACTICE — EXERCISE 8
// =============================================================================

/*
===============================================================================
EXERCISE 8 : SEQUENTIAL VS CONCURRENT EXECUTION
===============================================================================

OBJECTIVE:

Understand the performance difference between:

1. Awaiting operations one after another.
2. Starting independent operations before awaiting them.

===============================================================================
*/

async function exercise8() {

    printHeading("06", "SEQUENTIAL VS CONCURRENT");


    // ---------------------------------------------------------
    // Helper Function — Your Original Code
    // ---------------------------------------------------------

    const exc8wait = (ms) => {

        return new Promise(resolve => {

            setTimeout(resolve, ms);

        });

    };


    // ---------------------------------------------------------
    // Function 1 : Get User
    // ---------------------------------------------------------

    async function exc8getUser() {

        await exc8wait(1000);

        return "Arun";

    }


    // ---------------------------------------------------------
    // Function 2 : Get Tasks
    // ---------------------------------------------------------

    async function exc8getTasks() {

        await exc8wait(1500);

        return ["Learn JS", "Learn React"];

    }


    // ---------------------------------------------------------
    // METHOD 1 : Sequential Execution
    // ---------------------------------------------------------

    async function exc8SecloadDashboard() {

        console.log("Loading Sequentially...");


        const exc8SecUser = await exc8getUser();


        const exc8SecTasks = await exc8getTasks();


        console.log(exc8SecUser);

        console.log(exc8SecTasks);

    }


    // Measure sequential execution.

    const sequentialStart = Date.now();


    await exc8SecloadDashboard();


    const sequentialEnd = Date.now();


    console.log(

        `Sequential Time: ${sequentialEnd - sequentialStart}ms`

    );


    /*
    EXPECTED OUTPUT:

    Loading Sequentially...

    [ After approximately 2.5 seconds ]

    Arun

    [ 'Learn JS', 'Learn React' ]

    Sequential Time: approximately 2500ms


    WHY?

    getUser() takes approximately 1000ms.

    Only after it finishes does getTasks() begin.

    getTasks() takes approximately 1500ms.

    Total:

    1000ms + 1500ms = 2500ms
    */


    // ---------------------------------------------------------
    // METHOD 2 : Concurrent Execution
    // ---------------------------------------------------------

    async function exc8ParloadDashboard() {

        console.log("Loading Concurrently...");


        const exc8ParuserPromise = exc8getUser();


        const exc8PartasksPromise = exc8getTasks();


        const exc8Paruser = await exc8ParuserPromise;


        const exc8Partasks = await exc8PartasksPromise;


        console.log(exc8Paruser);

        console.log(exc8Partasks);

    }


    // Measure concurrent execution.

    const concurrentStart = Date.now();


    await exc8ParloadDashboard();


    const concurrentEnd = Date.now();


    console.log(

        `Concurrent Time: ${concurrentEnd - concurrentStart}ms`

    );


    /*
    EXPECTED OUTPUT:

    Loading Concurrently...

    [ After approximately 1.5 seconds ]

    Arun

    [ 'Learn JS', 'Learn React' ]

    Concurrent Time: approximately 1500ms


    WHY?

    Both functions start before either result is awaited.

    Their waiting periods overlap.

    The total duration is approximately the duration
    of the slower operation.
    */

}


/*
===============================================================================
📌 EXERCISE 8 — IMPORTANT NOTES
===============================================================================

NOTE 1:
await pauses the surrounding async function.

NOTE 2:
Starting multiple independent Promises before awaiting them
allows their operations to overlap.

NOTE 3:
Concurrent execution is useful when operations
do not depend on each other's results.

NOTE 4:
Sequential execution is useful when the next task
requires the result of the previous task.

NOTE 5:
Actual execution time may be slightly longer than the
simulated delay due to scheduling and other overhead.


===============================================================================
⚠️ YOUR ORIGINAL EXECUTION DETAIL
===============================================================================

You originally wrote:

exc8SecloadDashboard();

exc8ParloadDashboard();


Both dashboard functions start without waiting for
the first dashboard function to finish.

Consequently, their operations overlap.

For an easier timing comparison, these notes use:

await exc8SecloadDashboard();

await exc8ParloadDashboard();


This ensures the first example finishes before
the second timing demonstration begins.

===============================================================================
*/


// =============================================================================
// 📘 TOPIC 07 — Promise.all()
// =============================================================================

/*
===============================================================================
1. DEFINITION
===============================================================================

Promise.all() accepts an iterable of values or Promises
and returns a single Promise.

The returned Promise fulfills when all input Promises fulfill.

It rejects when any input Promise rejects.


===============================================================================
2. WHY DO WE NEED Promise.all()?
===============================================================================

Instead of handling several independent Promise results
separately, Promise.all() allows us to collect them together.


===============================================================================
3. SYNTAX
===============================================================================

const results = await Promise.all([

    promise1,

    promise2,

    promise3

]);


===============================================================================
4. USING ARRAY DESTRUCTURING
===============================================================================

const [user, tasks] = await Promise.all([

    getUser(),

    getTasks()

]);


===============================================================================
5. IMPORTANT RULES
===============================================================================

- Results preserve their original input order.
- All Promises must fulfill for Promise.all() to fulfill.
- One rejection causes the combined Promise to reject.
- Other operations are not automatically cancelled.
- Promise.all() can accept ordinary values too.

===============================================================================
*/


// =============================================================================
// ✅ TOPIC 07 — PRACTICAL EXAMPLES
// =============================================================================

async function topic7Examples() {

    printHeading("07", "Promise.all()");


    // ---------------------------------------------------------
    // Example 1 : Combining Multiple Promises
    // ---------------------------------------------------------

    const result = await Promise.all([

        Promise.resolve("HTML"),

        Promise.resolve("CSS"),

        Promise.resolve("JavaScript")

    ]);


    console.log(result);


    // OUTPUT : ["HTML", "CSS", "JavaScript"]


    // ---------------------------------------------------------
    // Example 2 : Array Destructuring
    // ---------------------------------------------------------

    async function getNumber() {

        return 10;

    }


    async function getMarks() {

        return 80;

    }


    const [num, marks] = await Promise.all([

        getNumber(),

        getMarks()

    ]);


    console.log(num + marks);

    console.log(marks - num);


    /*
    OUTPUT:

    90
    70
    */


    // ---------------------------------------------------------
    // Example 3 : Promise.all() with Delays
    // ---------------------------------------------------------

    const promiseA = new Promise(resolve => {

        setTimeout(() => {

            resolve("First");

        }, 300);

    });


    const promiseB = new Promise(resolve => {

        setTimeout(() => {

            resolve("Second");

        }, 100);

    });


    const orderedResults = await Promise.all([

        promiseA,

        promiseB

    ]);


    console.log(orderedResults);


    /*
    OUTPUT:

    ["First", "Second"]


    IMPORTANT:

    Promise B finishes before Promise A.

    However, Promise.all() preserves the input order.
    */


    // ---------------------------------------------------------
    // Example 4 : Handling Promise.all() Rejection
    // ---------------------------------------------------------

    try {

        const data = await Promise.all([

            Promise.resolve("User loaded"),

            Promise.reject(

                new Error("Tasks unavailable")

            )

        ]);


        console.log(data);


    } catch (error) {

        console.log("Error:", error.message);

    }


    // OUTPUT : Error: Tasks unavailable

}


/*
===============================================================================
❌ COMMON MISTAKES — TOPIC 07
===============================================================================

MISTAKE 1:

Assuming Promise.all() returns results in completion order.

CORRECTION:

Promise.all() preserves input order.


MISTAKE 2:

Assuming Promise.all() cancels pending operations after rejection.

CORRECTION:

Other started operations may continue running.


MISTAKE 3:

Using Promise.all() for operations that depend
on each other's results.

CORRECTION:

Use sequential execution for dependent operations.


NOTE:
Promise.allSettled() can be used when you want the outcome
of every input Promise, including fulfilled and rejected ones.

===============================================================================
*/


// =============================================================================
// 📘 TOPIC 08 — FETCH API WITH async/await
// =============================================================================

/*
===============================================================================
1. DEFINITION
===============================================================================

fetch() is a built-in JavaScript function used to
send HTTP requests and receive HTTP responses.

It returns a Promise.


===============================================================================
2. WHY DO WE NEED FETCH API?
===============================================================================

Frontend applications need to communicate with backend servers.

Examples:

- Fetching user profiles.
- Loading tasks.
- Displaying weather data.
- Retrieving product information.
- Loading dashboard statistics.


===============================================================================
3. BASIC SYNTAX
===============================================================================

const response = await fetch("API_URL");

const data = await response.json();


===============================================================================
4. UNDERSTANDING THE TWO await KEYWORDS
===============================================================================

FIRST await:

const response = await fetch("API_URL");

Waits for the HTTP response.


SECOND await:

const data = await response.json();

Waits for the response body to be read and parsed as JSON.


===============================================================================
5. IMPORTANT RESPONSE PROPERTIES
===============================================================================

response.ok

Returns true for HTTP status codes from 200 through 299.


response.status

Returns the HTTP response status code.


response.headers

Provides access to the response headers.


===============================================================================
6. IMPORTANT NOTE
===============================================================================

fetch() does NOT automatically reject its Promise
for HTTP errors such as 404 or 500.

Therefore, we should check response.ok.


===============================================================================
7. RECOMMENDED SYNTAX
===============================================================================

async function getData() {

    try {

        const response = await fetch("API_URL");

        if (!response.ok) {

            throw new Error(`HTTP Error: ${response.status}`);

        }

        const data = await response.json();

        return data;

    } catch (error) {

        console.log(error.message);

        throw error;

    }

}


===============================================================================
*/


// =============================================================================
// ✅ TOPIC 08 — REUSABLE FETCH FUNCTION
// =============================================================================

async function fetchTodos() {

    const response = await fetch(

        "https://jsonplaceholder.typicode.com/todos"

    );


    if (!response.ok) {

        throw new Error(

            `HTTP Error: ${response.status}`

        );

    }


    const data = await response.json();


    return data;

}


// =============================================================================
// ✅ TOPIC 08 — PRACTICAL FILTER + MAP EXERCISE
// =============================================================================

async function topic8Practice() {

    printHeading("08", "FETCH API + ARRAY METHODS");


    // ---------------------------------------------------------
    // Example 1 : Simulated Task Data
    // ---------------------------------------------------------

    const tasks = [

        {
            id: 1,
            title: "HTML",
            completed: true
        },

        {
            id: 2,
            title: "CSS",
            completed: false
        },

        {
            id: 3,
            title: "JavaScript",
            completed: false
        },

        {
            id: 4,
            title: "React",
            completed: true
        }

    ];


    async function processTasks() {


        const data = await Promise.resolve(tasks);


        const result = data

            .filter(task => task.completed === false)

            .map(task => task.title);


        return result;

    }


    const result = await processTasks();


    console.log(result);


    // OUTPUT : ["CSS", "JavaScript"]


    /*
    EXPLANATION:

    1. Promise.resolve(tasks) produces a fulfilled Promise.

    2. await retrieves the tasks array.

    3. filter() selects unfinished tasks.

    4. map() extracts the titles.

    5. return makes the async function fulfill with the result.

    6. The calling code receives the array through await.
    */


    // ---------------------------------------------------------
    // Example 2 : Display Task Titles
    // ---------------------------------------------------------

    result.forEach(title => {

        console.log("Task:", title);

    });


    /*
    OUTPUT:

    Task: CSS
    Task: JavaScript
    */


    // ---------------------------------------------------------
    // Example 3 : Fetch Real Data From API
    // ---------------------------------------------------------

    if (ENABLE_LIVE_FETCH) {

        try {

            console.log("Fetching real API data...");


            const apiTasks = await fetchTodos();


            const unfinishedTitles = apiTasks

                .filter(task => task.completed === false)

                .map(task => task.title)

                .slice(0, 5);


            console.log(unfinishedTitles);


        } catch (error) {

            console.log(

                "Failed to load tasks:",

                error.message

            );

        }

    }

}


/*
===============================================================================
📌 TOPIC 08 — IMPORTANT NOTES
===============================================================================

NOTE 1:
Promise.resolve(tasks) is used to simulate asynchronous data.

It does not perform a real API request.


NOTE 2:
fetch() is used to make real HTTP requests.


NOTE 3:
response.json() returns a Promise.


NOTE 4:
await response.json() produces the parsed JavaScript data.


NOTE 5:
filter() creates a new array containing matching elements.


NOTE 6:
map() creates a new array containing transformed elements.


NOTE 7:
forEach() executes a callback for each array element.


NOTE 8:
slice(0, 5) selects the first five elements.


===============================================================================
❌ COMMON MISTAKE — FORGETTING await
===============================================================================

WRONG:

const response = await fetch("API_URL");

const data = response.json();

console.log(data.title);


PROBLEM:

data contains a Promise, not the parsed JSON object.

Assuming data is a Promise without a title property,
data.title evaluates to undefined.


CORRECT:

const response = await fetch("API_URL");

const data = await response.json();

console.log(data.title);


NOTE:
Also check response.ok when handling HTTP errors.

===============================================================================
*/


// =============================================================================
// 🌐 BONUS — USING FETCH API WITH DOM
// =============================================================================

/*
===============================================================================
OBJECTIVE
===============================================================================

Create a small dashboard that:

1. Listens for a button click.
2. Fetches tasks from an API.
3. Filters unfinished tasks.
4. Extracts titles.
5. Displays titles using DOM elements.
6. Handles loading and error states.


===============================================================================
HTML STRUCTURE
===============================================================================

Create a separate index.html file:

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>Async Await Dashboard</title>

    <script src="async_and_await.js" defer></script>

</head>

<body>

    <h1>My Task Dashboard</h1>

    <button id="loadTasks">
        Load Tasks
    </button>

    <p id="status"></p>

    <ul id="taskList"></ul>

</body>

</html>


===============================================================================
*/


// =============================================================================
// ✅ DOM + FETCH API IMPLEMENTATION
// =============================================================================

function initializeTaskDashboard() {


    const loadBtn = document.querySelector("#loadTasks");

    const taskList = document.querySelector("#taskList");

    const status = document.querySelector("#status");


    // Do nothing if the expected HTML elements do not exist.

    if (!loadBtn || !taskList || !status) {

        return;

    }


    // Async Event Listener Callback

    loadBtn.addEventListener("click", async () => {


        loadBtn.disabled = true;

        status.textContent = "Loading tasks...";

        taskList.textContent = "";


        try {

            // Step 1 : Fetch tasks

            const tasks = await fetchTodos();


            // Step 2 : Filter unfinished tasks

            const unfinishedTasks = tasks.filter(task => {

                return task.completed === false;

            });


            // Step 3 : Extract titles

            const titles = unfinishedTasks.map(task => {

                return task.title;

            });


            // Step 4 : Display the first five titles

            titles.slice(0, 5).forEach(title => {


                const li = document.createElement("li");


                li.textContent = title;


                taskList.append(li);


            });


            status.textContent = "Tasks loaded successfully!";


        } catch (error) {


            status.textContent = error.message;


        } finally {


            loadBtn.disabled = false;


        }

    });

}


// Execute DOM-related code only inside a browser.

if (typeof document !== "undefined") {

    initializeTaskDashboard();

}


/*
===============================================================================
📌 DOM INTEGRATION — IMPORTANT NOTES
===============================================================================

addEventListener():
Registers an event callback.

async () => {}:
Creates an asynchronous callback function.

await fetchTodos():
Retrieves task data from the API.

filter():
Selects unfinished tasks.

map():
Extracts the task titles.

document.createElement():
Creates HTML elements.

textContent:
Sets text content safely.

append():
Adds an element to the webpage.

finally:
Re-enables the button after the request completes or fails.


NOTE:
The HTML and JavaScript must be loaded together
in a browser to test this DOM example.

===============================================================================
*/


// =============================================================================
// 📒 BONUS — CALLBACK FUNCTIONS REVISION
// =============================================================================

/*
===============================================================================
DEFINITION
===============================================================================

A callback is a function passed as an argument
to another function.

The receiving function can execute that callback.

SYNTAX:

function functionA(callback) {

    callback();

}

function functionB() {

    console.log("Hello");

}

functionA(functionB);


===============================================================================
IMPORTANT DIFFERENCE
===============================================================================

functionB

Refers to the function without invoking it.


functionB()

Invokes the function immediately.


===============================================================================
CALLBACKS VS ASYNC/AWAIT
===============================================================================

Callbacks:
Functions passed into other functions.

async/await:
Syntax used to work with Promises.

NOTE:
Callbacks do not automatically make operations asynchronous.

Callbacks and async/await can be combined when appropriate.

===============================================================================
*/


// =============================================================================
// ✅ CALLBACK REVISION EXAMPLE
// =============================================================================

async function callbackRevision() {

    printHeading("BONUS", "CALLBACK FUNCTION REVISION");


    function greetWithCallback(name, callback) {

        callback(name);

    }


    function displayName(name) {

        console.log(name);

    }


    greetWithCallback("Arun", displayName);


    // OUTPUT : Arun

}


// =============================================================================
// 🧠 FINAL REVISION — IMPORTANT MENTAL MODELS
// =============================================================================

/*
===============================================================================
01. async
===============================================================================

async function getData() {

    return 100;

}

RESULT:
A Promise fulfilled with 100.


===============================================================================
02. await
===============================================================================

const result = await getData();

RESULT:
100


===============================================================================
03. RETURNING VALUES
===============================================================================

return value;

Makes the value available through the async function's Promise.


===============================================================================
04. .then()
===============================================================================

getData().then(result => {

    console.log(result);

});


===============================================================================
05. ERROR HANDLING
===============================================================================

try {

    await getData();

} catch (error) {

    console.log(error.message);

} finally {

    console.log("Operation completed");

}


===============================================================================
06. SEQUENTIAL EXECUTION
===============================================================================

const a = await taskA();

const b = await taskB();


Task B starts after Task A fulfills.


===============================================================================
07. CONCURRENT EXECUTION
===============================================================================

const promiseA = taskA();

const promiseB = taskB();

const a = await promiseA;

const b = await promiseB;


Both operations start before their results are awaited.


===============================================================================
08. Promise.all()
===============================================================================

const [a, b] = await Promise.all([

    taskA(),

    taskB()

]);


===============================================================================
09. FETCH API
===============================================================================

const response = await fetch("API_URL");

const data = await response.json();


===============================================================================
10. ARRAY METHODS WITH FETCHED DATA
===============================================================================

const result = data

    .filter(item => item.completed === false)

    .map(item => item.title);


===============================================================================
*/


// =============================================================================
// ⚠️ PERSONAL COMMON-MISTAKE CHECKLIST
// =============================================================================

/*
===============================================================================

[ ] Did I use async when await is required?

[ ] Did I remember that async functions return Promises?

[ ] Did I pass the correct arguments between functions?

[ ] Did I confuse console.log() with return?

[ ] Did I retrieve the Promise's resolved value correctly?

[ ] Did I handle rejected Promises?

[ ] Did I check response.ok after fetch()?

[ ] Did I write await before response.json()?

[ ] Did I correctly distinguish sequential and concurrent execution?

[ ] Did I remember that Promise.all() preserves input order?

[ ] Did I correctly use filter() and map()?

[ ] Did I use forEach() only when I wanted to perform operations?

[ ] Did I avoid repeating IDs in task objects?

[ ] Did I handle errors in asynchronous event callbacks?

===============================================================================
*/


// =============================================================================
// 🎯 PRACTICE CHALLENGES
// =============================================================================

/*
===============================================================================
CHALLENGE 01 — BASIC async
===============================================================================

Create an async function that returns your name.

Retrieve and print the value using await.


===============================================================================
CHALLENGE 02 — EXECUTION ORDER
===============================================================================

Create an async function with:

console.log("A");

await Promise.resolve();

console.log("B");

Then add console.log("C") outside the function.

Predict the order before running it.


===============================================================================
CHALLENGE 03 — ASYNC WITH OBJECTS
===============================================================================

Create a Promise containing:

{
    id: 1,
    name: "Arun",
    role: "Developer"
}

Retrieve and print only the role property.


===============================================================================
CHALLENGE 04 — FUNCTION ARGUMENTS
===============================================================================

Create two async functions.

Pass a name from the second function to the first.

Return the name and display it.


===============================================================================
CHALLENGE 05 — RETURN VALUES
===============================================================================

Create an async function that returns 50.

Inside another function:

- Retrieve the value using await.
- Add 20.
- Return the result.
- Access the final value using .then().


===============================================================================
CHALLENGE 06 — ERROR HANDLING
===============================================================================

Create an async function that throws an Error.

Handle it using try...catch...finally.


===============================================================================
CHALLENGE 07 — SEQUENTIAL VS CONCURRENT
===============================================================================

Create two async functions with simulated delays.

Compare sequential and concurrent execution.


===============================================================================
CHALLENGE 08 — Promise.all()
===============================================================================

Create three Promises that resolve with numbers.

Use Promise.all() to retrieve the numbers.

Calculate and display their sum.


===============================================================================
CHALLENGE 09 — FETCH API
===============================================================================

Fetch tasks from:

https://jsonplaceholder.typicode.com/todos

Filter unfinished tasks.

Extract their titles.

Display the first five titles.


===============================================================================
CHALLENGE 10 — DOM PROJECT
===============================================================================

Create a webpage with:

- A button
- A loading message
- A task list

When clicked:

- Fetch tasks
- Filter unfinished tasks
- Extract their titles
- Render them as list items
- Handle errors
- Remove the loading state

===============================================================================
*/


// =============================================================================
// ▶️ MAIN PRACTICE RUNNER
// =============================================================================

/*
===============================================================================
PURPOSE
===============================================================================

Run each learning topic and original exercise sequentially.

This prevents the independent examples from mixing their
asynchronous console outputs.

The runner waits for one exercise to finish before moving
to the next exercise.

NOTE:
Individual examples may still demonstrate concurrent
execution internally.

===============================================================================
*/

async function runAllNotes() {


    console.log("\n");

    console.log("🚀 STARTING ASYNC & AWAIT PRACTICE");


    // Topic 01
    await topic1Examples();


    // Topic 02
    await exercise1();


    // Topic 03
    await exercise2();

    await exercise3();

    await exercise4();


    // Topic 04
    await exercise5();

    await exercise6();


    // Topic 05
    await exercise7();


    // Topic 06
    await exercise8();


    // Topic 07
    await topic7Examples();


    // Topic 08
    await topic8Practice();


    // Bonus
    await callbackRevision();


    console.log("\n");

    console.log("=".repeat(65));

    console.log("🎉 ALL ASYNC & AWAIT EXERCISES COMPLETED!");

    console.log("=".repeat(65));

}


// Run the complete learning notes.

runAllNotes().catch(error => {

    console.error("Unexpected Error:", error);

});


/*
===============================================================================
🎓 END OF JAVASCRIPT — ASYNC & AWAIT
===============================================================================

TOPICS COVERED:

✅ async
✅ await
✅ Calling async functions
✅ Returning Promise values
✅ try...catch...finally
✅ Sequential execution
✅ Concurrent execution
✅ Promise.all()
✅ Fetch API
✅ JSON parsing
✅ filter() and map()
✅ DOM integration
✅ Callback revision

ORIGINAL PRACTICE EXERCISES INTEGRATED:

✅ Exercise 1
✅ Exercise 2
✅ Exercise 3
✅ Exercise 4
✅ Exercise 5
✅ Exercise 6
✅ Exercise 7
✅ Exercise 8

===============================================================================
*/