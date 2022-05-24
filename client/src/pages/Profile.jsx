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
    width: `${progress}%`,
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
  const { name, points, level, finishedCapsules } = user;

  if (name === undefined) {
    return <NotLoggedIn />;
  }

  return (
    <div className="container">
      <main id="main">
        <h1 id="userName">{name}</h1>
        <div id="circle">
          <IoPersonOutline id="icon" />
        </div>
        <h2 id="userLevel">Level {level}</h2>
        <ProgressBar color="#333333" progress={points} />
        <p id="userPoints">{points}/100 poeng</p>
        <div id="linkBox">
          <a id="myFindingsLink" href="/myfindings">
            Mine funn
          </a>
        </div>
      </main>
    </div>
  );
}
