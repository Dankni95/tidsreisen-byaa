import "mapbox-gl/dist/mapbox-gl.css";

import { mapContext, MapProvider } from "../contexts/mapContext";
import { Map } from "../components/Map";
import { useContext } from "react";

function MapPage() {
  return (
    <MapProvider>
      <Map />
    </MapProvider>
  );
}

export default MapPage;
