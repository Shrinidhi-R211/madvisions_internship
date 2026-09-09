import "../src/App.css";

function App() {
return (
  <div className="todo-Container">
    <h1>To Do list</h1>
    <div className="input-Task">
        <input className="input-Task-Field" type="text" placeholder= "Enter a Task" />
        <button className="btn-Add">Add</button>
    </div>
    <h3>My tasks</h3>
  <div className="my-Tasks-Div">
    <div className="my-Tasks-Div2">
    <input type="checkbox" />
    <span>1st Task</span>
    </div>
    <button className="btn-Delete">Delete 🗑️</button>
  </div>
  </div>
);
}

export default App;