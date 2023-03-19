import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./../Features/Counter/CounterSlice";
import postReducer from "../Features/post/PostSlice";
import userReducer from "./../Features/Users/userSlice";

export const Store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
  },
});
