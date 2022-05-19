import React, { useState, useRef } from "react";
import { useLoading } from "../../../helpers/useLoading";
import { fetchJSON } from "../../../helpers/http";
import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { AiOutlinePause } from "react-icons/ai";

const Play = () => {
  const audio = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  let audioUrl = require("./Sound/dovregubben.mp3");
  /*  const { data, error, loading, reload } = useLoading(() =>
    fetchJSON("/api/sound")
  ); */
  /*   if (loading) {
    return <h1>Loading..</h1>;
  } */

  /* var snd = new Audio("data:audio/wav;base64," + data[0].sound); */

  /* const audio = new Audio(audioUrl); */
  const handlePlay = () => {
    if (isPlaying) {
      setIsPlaying(!isPlaying);
      audio.current.pause();
    } else {
      setIsPlaying(!isPlaying);
      audio.current.play();
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex justify-content-center align-items-center ">
        <p>Start time</p>
        <input type="range" />
        <p>End time</p>
      </div>
      <div>
        {isPlaying ? (
          <FaPause onClick={handlePlay} size={25} />
        ) : (
          <FaPlay onClick={handlePlay} size={25} />
        )}
      </div>
      <audio ref={audio} src={audioUrl}></audio>
    </div>
  );
};

export default Play;
