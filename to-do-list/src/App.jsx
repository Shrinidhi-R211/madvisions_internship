import "../src/App.css";
import TodoItem from "./components/TodoItem"
import TodoInput from "./components/TodoInput";
import { useState } from "react";

function App() {

  const [todos, setTodos] = useState([]);

  function addTodo1(taskInput) {
    setTodos([...todos, taskInput]);
  }
return (
  <div className="todo-Container">
    <h1>To Do list</h1>
    <TodoInput addTodo={addTodo1} />
    {
    todos.map((todo) => (
      <p>{todo}</p>
    ))
    }
    <br />
    <TodoItem tasks = "Learn jsx."/>
  </div>
);
}

export default App;