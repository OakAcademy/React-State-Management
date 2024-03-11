import React from "react";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store from "./app/store";
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
};

export default App;
