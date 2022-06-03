import React, { useContext } from "react";
import olafInfront from "../../../assets/images/olaf-infront.png";
import { CapsuleButtonGreen } from "../../../components/CapsuleButton.jsx";
import { useNavigate } from "react-router-dom";
import { User } from "../../../application.jsx";

export function HistoryDone({ name, updateToDatabase }) {
  const navigate = useNavigate();
  const { user } = useContext(User);

  const navigateToMap = () => navigate("/map");
  const navigateToMyFindings = () => {
    updateToDatabase();
    navigate("/myfindings");
  };

  const capsuleNameFromDatabase = user.finishedCapsules.map((capsuleName) => {
    return capsuleName.name;
  });

  const filteredCapsuleNamesFromUserDatabase = capsuleNameFromDatabase.find(
    (capsuleName) => {
      return capsuleName === name;
    }
  );

  return (
    <div style={{ height: "35rem" }}>
      <div className={"d-flex justify-content-center mt-3"}>
        <h1
          style={{
            fontSize: "1.5rem",
            fontFamily: "Source Sans Pro Bold",
            color: "var(--backgroundColorGreeny)",
          }}
        >
          Fullført historiekapselen!
        </h1>
      </div>
      <div
        id={"olaf-infront-div"}
        className={
          "w-100 h-50 d-flex align-content-center flex-row justify-content-center gap-3"
        }
      >
        <div style={{ marginTop: "3rem" }}>
          <img
            height={200}
            /*className={"img-fluid"}*/ src={olafInfront}
            alt="bilde av olaf på fullført side"
          />
        </div>

        <div style={{ marginTop: "2rem" }} className={"flex-shrink-1"}>
          <div className="left-point"></div>
          {name === filteredCapsuleNamesFromUserDatabase ? (
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
      <div
        className={
          "d-flex justify-content-center flex-column align-items-center"
        }
      >
        <div className={"mb-5"}>
          {name === filteredCapsuleNamesFromUserDatabase ? null : (
            <p id={"history-points"}>Du har fått + 20 poeng</p>
          )}
        </div>
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
      </div>
    </div>
  );
}
