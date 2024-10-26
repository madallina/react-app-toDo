
function ToDoItem({task,index,deleteTask}){
return (
    <div>
        <li>
            <span>{task}</span>
            <button onClick={()=>deleteTask(index)}>Delete</button>
        </li>
    </div>
)
}
export default ToDoItem;