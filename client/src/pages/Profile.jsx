import React, { useContext } from "react";
import { NotLoggedIn } from "../components/NotLoggedIn.jsx";
import "./profile.css";
import { IoPersonOutline } from "react-icons/io5";
import { User } from "../application.jsx";

function ProgressBar({ color, progress }) {
  // SKAMLØST STJÅLET FRA
  // https://dev.to/ramonak/react-how-to-create-a-custom-progress-bar-component-in-5-minutes-2lcl

  const fillerStyles = {
    height: "100%",
    maxWidth: "15rem",
    width: `${progress/10}rem`,
    backgroundColor: color,
    borderRadius: "inherit",
    textAlign: "right",
  };

  return (
    <div id="progressBar">
      <div style={fillerStyles}></div>
    </div>
  );
}

export function Profile() {
  const { user, setUser } = useContext(User);
  const { name, points, finishedCapsules } = user;

  if (name === undefined) {
    return <NotLoggedIn />;
  }

  return (
    <div className="profileContainer">
      <main id="main">
        <h1 id="userName">{name}</h1>
        <div id="circle">
          <IoPersonOutline id="icon" />
        </div>
        <ProgressBar color="#333333" progress={points} />
        {/*TODO: Endre poeng her når vi vet hvor mange man kan få totalt*/}
        <p id="userPoints">{points}/150 poeng</p>
        <div id="linkBox">
          <a id="myFindingsLink" href="/myfindings">
            Mine funn
          </a>
        </div>
      </main>
    </div>
  );
}
