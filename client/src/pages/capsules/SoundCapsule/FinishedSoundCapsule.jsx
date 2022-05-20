import React from "react";
import { Link } from "react-router-dom";
import { CapsuleButton } from "../../../components/CapsuleButton.jsx";
const FinishedSoundCapsule = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column vh-100 bg-capsule">
      <h3 className="text-capsule fw-bold">Fullført lydkapselen</h3>
      <h4>+20 poeng</h4>
      <Link to="/">
        <button>Finn flere</button>
      </Link>
    </div>
  );
};

export default FinishedSoundCapsule;
