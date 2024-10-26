import { useState } from "react";

function ToDoForm({addTask}){
const [newTask, setNewTask]=useState("");

function handleInputChange(event){
    setNewTask(event.target.value);
}
function handleSubmit(){
    addTask(newTask);
    setNewTask("");
}
return(
    <div>
        <input 
        type="text"
        placeholder="Enter your task here"
        value={newTask}
        onChange={handleInputChange}
        />
        <button onClick = {handleSubmit}>
            Add
        </button>
    </div>
);
}
export default ToDoForm;