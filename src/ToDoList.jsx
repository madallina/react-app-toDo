
import { useState } from "react"
import ToDoForm from "./ToDoForm";
function ToDoList(){
const [tasks , setTasks]= useState([]);

function addTask(newTask){
if(newTask.trim()!=="") {
    setTasks(el =>[...el,newTask]);
}
}
function deleteTask(){

}
function moveTaskUp(){

}
function moveTaskDown(){

}
return (
<div className = "to-do-list">
<ToDoForm addTask={addTask} />
</div>
)
}
export default ToDoList