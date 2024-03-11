import React from "react";
import Counter from "./features/counter/Counter";
import AddTodo from "./features/todo/AddTodo";
import TodoList from "./features/todo/TodoList";
import Posts from "./features/posts/Posts";

const App = () => {
  return (
    <div>
      <Counter />
      <hr />
      <div className="todoWrapper">
        <AddTodo />
        <TodoList />
        <Posts />
      </div>
    </div>
  );
};

export default App;
