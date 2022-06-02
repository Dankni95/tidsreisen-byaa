import React, { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
/*import vegfar from "./Sound/vegfar.m4a";
import vesledammen from "./Sound/vesledammen.m4a";
import vannsag from "./Sound/vannsag.m4a";*/
import vegfar from "./Sound/vegfar.mp3";
import vesledammen from "./Sound/vesledammen.mp3";
import vannsag from "./Sound/vannsag.mp3";
import { useParams } from "react-router-dom";

const Play = ({ songInfo, setSongInfo, setDrag }) => {
  const { id } = useParams();

  const audio = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  let audioUrl = "";

  if (id === "vegfar") {
    audioUrl = vegfar;
  }
  if (id === "vannsag") {
    audioUrl = vannsag;
  }
  if (id === "vesledammen") {
    audioUrl = vesledammen;
  }

  /*  const { data, error, loading, reload } = useLoading(() =>
    fetchJSON("/api/sound")
  ); */
  /*   if (loading) {
    return <h1>Loading..</h1>;
  } */

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
