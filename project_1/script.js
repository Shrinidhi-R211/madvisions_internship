const fetchBtn = document.querySelector("#fetchBtn");
const status = document.getElementById("status");
const taskContainer = document.getElementById("taskContainer");
const finalMessage = document.getElementById("finalMessage");

// DOM elements for the buttons to seperate the tasks according to their category.
const filterDiv = document.getElementById("filters");

const allBtn = document.getElementById("allBtn");

const finishedBtn = document.getElementById("finishedBtn");

const pendingBtn = document.getElementById("pendingBtn");

// Store the API data in a seperate array to make use to separate tasks in the categories.
let allTasks = [];

// Disable all the other buttons except for fetch Tasks to prevent confusion.
allBtn.disabled = true;
finishedBtn.disabled = true;
pendingBtn.disabled = true;

// fetchTasks function. 
async function fetchTasks() {

    status.textContent = "Fetching tasks...";
    fetchBtn.disabled = true;

    try {

        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });

    const response = await fetch("https://jsonplaceholder.typicode.com/todos?userId=1");

     if(response.ok === false){
        throw new Error("Failed to fetch Tasks...")
    }

    const data = await response.json();
    allTasks = data;
    console.log(allTasks);
    status.textContent = `${allTasks.length} Tasks fetched successfully!...`;

    // Enable all the other buttons after successfully fetching the data thriugh API.
    allBtn.disabled = false;
    finishedBtn.disabled = false;
    pendingBtn.disabled = false;
}

catch (error) {
        // Display a failure message.    
        status.textContent = "Failed to Load the tasks... Please try again Later.";

        // Print the actual error in the console.
        console.log("Error : ", error);
}
finally{
        // Print a message for the confirmation of the process execution.
        finalMessage.textContent = "The fetching process was triggered."
        fetchBtn.disabled = false;
}
}

/* Functionality for the button All Tasks.*/

function displayTasks(tasksToShow) {
    // Empty the task Container at beginning to make sure there is no double entries for mis clicks.
    taskContainer.textContent = "";

    // Loop through the new allTasks array now, since we have copied the response data into that array, we are passing the allTasks array are an argument to the function displayTasks(tasksToShow).
    tasksToShow.forEach((task) => {
         // Create a New div to accept each tasks during each iteration.
        const taskCard = document.createElement("div");

        taskCard.classList.add("task-card");

        // Step 1 : Create a paragraph element.
        const taskElement = document.createElement("p");

        // Step 2 : Assign task.title to its textContent.
        taskElement.textContent = task.title;

        // Step 2.1 : Create the status element, to display the status of the task.
        const statusElement = document.createElement("span");

        // Step 2.2 : Check whether task.completed is true or false.
        if(task.completed === true){
            statusElement.textContent = "Task Completed...";
        }
        else{
            statusElement.textContent = "Task Pending...";
        };

        // Step 3.1 : Append the paragraph elemnt to task card.
        taskCard.appendChild(taskElement);

        // Step 3.2 : Append the status Element .
        taskCard.appendChild(statusElement);


        // Step 4: Append it to taskContainer.
        taskContainer.appendChild(taskCard);

    });
    // step 5 : Display a success message.
        status.textContent = `Displaying ${tasksToShow.length} of ${allTasks.length} tasks.`
}

/* To filter the finished tasks. */
function finishedTasks(){
    // Step 1 : Use allTasks.filter() to get completed tasks.
    let completdTasks = allTasks.filter((task) => {
        if(task.completed === true){
            return task;
        }
    });
    return completdTasks;
};


/* To filter the unfinished tasks. */
function pendingTasks(){
    // Step 1 : Use allTasks.filter() to get completed tasks.
    let pendingTasks = allTasks.filter((task) => {
        if(task.completed === false){
            return task;
        }
    })
    return pendingTasks;
}

fetchBtn.addEventListener("click", fetchTasks);
allBtn.addEventListener("click", () => {
    displayTasks(allTasks)
}
);
finishedBtn.addEventListener("click", () =>{
    displayTasks(finishedTasks());
});
pendingBtn.addEventListener("click", () => {
    displayTasks(pendingTasks());
});