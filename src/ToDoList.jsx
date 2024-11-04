import { useEffect, useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";
function ToDoList() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(newTask) {
    if (newTask.trim() !== "") {
      setTasks((el) => [...el, newTask]);
    }
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((el, ind) => ind !== index);
    setTasks(updatedTasks);
  }

  function moveTask(index, direction) {
    const newIndex = index + direction;
    if (newIndex >= 0 && newIndex < tasks.length) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[newIndex]] = [
        updatedTasks[newIndex],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function moveTaskUp(index) {
    moveTask(index, -1);
  }
  function moveTaskDown(index) {
    moveTask(index, 1);
  }
  return (
    <div className="to-do-list">
      <ToDoForm addTask={addTask} />
      <div className="task-header">
        <span className="task-header-title">Tasks</span>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <ToDoItem
            key={index}
            task={task}
            index={index}
            deleteTask={deleteTask}
            moveTaskUp={moveTaskUp}
            moveTaskDown={moveTaskDown}
          />
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
