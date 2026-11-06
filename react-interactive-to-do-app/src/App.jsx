import { useState, useEffect } from 'react';
import "./App.css"
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import OverviewCard from './components/OverviewCard';
import DeleteConfirmModal from './components/DeleteConfirmModal';
import EditTaskModal from './components/EditTaskModal';
import Header from './components/Header';

function App(){
  const [theme, setTheme] = useState(() => {
  const savedTheme = localStorage.getItem("task-maintainer-theme");

  return savedTheme || "light";
});

useEffect(() => {
  localStorage.setItem("task-maintainer-theme", theme);
}, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      return (
        currentTheme === "light" ? "dark" : "light"
      );
    });
  };

  const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("task-maintainer-tasks");

  if (!savedTasks) {
    return [];
  }

  try {
    const parsedTasks = JSON.parse(savedTasks);

    return Array.isArray(parsedTasks) ? parsedTasks : [];
  } catch (error) {
    console.error("Unable to load saved tasks:", error);
    return [];
  }
  });

  useEffect(() => {
  localStorage.setItem(
    "task-maintainer-tasks",
    JSON.stringify(tasks)
  );
}, [tasks]);

  function addTask(taskTitle) {
    const newTask = {
      id : Date.now(),
      title : taskTitle,
      completed : false
    };
    setTasks((previousTasks) => [...previousTasks, newTask]);
  }

  function saveTaskStatus(taskId, newStatus) {
    setTasks((previousTask) => previousTask.map((task) => task.id === taskId ? {...task, completed : newStatus } : task ));
  };

  function deleteTask(taskId) {
    setTasks((previousTasks) => previousTasks.filter((task) => task.id !== taskId)
    )
  }
  const [taskToDelete, setTaskToDelete] = useState(null);

  function openDeleteModal(task) {
    setTaskToDelete(task);
  }

  function confirmDeleteTask() {
    if (!taskToDelete) {
      return;
    }
    deleteTask(taskToDelete.id);
    setTaskToDelete(null);
  }

  function cancelDeleteTask() {
    setTaskToDelete(null);
  }

  const [ taskToEdit, setTaskToEdit ] = useState(null);

  // Open the edit modal
function openEditModal(task) {
  setTaskToEdit(task);
}

// Save the edited task title
function saveEditedTask(taskId, updatedTitle) {
  setTasks((previousTasks) =>
    previousTasks.map((task) =>
      task.id === taskId
        ? { ...task, title: updatedTitle }
        : task
    )
  );

  setTaskToEdit(null);
}

// Cancel editing
function cancelEditTask() {
  setTaskToEdit(null);
}

  // Logic to filter the tasks according to the cards. 
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredTasks = tasks.filter((task) => {
  if (activeFilter === "completed") {
    return task.completed;
  }

  if (activeFilter === "pending") {
    return !task.completed;
  }

  return true;
});

  const totalTasksNumber = tasks.length;

  const completedTasksNumber = tasks.filter(
    task => task.completed
  ).length;

  const pendingTasksNumber = tasks.filter(
    task => !task.completed
  ).length;

  return (
    <div className='app-shell' data-theme = {theme}>
    
    <Header 
      theme = {theme}
      toggleTheme = {toggleTheme}
    />
    <main className="main-content">

        {/* Welcome Section */}
        <section className="welcome-section">
          <h1>Good day! 👋</h1>
          <p>Let's organize your tasks and get things done.</p>
        </section>

        {/* Task Overview */}
        <section className='task-overview'>
          <OverviewCard 
            title = "Total Tasks."
            count = {totalTasksNumber}
            type = "total-card"
            active={activeFilter === "all"}
            onClick={() => setActiveFilter("all")}
          />

          <OverviewCard 
            title = "Completed Tasks"
            count = {completedTasksNumber}
            type = "completed-card"
            active={activeFilter === "completed"}
            onClick={() => setActiveFilter("completed")}
          />

          <OverviewCard 
            title = "Pending Tasks"
            count = {pendingTasksNumber}
            type = "pending-card"
            active={activeFilter === "pending"}
            onClick={() => setActiveFilter("pending")}
          />
        </section>

        {/* Task Input Function (TodoForm.jsx) */}
        <section>
          <TodoForm onAddTask = {addTask} />
        </section>

        {/* Main Workspace */}
        <section className="workspace">
          <TodoList 
            tasks = {filteredTasks}
            onSaveStatus = {saveTaskStatus}
            deleteTask = {openDeleteModal}
            onEditTask={openEditModal}
            totalTasks={tasks.length}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            />
        </section>

          <DeleteConfirmModal
            task={taskToDelete}
            onCancel={cancelDeleteTask}
            onConfirm={confirmDeleteTask}
          />

          <EditTaskModal
            key = {taskToEdit ?.id ?? "no-task"}
            task={taskToEdit}
            onCancel={cancelEditTask}
            onSave={saveEditedTask}
          />
      </main>
    </div>
  )
}
export default App;
