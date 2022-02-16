import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { AppWithRouter } from "./app-with-router";
import "./index.css";

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
