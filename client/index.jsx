import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Application } from "./src/application.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById("root")
);
