import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
export default function TodoList() {

  const todos = useSelector(state => state.todos)
  return (
    <div className="todoList-container">
      {todos.map((task) => (
        <Todo task={task} />
      ))}
    </div>
  );
}
