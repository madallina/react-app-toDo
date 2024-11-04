function ToDoItem({ task, index, deleteTask, moveTaskUp, moveTaskDown }) {
  return (
    <div>
      <ul className="task-item">
        <span className="task-text">{task}</span>
        <div className="task-actions">
        <button type="button" className="btn btn-warning" onClick={() => moveTaskUp(index)}>
        <i className="bi bi-arrow-up"></i>
        </button>
        <button type="button" className="btn btn-warning" onClick={() => moveTaskDown(index)}>
        <i className="bi bi-arrow-down"></i>
        </button>
        <button type="button" className="btn btn-danger " onClick={() => deleteTask(index)}>Delete</button>

        </div>
      </ul>
    </div>
  );
}
export default ToDoItem;
