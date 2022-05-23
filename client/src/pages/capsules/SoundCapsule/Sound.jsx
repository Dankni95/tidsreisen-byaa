import React, { useState } from "react";
import Play from "./Play";
import sawmillwork from "../../../images/soundcapsule/image1.svg";
import { FaItunesNote } from "react-icons/fa";
import FinishedSoundCapsule from "./FinishedSoundCapsule";
const Sound = () => {
  const [drag, setDrag] = useState();
  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
  });
  console.log(songInfo.duration === songInfo.currentTime);

  return (
    <>
      {(songInfo.duration === songInfo.currentTime) === false ? (
        <FinishedSoundCapsule />
      ) : (
        <div className=" d-flex justify-content-center align-items-center flex-column vh-100 bg-capsule">
          {/*  <div className="position-absolute top-4 index">
          <FaItunesNote size={300} />
        </div> */}

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
