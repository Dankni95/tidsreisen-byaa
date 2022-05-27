import React, { useContext } from "react";
import "./myFindingsCard.css";
import kvernhus from "./kvernhus3.png";
import { FiCheck } from "react-icons/fi";
import { User } from "../application.jsx";

export function MyFindingsCard() {
  const { user } = useContext(User);

  /**
   * TODO: må finne ut av hvordan vi skal hente bilde og matche det med user.finishedCapsules.name
   * */

  return (
    <>
      {user.finishedCapsules?.map((capsule, index) => {
        return (
          <div id={"card"} className="card mb-3" style={{ maxWidth: "540px" }}>
            <div
              onClick={() => console.log("Opens capsule but not 'done'-page")}
              key={index}
              className="row g-0"
            >
              <div className="col-5">
                <img
                  height={100}
                  src={kvernhus}
                  className="img-fluid rounded-start"
                  alt="dummyalttext"
                />
              </div>
              <div className="col-5">
                <div className="card-body">
                  <h5 className="card-title">{capsule.name}</h5>
                  <p className="card-text">{capsule.category}</p>
                </div>
              </div>
              <div className={"col-2"}>
                <FiCheck size={50} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
