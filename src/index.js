import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Store } from "./app/store";
import { Provider } from "react-redux";
import { fetchUsers } from "./Features/Users/userSlice";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./Features/api/apiSlice";
Store.dispatch(fetchUsers());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApiProvider api={apiSlice}>
    <App />
  </ApiProvider>
);
