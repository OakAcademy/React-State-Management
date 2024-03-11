import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
const Todo = () => {
  return (
    <div className="app">
      <h1>Todo Example</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default Todo;
