import { useState } from "react";
import "../styles/TodoItem.css"
import { FaSave, FaTrash, FaEdit } from "react-icons/fa";

function TodoItem({ task, onSaveStatus, deleteLogic, onEditTask }) {
// Stores the checkbox selection locally
const [isChecked, setIsChecked] = useState(task.completed);

function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
}

function handleSaveStatus() {
    onSaveStatus(task.id, isChecked);
}

return (
    <div className={`todo-item ${
        task.completed ? "completed-task" : "pending-task"
      }`}>

        <div className="todo-checkbox">
            <input
                type="checkbox" 
                checked={isChecked}
                onChange={handleCheckboxChange}
                aria-label={`Mark ${task.title} as ${isChecked ? "pending" : "completed" }`}
            />
        </ div>

        <p className="todo-title">{task.title}</p>

        <div className="todo-actions">
        <button
          className="todo-action-btn edit-btn"
          type="button"
          onClick={() => onEditTask?.(task)}
          aria-label={`Edit ${task.title}`}
          title = "Edit Task"
        >
          <FaEdit />
        </button>

         <button
          className="todo-action-btn delete-btn"
          type="button"
          onClick={() => deleteLogic(task)}
          aria-label={`Delete ${task.title}`}
          title="Delete task"
        >
          <FaTrash />
        </button>

        <button
          className="todo-action-btn save-btn"
          type="button"
          onClick={handleSaveStatus}
          aria-label={`Save status for ${task.title}`}
          title="Save status"
        >
          <FaSave />
        </button>

        </div>
    </div>
);
}

export default TodoItem;