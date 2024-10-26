
function ToDoItem({task,index,deleteTask, moveTaskUp,moveTaskDown}){
return (
    <div>
        <li>
            <span>{task}</span>
            <button onClick={()=>deleteTask(index)}>Delete</button>
            <button onClick={()=>moveTaskUp(index)}>☝</button>
            <button onClick={()=>moveTaskDown(index)}>👇</button>
        </li>
    </div>
)
}
export default ToDoItem;