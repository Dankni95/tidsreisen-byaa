import React from "react";
import { useLoading } from "../../../helpers/useLoading";
import { fetchJSON } from "../../../helpers/http";

let audioUrl = require("./Sound/dovregubben.mp3");
const audio = new Audio(audioUrl);
const Play = () => {
  const { data, error, loading, reload } = useLoading(() =>
    fetchJSON("/api/sound")
  );
  if (loading) {
    return <h1>Loading..</h1>;
  }

  var snd = new Audio("data:audio/wav;base64," + data[0].sound);
  console.log(snd);
  const test = () => {
    audio.play();

    console.log("playing");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={test}>Testsadasdasdasdfgdghjhjkhjk</button>
      <button style={{ cursor: "pointer" }}>Test2</button>
    </div>
  );
};

export default Play;
