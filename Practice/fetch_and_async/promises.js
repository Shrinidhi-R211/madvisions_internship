
/*
=================================================
          JAVASCRIPT PROMISES — NOTES
=================================================

ROADMAP

1. Synchronous vs Asynchronous JavaScript
2. What is a Promise? Its Three States
3. Creating Promises: resolve() and reject()
4. Handling: then(), catch(), finally()
5. Promise Chaining and return
   - filter() + forEach() + push()
   - filter() + map()
6. Promise.all()
7. Promise.allSettled()
8. Promise.race()
9. Promise.any()

NEXT TOPIC: async/await (NOT INCLUDED)

All examples are executable using Node.js.
*/

// Helper to separate topics in the terminal.
function topic(number, title) {
    console.log(`\n===== ${number}: ${title} =====`);
}


// =================================================
// TOPIC 1 — SYNCHRONOUS VS ASYNCHRONOUS
// =================================================

/*
Definition:
Synchronous code runs in sequence.
Asynchronous operations can finish later, allowing
JavaScript to continue executing other statements.

CORRECT OUTPUT: A, C, B

COMMON MISTAKE:
Assuming setTimeout() blocks JavaScript and
produces A, B, C.
*/

function topic1() {
    topic(1, "Synchronous vs Asynchronous");

    console.log("A");

    const timer = new Promise(resolve => {
        setTimeout(() => {
            console.log("B");
            resolve();
        }, 100);
    });

    console.log("C");

    return timer;
}


// =================================================
// TOPIC 2 — WHAT IS A PROMISE?
// =================================================

/*
Definition:
A Promise is an object representing an eventual successful result or failure.

Three states:
1. pending   - Waiting
2. fulfilled - Successfully completed
3. rejected  - Failed

NOTE:
new Promise() executes its executor immediately.
But .then() callbacks execute asynchronously.

COMMON MISTAKE:
Thinking a Promise is directly its result.
*/

function topic2() {
    topic(2, "Promise States");

    const promise = new Promise(resolve => {
        console.log("Executor running");
        resolve("Completed!");
    });

    console.log("Synchronous statement");

    return promise.then(result => {
        console.log(result);
    });

    /*
    OUTPUT:
    Executor running
    Synchronous statement
    Completed!
    */
}


// =================================================
// TOPIC 3 — resolve() AND reject()
// =================================================

/*
Definition:
resolve(value) - Fulfill a Promise.
reject(reason) - Reject a Promise.

NOTE:
JavaScript automatically supplies these functions.

A Promise settles only once.

CORRECT:
Handle both successful and failed outcomes.

COMMON MISTAKE:
Assuming reject() can change a Promise that has
already been fulfilled.
*/

function topic3() {
    topic(3, "Creating Promises");

    const success = new Promise((resolve, reject) => {
        const serverWorking = true;

        if (serverWorking) {
            resolve("Tasks loaded!");
        } else {
            reject(new Error("Server failed!"));
        }
    });

    const failure = new Promise((resolve, reject) => {
        reject(new Error("Network unavailable"));
    });

    return Promise.all([
        success
            .then(result => console.log(result))
            .catch(error => console.log(error.message)),

        failure
            .catch(error => console.log(error.message))
    ]);

    /*
    OUTPUT:
    Tasks loaded!
    Network unavailable
    */
}


// =================================================
// TOPIC 4 — then(), catch(), finally()
// =================================================

/*
.then()    - Handles fulfilled results.
.catch()   - Handles rejection or earlier errors.
.finally() - Runs when the chain settles.

NOTE:
finally() receives no result parameter.

CORRECT:
Even immediately fulfilled Promise callbacks run
after the current synchronous code.

COMMON MISTAKE:
Predicting A, B, C, D for the example below.

ACTUAL OUTPUT: A, D, B, C
*/

function topic4() {
    topic(4, "Promise Handlers");

    console.log("A");

    const promise = Promise.resolve("B");

    const chain = promise
        .then(result => console.log(result))
        .catch(error => console.log(error))
        .finally(() => console.log("C"));

    console.log("D");

    return chain;
}


// =================================================
// TOPIC 5 — PROMISE CHAINING
// =================================================

/*
Definition:
Every .then() returns a new Promise.

A value returned from one .then() can be received
by the next .then().

CORRECT VERSION:
*/

