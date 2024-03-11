import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todoActions";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="addBtn">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
