import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import newsReducer from "../features/newsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
  },
});
export default store;
