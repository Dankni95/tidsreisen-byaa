import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import note from "../../../assets/images/soundcapsule/note2.svg";
import singleNote from "../../../assets/images/soundcapsule/note3.svg";
import { User } from "../../../application";
import olafInfront from "../../../assets/images/olaf-infront.png";
import "../../../css/olaf.css";
import { CapsuleButtonGreen } from "../../../components/CapsuleButton.jsx";

const FinishedSoundCapsule = ({ update, filteredCapsule }) => {
  const { user, setUser } = useContext(User);
  const navigate = useNavigate();

  useEffect(async () => {
    await update();
  }, []);

  const navigateToMap = () => navigate("/map");
  const navigateToMyFindings = () => {
    navigate("/myfindings");
  };

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
        <h1 id={"done-title"}>Fullført lydkapselen!</h1>
      </div>
      <div
        id={"olaf-infront-div"}
        className={
          "d-flex align-content-center flex-row justify-content-center gap-3  position-relative z-index-1"
        }
      >
        <div>
          <img
            id={"olof-infront"}
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

      <div className={"d-flex flex-column"}>
        <div>
          <CapsuleButtonGreen
            onClick={navigateToMap}
            buttonText={"Tilbake til kart"}
          />
        </div>
        <div>
          <CapsuleButtonGreen
            onClick={navigateToMyFindings}
            buttonText={"Mine funn"}
          />
        </div>
      </div>
      {/* <div className="text-center bg-white p-2 rounded m-0 shadow-sm">
        <p className="m-0 text-capsule fw-bold">Kapsel låses opp om</p>
        <p className="m-0 text-capsule fw-bold ">{`${d} : ${h} : ${m} : ${s}`}</p>
      </div> */}
    </div>
  );
};

export default FinishedSoundCapsule;
