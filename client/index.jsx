import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Application } from "./src/application.jsx";
import "bootstrap/dist/css/bootstrap.min.css";


const sw = "service-worker.js"; // it is needed because parcel will not recognize this as a file and not precess in its manner

navigator.serviceWorker
    .register(sw)
    .then(registration => {
        registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            if (installingWorker == null) {
                return;
            }
            installingWorker.onstatechange = () => {
                if (installingWorker.state === "installed") {
                    if (navigator.serviceWorker.controller) {
                        console.log(
                            "New content is available and will be used when all " +
                            "tabs for this page are closed. See https://bit.ly/CRA-PWA."
                        );
                    } else {
                        console.log("Content is cached for offline use.");
                    }
                }
            };
        };
    })
    .catch(error => {
        console.error("Error during service worker registration:", error);
    });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Application />
    </React.StrictMode>
);
