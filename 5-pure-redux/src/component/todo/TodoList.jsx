import React from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { clearTodo } from "../../redux/actions/todoActions";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer.todos);
  const handleClearList = () => {
    dispatch(clearTodo());
  };
  return (
    <div>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clearWrapper">
        <button onClick={handleClearList}>Clear</button>
      </div>
    </div>
  );
};

export default TodoList;
