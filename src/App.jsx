import { useState } from "react";
import ToDoList from "./ToDoList";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <ToDoList />
    </div>
  );
}

export default App;
