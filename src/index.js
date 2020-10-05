import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoComponent from "./TodoComponent";

ReactDOM.render(
  <React.StrictMode>
    <TodoComponent />
  </React.StrictMode>,
  document.getElementById("root")
);
