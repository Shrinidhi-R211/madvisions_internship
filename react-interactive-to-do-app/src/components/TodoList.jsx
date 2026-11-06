import TodoItem from "./TodoItem";
import "../styles/TodoList.css"

function TodoList({tasks, onSaveStatus, deleteTask, onEditTask, totalTasks, activeFilter, onFilterChange,}) {

    const filterOptions = [
    { label: "All", value: "all" },
    { label: "Completed", value: "completed" },
    { label: "Pending", value: "pending" }
  ];

    return (
        <div className="todo-list-container">
            <h2 className="todo-list-heading">My Tasks</h2>
            <div className="todo-list-container-para">
                <p>Task completed? </ p>
                <p>Check the check box if completed. {" "} And save the update using save button.</ p>
            </div>
        
            {/* Task filters */}
      {totalTasks > 0 && (
        <div className="todo-filter-container">
          <div className="todo-filter-heading">
            Filter Tasks
          </div>

          <div className="todo-filter-buttons">
            {filterOptions.map((filter) => (
              <button
                key={filter.value}
                type="button"
                className={`todo-filter-btn ${
                  activeFilter === filter.value ? "active" : ""
                }`}
                onClick={() => onFilterChange(filter.value)}
                aria-pressed={activeFilter === filter.value}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      )}

        {/* Task list */}
            {totalTasks === 0 ? (
              <p className="empty-task-message">
                No tasks yet. Add your first task!
              </p>
            ) : tasks.length === 0 ? (
              <p className="empty-task-message">
                {activeFilter === "completed"
                  ? "No completed tasks yet."
                  : "No pending tasks. Great work!"}
              </p>
            ) : (
                <>
                <div className = "todo-list-labels">
                    <span>Tasks.</span>
                    <span>Actions</span>
                </div>
               
                 <div className="todo-list">
                    {tasks.map((task) => (
                        <TodoItem
                            key={task.id}
                            task={task}
                            onSaveStatus = {onSaveStatus}
                            deleteLogic = {deleteTask}
                            onEditTask = {onEditTask}
                        />
                    ))} 
                </ div>
                </>
                )}
            </div>
            )
            }

export default TodoList;