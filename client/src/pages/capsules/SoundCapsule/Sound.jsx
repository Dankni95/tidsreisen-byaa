import React, { useState } from "react";
import Play from "./Play";
import sawmillwork from "../../../images/soundcapsule/image1.svg";
import note from "../../../images/soundcapsule/note2.svg";
import singleNote from "../../../images/soundcapsule/note3.svg";
import FinishedSoundCapsule from "./FinishedSoundCapsule";
const Sound = () => {
  const [drag, setDrag] = useState();
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: null,
  });
  console.log(songInfo.duration === songInfo.currentTime);
  console.log(songInfo.currentTime);
  return (
    <>
      {songInfo.duration === songInfo.currentTime ? (
        <FinishedSoundCapsule currentTime={songInfo.currentTime} />
      ) : (
        <div className="position-relative d-flex justify-content-center align-items-center flex-column vh-100 bg-capsule">
          <div
            style={{
              position: "absolute",
              top: 20,
              left: 20,
              color: "rgba(255, 255, 255, 0.271)",
            }}
          >
            <img src={note} alt="Some note" />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 20,
              left: 20,
              color: "rgba(255, 255, 255, 0.271)",
            }}
          >
            <img width={100} src={note} alt="Some note" />
          </div>
          <div
            style={{
              position: "absolute",
              top: 200,
              right: 20,
              color: "rgba(255, 255, 255, 0.271)",
              transform: "scaleX(-1)",
            }}
          >
            <img width={80} src={note} alt="Some note" />
          </div>
          <div
            style={{
              position: "absolute",
              top: 500,
              right: 20,
              color: "rgba(255, 255, 255, 0.271)",
              transform: "scaleX(-1)",
            }}
          >
            <img width={50} src={singleNote} alt="Some note" />
          </div>
          <div
            style={{
              position: "absolute",
              top: 400,
              left: 20,
              color: "rgba(255, 255, 255, 0.271)",
            }}
          >
            <img width={50} src={singleNote} alt="Some note" />
          </div>

          <h3 className="pb-3">Lydkapsel</h3>
          <h1 className="pb-3 fw-bolder text-capsule">Byåa</h1>
          <img className="p-2" src={sawmillwork} alt="" srcset="" />
          <Play
            songInfo={songInfo}
            setSongInfo={setSongInfo}
            setDrag={setDrag}
          />
          <h4 className="my-5 fw-bold">Sagbruket - År 1700-1800</h4>
          <p className="fst-italic fw-bold">
            Lytt ferdig lydlkapselen for å få poeng
          </p>
        </div>
      )}
    </>
  );
};

export default Sound;
