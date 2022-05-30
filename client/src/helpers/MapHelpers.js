import React from "react";
import kvernhus from "../assets/images/mapbox-images/12322-Kvernhus-molle-historie.jpg";

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
          anim_coords: [11.10152564299031, 59.85144498558557],
          anim_bearing: -22.46837902656648,
          anim_pitch: 64.19917497794867,
          anim_zoom: 18.266063946591817,
          title: "Vesledammen",
          description:
            "Langs sidene på Byåa er det murt opp stein på begge sider, på sørsiden er den 1,4 meter lang, mer utydelig på nordsiden, men det ligger en stor steinblokk på 50 x 50 cm på kanten. Det er også stein på kantene som ser ut som fundament til en liten bygning, mest på sørsiden.",
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
          id: 1,
          anim_coords: [11.10152564299031, 59.85144498558557],
          anim_bearing: -22.46837902656648,
          anim_pitch: 64.19917497794867,
          anim_zoom: 18.266063946591817,
          title: "Mølle/kvernhus",
          description:
            "Langs sidene på Byåa er det murt opp stein på begge sider, på sørsiden er den 1,4 meter lang, mer utydelig på nordsiden, men det ligger en stor steinblokk på 50 x 50 cm på kanten. Det er også stein på kantene som ser ut som fundament til en liten bygning, mest på sørsiden.",
          url: "/history/kvernhus",
          image: kvernhus,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [11.100541, 59.8528],
        },
        properties: {
          id: 2,
          anim_coords: [11.100411369314998, 59.852763196908256],
          anim_bearing: -167.26837902659918,
          anim_pitch: 84.99999999999997,
          anim_zoom: 18.01659416137293,
          title: "Mur og stokker",
          description:
            "Lokaliteten ligger ved Byåa, vest for Nedre Rælingsvei. Sporene etter vannsagen eller eventuelt et kvernhus som har stått i nærheten er i dag borte, sannsynlig på grunn av anleggelse av veier som Ulleråsen og Nedre Rælingsvei.",
          url: "/quiz/kvernstein",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [11.10087238, 59.85371299],
        },
        properties: {
          id: 3,
          anim_coords: [11.101993845880315, 59.85386037765656],
          anim_bearing: -172.19121084094485,
          anim_pitch: 678.0000000000001,
          anim_zoom: 18.746185138382017,
          title: "Veganlegg",
          description:
            "En tydelig hulveg som ligger i en skråning ned mot Byåa, retning på hulveien er NV-SØ. Målene på hulvegen er 1,30 meter i bunn og 4 meter bred i toppen. Dybden på vegen er 1,15 meter. Ligger i åpent gressbevokst terreng med utsikt mot Øyeren i øst.",
          url: "/audio/veganlegg",
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
          title: "Sagbruk",
          description:
            "2 murer etter vannsag. I hovedsak er de bygget av stor bruddstein. Murene er uten bevoksning. L 15m, h 2-3m, tykkelse 1,25m. Ca 100m S for kryss Byåa og hovedveien: Rester av mølle? Sees i form av trekonstruksjoner, hvorav det meste er rasert. Ca 10 m S for og ovenfor trekonstruksjonen og på V-bredden: Tørrmur, l 20m. 5m ovenfor dennes slutt finnes en sementert demning, parallelt og på hver side av bekken, orientert N-S. ",
          url: "/history/sagbruk",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [11.10772289, 59.85438232],
        },
        properties: {
          id: 5,
          anim_coords: [11.109901708040525, 59.854212581595476],
          anim_bearing: -121.66837902659893,
          anim_pitch: 74.5000000000001,
          anim_zoom: 18.246190156906124,
          title: "Sagtuft Byåa, Sagbruk",
          description:
            "Sør for gårdstunet på By og på nordre siden av Byåa ligger et fundament etter en sag. Sagen ligger rett nedenfor en bratt skråning på en liten flate ved elva. Det er ingen høye murer igjen da steinene er igjenbrukt andre steder.",
          url: "/quiz/sagbruk",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [11.11190333, 59.85439546],
        },
        properties: {
          id: 6,
          anim_coords: [11.11190333, 59.85439546],
          anim_bearing: -89.91658356552387,
          anim_pitch: 76.49999999999996,
          anim_zoom: 17.906392117015567,
          title: "Sagbukruin / Vannsag",
          description:
            "2 murer etter vannsag som står på linje orientert NV-SØ. Består i hovedsak av stor bruddstein. Noe utrast. Delvis mosegrodd. L ca 10m, h ca 2-3m, tykkelse ca 1,25m. Ca 20m NV og ovenfor murene finnes morkne stokker, bl a restene av en 'skrå dam'. Ca 2m NØ for den NV-ligste pillaren et omfar til en tredje pillar. En mølle skal ha ligget ovenfor saga. Opplyst v/ Geir Weng, gårdens eier 1977. 2008: To tørrmurte pillarer etter vannsag som står på linje orientert nordvest/sørøst.",
          url: "/history/vannsag",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [11.114554, 59.85441],
        },
        properties: {
          id: 7,
          anim_coords: [11.114175571945452, 59.854440416128995],
          anim_bearing: -89.91658356552387,
          anim_pitch: 76.49999999999996,
          anim_zoom: 17.906392117015567,
          title: "Hulveg, ruin bygningsrest",
          description:
            "Vannsagresten består av 4 oppmurte bærepillarer, plassert parvis på hver sin side av åa. Bygget i hovedsak av stor bruddstein som er noe utrast. Delvis dekket av mose. Mellom pillarene er det rester av tømmerkonstruksjon. Hver av de fire pillarene måler: L ca 5m, h 2-5m, tykkelse ca 1,25m. 2008: Mål: omlag 20 x 10 meter. Orientert øst/vest. Det mest øyensynlige er fire gjenstående, mosegrodde pillarer av stein. Den nordøstre pillaren er særlig godt bevart, og har fortsatt sin opprinnelige form. Strukturene har en rektangulær grunnflate som smalner av mot toppen. De er reist av tørrmurt tilhugget stein, formet i kvadratiske og rektangulære blokker",
          url: "/quiz/sagbruk2",
        },
      },
    ],
  };

  return geojson;
};
export default GeoJson;
