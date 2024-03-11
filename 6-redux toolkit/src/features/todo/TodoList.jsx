import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "./todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  return (
    <div>
      {todos.map((todo) => {
        return (
          <li className="todoList" key={todo.id}>
            <span> {todo.text} </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default TodoList;
