/* 
================================================
Excersise 1 : A real time application of async and await functions to check the order of execution. 
================================================
*/

console.log(".........Printing Message at the top of async function.........");

const exc1fetchTasks = new Promise((resolve) => {
  setTimeout(() => {
    resolve(["Learn JS", "Learn React"]);
  }, 2000);
});

async function exc1getTasks() {
  console.log("Fetching tasks...");

  const exc1tasks = await exc1fetchTasks;

  console.log(exc1tasks);
  console.log("Tasks Fetched successfully!");
}
exc1getTasks();
console.log("Printing the messaage below the async function....");

/* 
================================================
Excersise 2 : A real time application of async and await on the objects. 
================================================
*/

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

exc2getUser();

/*
================================================
Excersise 3 : Realistic To-Do Application.
================================================
*/

const  exc3tasks = [
    { id : 1, title : "learn JS", completed : true },
    { id : 1, title : "Learn React", completed : false },
    { id : 1, title : "Build To-Do App", completed : false }
];

// Simulated Asynchronous data.
const exc3FetchTasks = Promise.resolve(exc3tasks);

// Using an async function.

async function exc3DisplayTasks() {
    // Step 1: Wait for the data.
    const exc3alltasks = await exc3FetchTasks;

    // Step 2 : Filter Unfinished Tasks.
    const exc3UnfinishedTasks = exc3alltasks.filter((tasks) => {
        if(tasks.completed !== true ){
            return tasks;
        }
    });

    // Step 3 : Extract only the names / titles of the tasks.

    const exc3UnfinishedTasksTitle = exc3UnfinishedTasks.map((elem) => {
        return elem.title;
    })

    // Step 4 : Display the Title.
    console.log(exc3UnfinishedTasksTitle);
};

exc3DisplayTasks();

/* 
================================================
Excercise 4 : We can call one async function from another.
================================================
*/

async function exc4greet(name){
    return name;
};

async function exc4displayName(name){
const exc4Name = await exc4greet(name);

console.log(exc4Name);
};

exc4displayName("Arun");

/* 
================================================
Excercise 5 : Returning values from async functions.

Important rules to remember :
------------------------------
|- An async function always returns a Promise.

|- return value makes that Promise fulfill with the value.

|- Without an explicit return, the function normally fulfills with undefined, provided it finishes successfully.

|- await gives you the fulfilled value inside an async function.

|- .then() is another way to access the fulfilled value.

|- If an async function throws an error, its Promise rejects instead of fulfilling.
================================================
*/

// // Three ways to work with a returned async value.
// // Method 1 — Calling directly.
console.log("Calling Directly without await.");

async function exc5met1getNumber() {
    return 100;
}

const exc5result = exc5met1getNumber();

console.log(exc5result);  // Output : Promise { 100 }

// // Method 2 : Using .then() method.

console.log("Using .then() method to get the value.");
async function exc5met2getNumber() {
    return 100;
}

exc5met2getNumber().then((result) => {
    console.log(result);
});

// // Method 3 : Using await.

console.log("Using await to get the value.");
async function exc5met3getNumber() {
    return 100;
}

async function exc5met3displayNumber() {
    const exc5result = await exc5met3getNumber();

    console.log(exc5result);
}

exc5met3displayNumber();

/* 
================================================
Excersise 6 : Returning a value from one async function to another.
================================================
*/
async function exc6greet(name) {
    return `Hello, ${name}`;
}

async function exc6displayGreeting() {
    const exc6message = await exc6greet("Arun");

    console.log(exc6message);
}

exc6displayGreeting();

/* 
================================================
Excersise 7 : Error Handling with try, catch, and finally.
================================================
*/

async function exc7getTasks() {
    return ["Learn JS", "Learn React"];
}

async function exc7displayTasks() {
    try {
        const exc7tasks = await exc7getTasks();

        console.log(exc7tasks); // Output : [ 'Learn JS', 'Learn React' ]

        // To get the error message displayed, we are deliberately mis-spelling the function name.
        const exc7Tasks2 = await excgetTasks();

        console.log(exc7Tasks2); // Output : Error: excgetTasks is not defined

    } catch (error) {
        console.log("Error:", error.message);

    } finally {
        console.log("Operation completed"); // Output : Operation completed
    }
}

exc7displayTasks();

// // When a Promise rejects.
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

exc7met2displayTasks();

/*
================================================
Excersise 8 : Sequential vs Parallel.
================================================
*/

const exc8wait = (ms) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
};

async function exc8getUser() {
    await exc8wait(1000);
    return "Arun";
}

async function exc8getTasks() {
    await exc8wait(1500);
    return ["Learn JS", "Learn React"];
};

// // Sequential Execution.
// // ==========================================
async function exc8SecloadDashboard() {
    console.log("Loading...");

    const exc8SecUser = await exc8getUser();

    const exc8SecTasks = await exc8getTasks();

    console.log(exc8SecUser);
    console.log(exc8SecTasks);
}

exc8SecloadDashboard();

// // Parallel Execution.
// // ==========================================
async function exc8ParloadDashboard() {
    console.log("Loading...");

    const exc8ParuserPromise = exc8getUser();
    const exc8PartasksPromise = exc8getTasks();

    const exc8Paruser = await exc8ParuserPromise;
    const exc8Partasks = await exc8PartasksPromise;

    console.log(exc8Paruser);
    console.log(exc8Partasks);
}

exc8ParloadDashboard();

