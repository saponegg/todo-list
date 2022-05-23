import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./style.css";

export default function App() {
  return (
    <div classsName="">
      <h1>To do list </h1>
      <TodoList/>
    </div>
  );
}
