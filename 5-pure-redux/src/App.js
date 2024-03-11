import React from "react";
import Counter from "./component/counter/Counter";
import { Provider } from "react-redux";
import { store } from "./redux";
import Todo from "./component/todo/Todo";

const App = () => {
  return (
    <div className="container">
      <Provider store={store}>
        <Counter />
        <Todo />
      </Provider>
    </div>
  );
};

export default App;
