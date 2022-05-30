import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import note from "../../../assets/images/soundcapsule/note2.svg";
import singleNote from "../../../assets/images/soundcapsule/note3.svg";
import { useCountDown } from "./useCountDown";
import { User } from "../../../application.jsx";
const FinishedSoundCapsule = ({ name, update }) => {
  const { user } = useContext(User);
  const remaining = 1000;
  /* const endTime = new Date().getTime() + remaining; // 24 hour
  const [timeLeft, setTimeleft] = useCountDown(endTime); */

  /*   const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(timeLeft / day);
  const h = Math.floor((timeLeft % day) / hour);
  const m = Math.floor((timeLeft % hour) / minute);
  const s = Math.floor((timeLeft % minute) / second); */

  useEffect(() => {
    update();
  }, []);
  const capsuleNameFromDatabase = user.finishedCapsules.map((capsuleName) => {
    return capsuleName.name;
  });

  const filteredCapsuleNamesFromUserDatabase = capsuleNameFromDatabase.find(
    (capsuleName) => {
      return capsuleName === name;
    }
  );

  return (
    <div className="d-flex justify-content-around align-items-center flex-column vh-100 bg-capsule">
      <div
        style={{
          position: "absolute",
          top: 150,
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
      <div className="text-center">
        <h3 className="text-capsule fw-bold">Fullført lydkapselen</h3>
      </div>

      <div>
        <h4>+20 poeng</h4>
      </div>

      <div className="text-center">
        <Link to="/map">
          <button className="mb-2" id="button-capsules-green">
            Finn flere
          </button>
        </Link>
        <Link to="/myfindings">
          <button className="mt-2" id="button-capsules-green">
            Mine funn
          </button>
        </Link>
      </div>
      {/* <div className="text-center bg-white p-2 rounded m-0 shadow-sm">
        <p className="m-0 text-capsule fw-bold">Kapsel låses opp om</p>
        <p className="m-0 text-capsule fw-bold ">{`${d} : ${h} : ${m} : ${s}`}</p>
      </div> */}
    </div>
  );
};

export default FinishedSoundCapsule;
