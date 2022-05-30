import React, { useContext } from "react";
import "../css/myFindingsCard.css";
import kvernhus from "../assets/images/myfindings-dummy-image.png";
import { FiCheck } from "react-icons/fi";
import { User } from "../application.jsx";
import { MdQuiz } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { myFindingsCardData } from "./myFindingsCardData.jsx";

export function MyFindingsCard() {
  const { user, setUser } = useContext(User);
  // easier to handle potential issues with strings when in a variable
  const HISTORYCAPSULE = "Historiekapsel";
  const QUIZCAPSULE = "Quizkapsel";
  const AUDIOCAPSULE = "Lydkapsel";

  /**
   * TODO: må finne ut av hvordan vi skal hente bilde og matche det med user.finishedCapsules.name
   * */

  return (
    <>
      {myFindingsCardData.finishedCapsules?.map((capsule, index) => {
        return (
          /*<div id={"inner-container"} key={index}>*/
          <div
            id={"card"}
            className="card mb-3"
            style={{ maxWidth: "540px" }}
            onClick={() => console.log("Opens capsule but not 'done'-page")}
            key={index}
          >
            <div id={"content-container"} className="row g-0">
              <div id={"image-container"} className="col-5">
                <img
                  id={"image"}
                  src={kvernhus}
                  className="img-fluid"
                  alt="dummyalttext"
                />
              </div>
              <div className="col-6">
                <div className="card-body">
                  <h5 className="card-title">
                    {capsule.name || capsule.name_}
                  </h5>

                  <p className="card-text">
                    {capsule.category === HISTORYCAPSULE && (
                      <FaBook color={"var(--textColorGray)"} />
                    )}
                    {capsule.category === QUIZCAPSULE && (
                      <MdQuiz color={"var(--textColorGray)"} />
                    )}
                    {capsule.category === AUDIOCAPSULE && (
                      <AiFillSound color={"var(--textColorGray)"} />
                    )}
                    {capsule.category}
                  </p>
                </div>
              </div>
              <div id={"done-icon"} className={"col-1"}>
                <HiOutlineCheckCircle
                  color={"var(--textColorGray)"}
                  size={40}
                />
              </div>
            </div>
          </div>
          /*</div>*/
        );
      })}
    </>
  );
}
