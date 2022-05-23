import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Application } from "./application.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

/*
navigator.serviceWorker.register(
    new URL('service-worker.js', import.meta.url),
    { type: 'module' }
).then(r => {
    console.log(r)
});

*/

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById("root")
);
