import React, { useContext, useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "../css/Maps.css";
import "mapbox-gl/dist/mapbox-gl.css";
import GeoJson from "../helpers/MapHelpers.js";
import AnimatedPopup from "mapbox-gl-animated-popup";
import Popup from "../components/Popup.jsx";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { User } from "../application.jsx";
import { postJSON } from "../helpers/http.jsx";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFua25pOTUiLCJhIjoiY2t3cmE0OXlsMGQ3bzMxbHNjMm82bDkzeCJ9.1XATyS82VYWyaSB5NQ3j9g";

export function MapPage() {
  const mapContainerRef = useRef(null);
  const [lng, setLng] = useState(11.109209421342229);
  const [lat, setLat] = useState(59.853678351187256);
  const [zoom, setZoom] = useState(15.869822538911004);
  const [map, setMap] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const [geo, setGeo] = useState(null);

  let navigate = useNavigate();

  const { user, setUser } = useContext(User);
  const { name, intro, walk } = user;

  async function handleWalkClick() {
    console.log(user);
    loaded
      ? !walk
        ? (geo.trigger(),
          await postJSON("/api/update-state", { user: name, walk: true }),
          setUser({ name: name, intro: intro, walk: true }),
          forceRepaintPopups(true))
        : (document.getElementsByClassName("mapboxgl-ctrl-icon")[0].click(),
          map.flyTo({
            // These options control the ending camera position: centered at
            // the target, at zoom level 9, and north up.
            center: [lng, lat],
            zoom: zoom,
            bearing: -136.86837902659892,

            // this animation is considered essential with respect to prefers-reduced-motion
            essential: true,
          }),
          setUser({ name: name, intro: intro, walk: false }),
          await postJSON("/api/update-state", { user: name, walk: false }),
          forceRepaintPopups(false))
      : "";
  }

  useEffect(() => {
    if (!walk) document.getElementById("nav-text-qr").style.display = "none";

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/dankni95/ckwrbx1et77jt14o2o3jtrbui",
      center: [lng, lat],
      pitch: 59.49999999999986, // pitch in degrees
      bearing: -136.86837902659892, // bearing in degrees
      zoom: zoom,
    });

    // Initialize the geolocate control.
    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    });

    map.addControl(geolocate);

    setGeo(geolocate);
    // Add navigation control (the +/- zoom buttons)
    // map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("move", () => {
      /*
      console.log("Bearing: " + map.getBearing());
      console.log("Zoom: " + map.getZoom());
      console.log("Pitch: " + map.getPitch());
      console.log("Pitch: " + map.getCenter());
      */
    });

    map.on("load", () => {
      setLoaded(true);
      setTimeout(() => {
        setDisabled(false);
      }, 4000);
      map.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: [
              [11.099034, 59.851039],
              [11.101616, 59.851307],
              [11.100541, 59.8528],
              [11.10087238, 59.85371299],
              [11.102064, 59.853905],
              [11.107697, 59.854386],
              [11.110563, 59.854391],
              [11.114554, 59.85441],
            ],
          },
        },
      });
      map.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "blue",
          "line-width": 8,
        },
      });
    });

    geolocate.on("geolocate", () => {
      document.getElementById("nav-text-qr").style.display = "";
    });

    geolocate.on("trackuserlocationend", () => {
      document.getElementById("nav-text-qr").style.display = "none";
    });

    setMap(map);
    return () => map.remove();
  }, []);

  function anim(target) {
    map.flyTo({
      // These options control the ending camera position: centered at
      // the target, at zoom level 9, and north up.
      center: target.anim_coords,
      zoom: target.anim_zoom,
      bearing: target.anim_bearing,

      // These options control the flight curve, making it move
      // slowly and zoom out almost completely before starting
      // to pan.
      speed: 0.5, // make the flying slow
      curve: 1, // change the speed at which it zooms out

      // This can be any easing function: it takes a number between
      // 0 and 1 and returns another number between 0 and 1.
      easing: (t) => t,

      // this animation is considered essential with respect to prefers-reduced-motion
      essential: true,
    });
  }

  function forceRepaintPopups(repaint) {
    // delete all markers
    const markerDiv = document.getElementById("popups");
    markerDiv ? (markerDiv.remove(), console.log("removed")) : "";

    // repopulate
    const popupDiv = document.getElementById("mapboxgl-popup-content");
    popupDiv ? popupDiv.remove() : "";
    // add markers to map
    for (const feature of GeoJson().features) {
      // create a HTML element for each feature
      const el = document.createElement("div");
      el.className = "marker";
      el.id = "popups";
      el.addEventListener("click", () => anim(feature.properties), false);

      let popup = new AnimatedPopup({
        offset: 25,
        openingAnimation: {
          duration: 200,
          easing: "linear",
          transform: "scale",
        },
        closingAnimation: {
          duration: 200,
          easing: "easeInBack",
          transform: "scale",
        },
      });

      // make a marker for each feature and add it to the map
      let display;
      repaint ? (display = "none") : (display = "inline-block");

      const marker = new mapboxgl.Marker(el)
        .setLngLat(feature.geometry.coordinates)
        .setPopup(
          popup // add popups
            .setHTML(
              `<div>
              <h3>${feature.properties.title}</h3>
              <div><img src="${feature.properties.image}" style="height: 200px; width: 200px;" alt="popup image"/></div>
              <br>
              <button id="to-capsule" class="capsule-btn" style="display:${display}"
               onclick="location.href='${feature.properties.url}'" type="button">Til kapsel</button>
              </div>`
            )
        )
        .addTo(map);
    }
  }

  useEffect(() => {
    loaded
      ? walk
        ? (geo.trigger(), forceRepaintPopups(true))
        : (setDisabled(false), forceRepaintPopups(false))
      : "";
  }, [loaded]);

  return (
    <>
      {
        <div>
          <div className="map-container" ref={mapContainerRef} />
          <Form id="custom-switch">
            <Form.Check
              defaultChecked={walk}
              disabled={disabled}
              type="switch"
              label={walk ? "På turstien" : "På skolen"}
              onClick={() => {
                setDisabled(true);
                handleWalkClick().then((r) =>
                  setTimeout(() => {
                    setDisabled(false);
                  }, 4000)
                );
              }}
            />
          </Form>
          {intro ? <Popup key={name} username={name} intro={intro} /> : ""}
        </div>
      }
    </>
  );
}