function correctChaining() {
    return Promise.resolve(10)
        .then(num => {
            return num * 2;
        })
        .then(num => {
            return num + 5;
        })
        .then(result => {
            console.log("Correct result:", result);
        });

    // OUTPUT: Correct result: 25
}

/*
COMMON MISTAKE:
Using curly braces without return.

NOTE:
No return means the callback returns undefined.

undefined * 2 = NaN.
*/

function incorrectChaining() {
    return Promise.resolve(10)
        .then(num => {
            num + 5; // Missing return!
        })
        .then(num => {
            return num * 2;
        })
        .then(result => {
            console.log("Missing return:", result);
        });

    // OUTPUT: Missing return: NaN
}

/*
IMPORTANT:
console.log(value) prints a value.
It DOES NOT return the value.

CORRECT for passing a value:
    console.log(value);
    return value;

COMMON MISTAKE:
    console.log(value);
    // No return: next .then() gets undefined.
*/


// =================================================
// YOUR EXERCISE 1 — filter() + forEach()
// =================================================

function exercise1() {
    const tasks = [
        { id: 1, title: "Learn JS", completed: true },
        { id: 2, title: "Learn React", completed: false },
        { id: 3, title: "Build To-Do App", completed: false }
    ];

    const fetchTasks = Promise.resolve(tasks);

    return fetchTasks
        .then(alltasks => {
            return alltasks.filter(elem => {
                return elem.completed === false;
            });
        })
        .then(unfinishedTitle => {
            const unfinishedTitleArr = [];

            unfinishedTitle.forEach(elem => {
                unfinishedTitleArr.push(elem.title);
            });

            console.log("forEach:", unfinishedTitleArr);

            return unfinishedTitleArr;
        })
        .catch(error => {
            console.log("Error:", error.message);
        });

    /*
    OUTPUT:
    ["Learn React", "Build To-Do App"]

    NOTE:
    forEach() does not create a new array itself.

    We manually created unfinishedTitleArr and
    inserted titles using push().

    Your original code was valid for printing.
    Here we also return the array for future use.
    */
}


// =================================================
// YOUR EXERCISE 2 — filter() + map()
// =================================================

function exercise2() {
    const newExample = [
        { id: 1, title: "Learn JS", completed: true },
        { id: 2, title: "Learn React", completed: false },
        { id: 3, title: "Build To-Do App", completed: false }
    ];

    const arrayObject = Promise.resolve(newExample);

    return arrayObject
        .then(arrayObjectFilter => {
            return arrayObjectFilter.filter(
                elem => elem.completed !== true
            );
        })
        .then(arrElem => {
            return arrElem.map(elem => {
                return elem.title;
            });
        })
        .then(elem => {
            console.log("map:", elem);
        })
        .catch(error => {
            console.log("Error:", error.message);
        });

    /*
    OUTPUT:
    ["Learn React", "Build To-Do App"]

    NOTE:
    map() creates a new array automatically.

    completed === false
    and completed !== true

    are equivalent when completed is a boolean.

    They differ if completed contains other values.
    */
}

function topic5() {
    topic(5, "Chaining and Your Exercises");

    return correctChaining()
        .then(incorrectChaining)
        .then(exercise1)
        .then(exercise2);
}


// =================================================
// TOPIC 6 — Promise.all()
// =================================================

/*
Definition:
Combines multiple Promise results.

CONDITIONS:
- All inputs fulfill -> array of values.
- Any input rejects -> combined Promise rejects.
- Results follow input order.

NOTE:
Promise.all() returns a Promise,
NOT an ordinary array directly.

COMMON MISTAKE:
Confusing console output with return values.
*/

function topic6() {
    topic(6, "Promise.all()");

    const p1 = Promise.resolve(5);
    const p2 = Promise.resolve(10);

    return Promise.all([p1, p2])
        .then(results => {
            console.log("Results:", results);

            console.log(
                "Total:",
                results[0] + results[1]
            );

            // Explicitly return the calculation.
            return results[0] + results[1];
        })
        .then(total => {
            console.log("Passed forward:", total);
        });

    /*
    OUTPUT:
    Results: [5, 10]
    Total: 15
    Passed forward: 15

    COMMON MISTAKE:
    Removing return from the first .then() makes
    the next .then() receive undefined.
    */
}


