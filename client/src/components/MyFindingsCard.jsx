import React from "react";
import "./myFindingsCard.css";
import kvernhus from "./kvernhus3.png";
import { FiCheck } from "react-icons/fi";

/**
 * her legges inn logikken, fetch fra db user. Ser for meg at user collection har
 * et array med capsules done som blir mappet her, som blir trigget som en post mot db
 * når bruker har mottatt sine poeng*/

// TODO kun dummy bilde og tekst lagt inn

export function MyFindingsCard({ user }) {
  return (
    <>
      {/*TODO: DATA.map() osv osv*/}
      <div id={"card"} className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
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
              <h5 className="card-title">Mølla</h5>
              <p className="card-text">Historiekapsel</p>
            </div>
          </div>
          <div className={"col-2"}>
            <FiCheck size={50} />
          </div>
        </div>
      </div>
    </>
  );
}
