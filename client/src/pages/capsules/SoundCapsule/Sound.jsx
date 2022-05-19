import React from "react";
import Play from "./Play";
import sawmillwork from "../../../images/soundcapsule/image1.svg";
const Sound = () => {
  return (
    <div className="pt-5 d-flex justify-content-center align-items-center flex-column">
      <h3 className="pb-3">Lydkapsel</h3>
      <h1 className="pb-3 fw-bolder text-info">Byåa</h1>
      <img className="p-2" src={sawmillwork} alt="" srcset="" />
      <Play />
    </div>
  );
};

export default Sound;
