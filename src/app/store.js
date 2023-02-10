import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/Posts/postSlice";
export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});
