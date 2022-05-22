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
import { Button, Container, Row, Col } from "react-bootstrap";
import AnimatedPopup from "mapbox-gl-animated-popup";
import { useNavigate } from "react-router-dom";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFua25pOTUiLCJhIjoiY2t3cmE0OXlsMGQ3bzMxbHNjMm82bDkzeCJ9.1XATyS82VYWyaSB5NQ3j9g";

export function Map({username, loading, error}) {
  const mapContainerRef = useRef(null);
  const [lng, setLng] = useState(11.109209421342229);
  const [lat, setLat] = useState(59.853678351187256);
  const [zoom, setZoom] = useState(15.869822538911004);
  const [map, setMap] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState(false);
  const [intro, setIntro] = useState(true);




  const [geo, setGeo] = useState(null);

  const [dbWalk, dbSetWalk] = useState(true);
  const [walk, setWalk] = useState(dbWalk);

  let navigate = useNavigate();

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
  function handleWalkClick() {
    loaded
      ? walk
        ? (geo.trigger(), setWalk(false))
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
          setWalk(true))
      : "";
  }

  useEffect(() => {
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
              <button class="capsule-btn" onclick="location.href='${feature.properties.url}'" type="button">Til kapsel</button>
              </div>`
            )
        )
        .addTo(map);
    }

    map.on("load", () => {
      setLoaded(true);
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
      document.getElementById("stien").innerText = "På stien";
      document.getElementById("scan-btn").style.display = "block";
    });

    geolocate.on("trackuserlocationend", () => {
      document.getElementById("stien").innerText = "På skolen";
      document.getElementById("scan-btn").style.display = "none";
    });

    setMap(map);
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    loaded
      ? (document.getElementById("stien").style.backgroundColor = "blue")
      : (document.getElementById("stien").style.backgroundColor = "grey");
  }, [loaded, walk]);

  useEffect(() => {
    loaded ? (walk ? (geo.trigger(), setWalk(false)) : "") : "";
  }, [loaded]);

  function handleClick() {
    navigate("/camera");
  }
  useEffect(() => {
    username ? (
      setUser(username[0].name),
      setWalk(username[0].walk),
        setIntro(username[0].intro)
    ) : ""
  }, [username]);


  return (
    <>
      {
        <div>
          <div className="map-container" ref={mapContainerRef} />

          <Container id="container">
            <Row md={8}>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col xs={4}>
                <Button
                  size="g"
                  id="stien"
                  variant="primary"
                  onClick={() => {
                    handleWalkClick();
                  }}
                >
                  På skolen
                </Button>
              </Col>
              <Col xs={4}>
                <Button
                  size="g"
                  id="scan-btn"
                  variant="primary"
                  onClick={() => handleClick()}
                >
                  Scan QR
                </Button>
              </Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
            </Row>
          </Container>
          {intro ? <Popup username={user} loading={loading} error={error} /> : ""}
        </div>
      }
    </>
  );
}
