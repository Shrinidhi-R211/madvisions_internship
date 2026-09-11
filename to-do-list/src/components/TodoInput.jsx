import { useState } from "react";

function TodoInput ({addTodo}) {

    const [taskInput, setTaskInput] = useState("");

    return (
        <>
            <div className="input-Task">
                <input 
                    className="input-Task-Field" 
                    type="text"
                    value={taskInput} 
                    onChange={(e) => setTaskInput(e.target.value)}
                    placeholder= "Enter a Task" 
                 />
                <button 
                className="btn-Add"
                onClick={() => addTodo(taskInput)}>
                Add
                </button>
            </div>
            <p>task = {taskInput}</p>
        </>
    );
}

export default TodoInput;