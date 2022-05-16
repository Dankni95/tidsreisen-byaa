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
                    id: 1,
                    anim_coords: [11.098553713584579, 59.8511182175682],
                    anim_bearing: 88.73162097340037,
                    anim_pitch: 60.99999999999989,
                    anim_zoom: 17.277071881434985,
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
                    id: 2,
                    anim_coords: [11.10152564299031, 59.85144498558557],
                    anim_bearing: -22.46837902656648,
                    anim_pitch: 64.19917497794867,
                    anim_zoom: 18.266063946591817,
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
                    id: 3,
                    anim_coords: [11.100411369314998, 59.852763196908256],
                    anim_bearing: -167.26837902659918,
                    anim_pitch: 84.99999999999997,
                    anim_zoom: 18.01659416137293,
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
                    id: 4,
                    anim_coords: [11.101993845880315, 59.85386037765656],
                    anim_bearing: -172.19121084094485,
                    anim_pitch: 678.0000000000001,
                    anim_zoom: 18.746185138382017,
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
                    id: 5,
                    anim_coords: [11.109901708040525, 59.854212581595476],
                    anim_bearing: -121.66837902659893,
                    anim_pitch: 74.5000000000001,
                    anim_zoom: 18.246190156906124,
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
                    id: 6,
                    anim_coords: [11.114175571945452, 59.854440416128995],
                    anim_bearing: -89.91658356552387,
                    anim_pitch: 76.49999999999996,
                    anim_zoom: 17.906392117015567,
                    title: "Sisite",
                    description: "Washington, D.C.",
                },
            },
        ],
    }

    return geojson

}
export default GeoJson;

