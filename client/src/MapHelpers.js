function addTask (event) {
}

const GeoJson = () => {



 const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [11.0643, 59.9263],
        },
        properties: {
          title: "Mapbox",
          description: "Washington, D.C.",
        },
      },
    ],
  }

  return geojson
    
    }
export default GeoJson;

