import React, { useRef, useEffect, useState, useContext } from "react";
import mapboxgl from "mapbox-gl";
import "./Maps.css";
import "mapbox-gl/dist/mapbox-gl.css";
import GeoJson from "../helpers/MapHelpers";
import Camera from "./Camera";
import Button from "react-bootstrap/Button";
import AnimatedPopup from "mapbox-gl-animated-popup";
import Popup from "./Popup.jsx";
import { UserContext } from "../contexts/userContext.jsx";
import { useLoading } from "../helpers/useLoading.jsx";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFua25pOTUiLCJhIjoiY2t3cmE0OXlsMGQ3bzMxbHNjMm82bDkzeCJ9.1XATyS82VYWyaSB5NQ3j9g";

export function Map() {
  const { getUser } = useContext(UserContext);
  const { data: username, reload, loading, error } = useLoading(getUser);

  console.log(username);
  const mapContainerRef = useRef(null);
  const [lng, setLng] = useState(11.109209421342229);
  const [lat, setLat] = useState(59.853678351187256);
  const [zoom, setZoom] = useState(15.869822538911004);
  const [camera, setCamera] = useState(false);

  const [userCoords, setUserCoords] = useState(0);

  if (userCoords === 0) {
    navigator.geolocation.getCurrentPosition(function (position) {
      setUserCoords([position.coords.longitude, position.coords.latitude]);
    });
  }

  // Initialize map when component mounts

  // Styles:
  // mapbox://styles/dankni95/ckwrbx1et77jt14o2o3jtrbui - Material
  // mapbox://styles/dankni95/ckx99rrti122914qpusg9wm8j - Treasure
  // mapbox://styles/dankni95/ckwra5on906i515t7dtjqwujy - Outdoor

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/dankni95/ckwrbx1et77jt14o2o3jtrbui",
      center: [lng, lat],
      pitch: 59.49999999999986, // pitch in degrees
      bearing: -136.86837902659892, // bearing in degrees
      zoom: zoom,
    });

    // Add navigation control (the +/- zoom buttons)
    // map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
      /*
      console.log("Bearing: " + map.getBearing());
      console.log("Zoom: " + map.getZoom());
      console.log("Pitch: " + map.getPitch());
      console.log("Pitch: " + map.getCenter());
      */
    });

    function anim(target) {
      console.log(target);
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

    // add markers to map
    for (const feature of GeoJson().features) {
      // create a HTML element for each feature
      const el = document.createElement("div");
      el.className = "marker";
      el.id = feature.properties.id;
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
      new mapboxgl.Marker(el)
        .setLngLat(feature.geometry.coordinates)
        .setPopup(
          popup // add popups
            .setHTML(
              `<div>
              <h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>
              <button style="background-color: turquoise; border: none;" onclick="location.href='${feature.properties.url}'" type="button">Til kapsel</button>
              </div>`
            )
        )
        .addTo(map);
    }

    map.on("load", () => {
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

    return () => map.remove();
  }, [userCoords]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleClick() {
    setCamera(true);
  }

  return (
    <>
      {camera ? (
        <Camera />
      ) : (
        <div>
          <Button variant="primary" onClick={() => handleClick()}>
            Primary
          </Button>
          <div className="map-container" ref={mapContainerRef}>
            {/** her får vi tak i user.id etter hvert når vi får inn users i
             database og sjekker opp med funksjon som og en toggle i users database,
             boolean som blir true som brukere allerede har gått gjennom introen
             */}

            <Popup username={username} loading={loading} error={error} />
          </div>
        </div>
      )}
    </>
  );
}
