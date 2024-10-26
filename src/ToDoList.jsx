
import { useState } from "react"
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";
function ToDoList(){
const [tasks , setTasks]= useState([]);

function addTask(newTask){
if(newTask.trim()!=="") {
    setTasks(el =>[...el,newTask]);
}
}
function deleteTask(index){
const updatedTasks = tasks.filter((el,ind)=> ind!==index);
setTasks(updatedTasks);
}
function moveTaskUp(){

}
function moveTaskDown(){

}
return (
<div className = "to-do-list">
<ToDoForm addTask={addTask} />
<ol>
    {tasks.map((task,index)=>(
<ToDoItem 
key={index}
task={task}
index={index}
deleteTask={deleteTask} />

    ))}
</ol>
</div>
)
}
export default ToDoList