// =================================================
// TOPIC 7 — Promise.allSettled()
// =================================================

/*
Definition:
Waits for every Promise to settle.

FULFILLED RESULT:
{ status: "fulfilled", value: ... }

REJECTED RESULT:
{ status: "rejected", reason: ... }

NOTE:
Every result object has a status property.

COMMON MISTAKE:
Thinking status is undefined on rejection.
*/

function topic7() {
    topic(7, "Promise.allSettled()");

    const p1 = Promise.resolve("Profile");
    const p2 = Promise.reject("Tasks failed");
    const p3 = Promise.resolve("Notifications");

    return Promise.allSettled([p1, p2, p3])
        .then(results => {
            results.forEach(result => {
                if (result.status === "fulfilled") {
                    console.log("Success:", result.value);
                } else {
                    console.log("Failed:", result.reason);
                }
            });

            console.log(
                "Second status:",
                results[1].status
            );
        });

    /*
    OUTPUT:
    Success: Profile
    Failed: Tasks failed
    Success: Notifications
    Second status: rejected
    */
}


// =================================================
// TOPIC 8 — Promise.race()
// =================================================

/*
Definition:
Returns the result of the first Promise to SETTLE.

NOTE:
Settled means fulfilled OR rejected.

CORRECT:
The earliest successful or failed outcome wins.

COMMON MISTAKE:
Assuming race() only considers success.

NOTE:
Other operations are not automatically cancelled.
*/

function topic8() {
    topic(8, "Promise.race()");

    const slow = new Promise(resolve => {
        setTimeout(() => resolve("Slow"), 100);
    });

    const fast = new Promise(resolve => {
        setTimeout(() => resolve("Fast"), 20);
    });

    return Promise.race([slow, fast])
        .then(result => {
            console.log("Winner:", result);
        });

    // OUTPUT: Winner: Fast
}


// =================================================
// TOPIC 9 — Promise.any()
// =================================================

/*
Definition:
Returns the FIRST SUCCESSFUL Promise result.

Individual rejections are ignored while another
Promise may still fulfill.

If ALL reject:
Promise.any() rejects with AggregateError.

NOTE:
error.errors contains the rejection reasons.

COMMON MISTAKE:
Confusing Promise.any() with Promise.race().
*/

function topic9() {
    topic(9, "Promise.any()");

    const p1 = Promise.reject("Server A failed");
    const p2 = Promise.resolve("Server B success");
    const p3 = Promise.resolve("Server C success");

    return Promise.any([p1, p2, p3])
        .then(result => {
            console.log("Winner:", result);
        })
        .then(() => {
            return Promise.any([
                Promise.reject("Error A"),
                Promise.reject("Error B")
            ]);
        })
        .catch(error => {
            console.log("All failed:", error.name);
            console.log("Reasons:", error.errors);
        });

    /*
    OUTPUT:
    Winner: Server B success
    All failed: AggregateError
    Reasons: ["Error A", "Error B"]
    */
}


// =================================================
// FINAL REVISION
// =================================================

/*
Promise.all()
    -> All fulfill or combined rejection.

Promise.allSettled()
    -> Wait for every outcome.

Promise.race()
    -> First SETTLED wins.

Promise.any()
    -> First FULFILLED wins.


PERSONAL REVISION CHECKLIST

1. Promise callbacks run asynchronously.
2. Missing return produces undefined.
3. undefined multiplied by a number -> NaN.
4. console.log() is not the same as return.
5. Promise.all() returns a Promise.
6. Promise.all() preserves input order.
7. allSettled() always provides status.
8. race() considers success and rejection.
9. any() looks for the first success.
10. forEach() doesn't generate a result array.
11. map() generates a new array.
12. A settled Promise cannot change its state.
*/


// =================================================
// EXECUTE ALL TOPICS IN ORDER
// =================================================

Promise.resolve()
    .then(topic1)
    .then(topic2)
    .then(topic3)
    .then(topic4)
    .then(topic5)
    .then(topic6)
    .then(topic7)
    .then(topic8)
    .then(topic9)
    .then(() => {
        console.log("\nALL PROMISE TOPICS COMPLETE!");
    })
    .catch(error => {
        console.error("Unexpected error:", error);
    });
