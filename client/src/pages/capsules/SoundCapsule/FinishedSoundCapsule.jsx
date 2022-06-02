import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import note from "../../../assets/images/soundcapsule/note2.svg";
import singleNote from "../../../assets/images/soundcapsule/note3.svg";
import { User } from "../../../application";
import olafInfront from "../../../assets/images/olaf-infront.png";
import { useParams } from "react-router-dom";
import "../../../css/olaf.css";
const FinishedSoundCapsule = ({ update, filteredCapsule }) => {
  const { user, setUser } = useContext(User);

  useEffect(async () => {
    await update();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center flex-column vh-100 bg-capsule">
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
      <div className={"d-flex justify-content-center mb-5"}>
        <h1
          style={{
            fontSize: "1.5rem",
            fontFamily: "Source Sans Pro Bold",
            color: "var(--backgroundColorGreeny)",
          }}
        >
          Fullført lydkapselen!{" "}
        </h1>
      </div>
      <div
        id={"olaf-infront-div"}
        className={
          "d-flex align-content-center flex-row justify-content-center gap-3  position-relative z-index-1"
        }
      >
        <div>
          <img
            height={200}
            /*className={"img-fluid"}*/ src={olafInfront}
            alt="bilde av olaf på fullført side"
          />
        </div>

        <div className="pe-4">
          <div className="left-point"></div>
          {filteredCapsule ? (
            <p id={"finish-paragraph"}>
              Woops! Det ser ut som du allerede har vært på denne kapselen. Gå
              til neste kapsel.
            </p>
          ) : (
            <p id={"finish-paragraph"}>
              Godt jobbet!
              <br /> Du har gjennomført en kapsel og fått poeng for det, og
              kanskje til og med lært noe nytt om Byåa!
            </p>
          )}
        </div>
      </div>
      {filteredCapsule ? (
        <div>
          <p style={{ fontSize: "1.7rem", fontWeight: "bold" }}></p>
        </div>
      ) : (
        <div>
          <p style={{ fontSize: "1.7rem", fontWeight: "bold" }}>
            Du har fått + 20 poeng
          </p>
        </div>
      )}

      <div className="text-center mt-5">
        <Link to="/map">
          <button className="mb-2" id="button-capsules-green">
            Tilbake til kart
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
