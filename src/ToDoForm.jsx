import { useState } from "react";

function ToDoForm({ addTask }) {
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function handleSubmit() {
    addTask(newTask);
    setNewTask("");
  }
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter your task here"
        value={newTask}
        onChange={handleInputChange}
        className="form-control"
      />
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add</button>
    </div>
  );
}
export default ToDoForm;
