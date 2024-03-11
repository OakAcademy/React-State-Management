import { ADD, CLEAR } from "../types/todoTypes";

export const addTodo = (payload) => {
  return {
    type: ADD,
    payload: payload,
  };
};
export const clearTodo = () => {
  return {
    type: CLEAR,
  };
};
