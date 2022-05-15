const GeoJson = () => {

    const geojson = {
        type: "FeatureCollection",
        features: [
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [11.099034, 59.851039],
                },
                properties: {
                    title: "Start",
                    description: "Start",
                },
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [11.101616, 59.851307],
                },
                properties: {
                    title: "Dam?",
                    description: "Dammen joo",
                },
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [11.100541, 59.852800],
                },
                properties: {
                    title: "2 gamle vegger",
                    description: "Hei hei hei",
                },
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [11.102064, 59.853905],
                },
                properties: {
                    title: "I skogen",
                    description: "Washington, D.C.",
                },
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [11.110563, 59.854391],
                },
                properties: {
                    title: "Another one",
                    description: "SOS",
                },
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [11.114554, 59.854410],
                },
                properties: {
                    title: "Sisite",
                    description: "Washington, D.C.",
                },
            },
        ],
    }

    return geojson

}
export default GeoJson;

