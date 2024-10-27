function ToDoItem({ task, index, deleteTask, moveTaskUp, moveTaskDown }) {
  return (
    <div>
      <li>
        <span>{task}</span>
        <button type="button" className="btn btn-danger" onClick={() => deleteTask(index)}>Delete</button>
        <button type="button" className="btn btn-warning" onClick={() => moveTaskUp(index)}>☝</button>
        <button type="button" className="btn btn-warning" onClick={() => moveTaskDown(index)}>👇</button>
      </li>
    </div>
  );
}
export default ToDoItem;
