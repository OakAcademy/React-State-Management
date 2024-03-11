import { DECREMENT, INCREMENT, RESET } from "../types/counterTypes";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    case DECREMENT:
      return { counter: state.counter - 1 };
    case RESET:
      return initialState;

    default:
      return state;
  }
};
export default counterReducer;
