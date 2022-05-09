import React, { useRef, useEffect, useState } from "react"
import mapboxgl from "mapbox-gl"
import "./Maps.css"
import GeoJson from "./MapHelpers"

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFua25pOTUiLCJhIjoiY2t3cmE0OXlsMGQ3bzMxbHNjMm82bDkzeCJ9.1XATyS82VYWyaSB5NQ3j9g"

const Map = () => {
  const mapContainerRef = useRef(null)
  const [lng, setLng] = useState(11.0653)
  const [lat, setLat] = useState(59.9263)
  const [zoom, setZoom] = useState(20)

  const [userCoords, setUserCoords] = useState(0)

 

  if (userCoords === 0) {
    navigator.geolocation.getCurrentPosition(function (position) {
      setUserCoords([position.coords.longitude, position.coords.latitude])
    })
  }

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/dankni95/ckwryw6wp4t1u16p3867udb73",
      center: [lng, lat],
      pitch: 50, // pitch in degrees
      bearing: 100, // bearing in degrees
      zoom: zoom,
    })

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right")

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4))
      setLat(map.getCenter().lat.toFixed(4))
      setZoom(map.getZoom().toFixed(2))
    })

    // add markers to map
    for (const feature of GeoJson().features) {
      // create a HTML element for each feature
      const el = document.createElement("div")
      el.className = "marker"

      // make a marker for each feature and add it to the map
      new mapboxgl.Marker(el)
        .setLngLat(feature.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
            )
        )
        .addTo(map)
    }

    console.log(userCoords)

    map.on("load", function () {
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          // When active the map will receive updates to the device's location as it changes.
          trackUserLocation: true,
          // Draw an arrow next to the location dot to indicate which direction the device is heading.
          showUserHeading: true,
        })
      )
      map.flyTo({
        center: userCoords,
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      })
    })

    map.on("load", () => {
      map.addSource("route", {
        type: "geojson",
        data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: [
            [11.0643, 59.9263],
            [-122.483482, 37.833174],
          ],
          },
        },
      })
      map.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "red",
          "line-width": 8,
        },
      })
    })

    return () => map.remove()
  }, [userCoords]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="sidebarStyle">
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
  )
}

export default Map
