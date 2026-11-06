import { useState } from "react";
import "../styles/TodoForm.css"

function TodoForm({ onAddTask }) {

    const [taskName, setTaskName] = useState("");

    function handleChange(event) {
        setTaskName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (taskName.trim() === "") {
            alert("Please enter a task name!");
            return;
        }

        onAddTask(taskName.trim());
        alert("Task submitted successfully!");
        setTaskName("");
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>

            <input
                className="todo-input"
                type="text"
                value={taskName}
                onChange={handleChange}
                placeholder="Enter a task"
            />

            <button
                className="todo-submit-btn"
                type="submit"
            >
                + Add Task
            </button>

        </form>
    );
}

export default TodoForm;