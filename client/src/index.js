import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Application } from "./application";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Application />
  </React.StrictMode>
);



serviceWorkerRegistration.register();

