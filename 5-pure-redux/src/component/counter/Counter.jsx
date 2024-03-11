import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
} from "../../redux/actions/counterActions";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterReducer.counter);
  return (
    <div>
      <div>
        <p>Counter:{counter}</p>
      </div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
