const taskForm = document.querySelector("#taskForm");
const taskName = document.querySelector("#taskName");
const category = document.querySelector("#category");
const deadline = document.querySelector("#deadline");
const isImportant = document.querySelector("#isImportant");
const message = document.querySelector("#message");

const tasks = [];

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // 1. Read and validate the task name
  const name = taskName.value.trim();

  if (name === "") {
    message.textContent = "Please enter a task name.";
    return;
  }

  // 2. Read the selected radio button
  const selectedPriority = taskForm.querySelector(
    'input[name="priority"]:checked'
  );

  const priority = selectedPriority
    ? selectedPriority.value
    : "low";

  // 3. Collect all values into one object
  const task = {
    name: name,
    priority: priority,
    category: category.value,
    deadline: deadline.value,
    isImportant: isImportant.checked
  };

  // 4. Store the task
  tasks.push(task);

  // 5. Display a confirmation
  message.textContent = "Added The tasks successfully."

    // clear the previous list.
    const taskList = document.getElementById("taskList");
    taskList.textContent = "";

    // 7. Display every task in the array.
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.textContent =     
      `Added: ${task.name} | ` +
      `Priority: ${task.priority} | ` +
      `Category: ${task.category} | ` +
      `Important: ${task.isImportant}`;

      taskList.appendChild(li);
    });

    // 8. Clear the Input.
    taskForm.reset();

    // 9. Printing the list of tasks.
    console.log(tasks);
});