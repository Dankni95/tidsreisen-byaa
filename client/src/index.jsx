import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Application } from "./application.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

let version = "v4" // increase for new version
let staticCacheName = version + "_pwa-static";
let dynamicCacheName = version + "_pwa-dynamic";



navigator.serviceWorker.register(
    new URL('service-worker.js', import.meta.url),
    {type: 'module'}
).then(r =>{
    console.log(r)
});


self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    if (!cacheName.startsWith(staticCacheName) &&
                        !cacheName.startsWith(dynamicCacheName)) {
                        return true;
                    }
                }).map(function(cacheName) {
                    console.log('Removing old cache.', cacheName);
                    return caches.delete(cacheName);
                })
            );
        })
    );
});


ReactDOM.render(
    <React.StrictMode>
        <Application />
    </React.StrictMode>,
    document.getElementById('root')
);
