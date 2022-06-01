import React from "react";

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
          anim_coords: [11.098702973978902, 59.8507382930932],
          anim_bearing: 48.61187117432837,
          anim_pitch: 64.92350884432173,
          anim_zoom: 17.103487802610875,
          title: "Vesledammen, lydkapsel",
          url: "/audio/vesledammen",
          image: "",
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
          anim_coords: [11.101387317873332, 59.851518394786524],
          anim_bearing: 9.636879514723432,
          anim_pitch: 61.010279154422896,
          anim_zoom: 16.929861666765753,
          title: "Kvernhus, historiekapsel",
          url: "/history/kvernhus",
          image: "",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [11.100541, 59.8528],
        },
        properties: {
          id: 3,
          anim_coords: [11.103211437406003, 59.853419234186646],
          anim_bearing: 75.88975953652334,
          anim_pitch: 62.99999999999999,
          anim_zoom: 15.669844196015042,
          title: "Kvernhus, quizkapsel",
          url: "/quiz/kvernhus",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [11.10087238, 59.85371299],
        },
        properties: {
          id: 4,
          anim_coords: [11.10104521138237, 59.8535153775193],
          anim_bearing: 19.430682367115196,
          anim_pitch: 57.388262687131885,
          anim_zoom: 17.274696427680226,
          title: "Vegfar, lydkapsel",
          url: "/audio/vegfar",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [11.102064, 59.853905],
        },
        properties: {
          id: 5,
          anim_coords: [11.102607250590609, 59.85425132545012],
          anim_bearing: 107.00878915905628,
          anim_pitch: 55.499999999999886,
          anim_zoom: 15.562401285283801,
          title: "Sagtuft, historiekapsel",
          url: "/history/sagtuft",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [11.10772289, 59.85438232],
        },
        properties: {
          id: 6,
          anim_coords: [11.108629672508187, 59.854432565370274],
          anim_bearing: 116.73162097340128,
          anim_pitch: 55.500000000000114,
          anim_zoom: 16.069917476618837,
          title: "Sagbruk, quizkapsel",
          url: "/quiz/sagtuft",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [11.11190333, 59.85439546],
        },
        properties: {
          id: 7,
          anim_coords: [11.112599067786391, 59.85434903897587],
          anim_bearing: 116.80913303728971,
          anim_pitch: 36.999999999999964,
          anim_zoom: 16.575027578261583,
          title: "Hulvei, lydkapsel",
          url: "/audio/vannsag",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [11.114554, 59.85441],
        },
        properties: {
          id: 8,
          anim_coords: [11.115161247312585, 59.854002695525566],
          anim_bearing: 148.74383310113717,
          anim_pitch: 66.37370343899913,
          anim_zoom: 16.48887756215476,
          title: "Sagbruk, historiekapsel",

          url: "/history/sagbruk",
          // TODO Daniel: legge til 9 som er Hulvei Quizkapsel
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [11.11492068, 59.85452141],
        },
        properties: {
          id: 9,
          anim_coords: [11.113652736346012, 59.85271487234067],
          anim_bearing: -83.49755226625172,
          anim_pitch: 50.730842164066615,
          anim_zoom: 14.961133136131712,
          title: "Hulvei, quizkapsel",
          url: "/quiz/hulvei",
        },
      },
    ],
  };

  return geojson;
};
export default GeoJson;
