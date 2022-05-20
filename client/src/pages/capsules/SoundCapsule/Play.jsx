import React, { useState, useRef } from "react";
import { useLoading } from "../../../helpers/useLoading";
import { fetchJSON } from "../../../helpers/http";
import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { AiOutlinePause } from "react-icons/ai";

const Play = ({ songInfo, setSongInfo, setDrag }) => {
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

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const handlePlay = () => {
    if (isPlaying) {
      setIsPlaying(!isPlaying);
      audio.current.pause();
    } else {
      setIsPlaying(!isPlaying);
      audio.current.play();
    }
  };

  const onDragHandler = (e) => {
    setDrag(e.target.value);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex justify-content-center align-items-center ">
        <p className="m-0 ">{getTime(songInfo.currentTime)}</p>
        <input
          onChange={onDragHandler}
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          className="mx-2 form-range"
          type="range"
        />
        <p className="m-0 ">{getTime(songInfo.duration)}</p>
      </div>
      <div className="mt-2">
        {isPlaying ? (
          <FaPause onClick={handlePlay} size={25} />
        ) : (
          <FaPlay onClick={handlePlay} size={25} />
        )}
      </div>
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audio}
        src={audioUrl}
      ></audio>
    </div>
  );
};

export default Play;
