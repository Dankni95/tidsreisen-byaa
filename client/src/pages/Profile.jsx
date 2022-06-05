import React, { useContext } from "react";
import { NotLoggedIn } from "../components/NotLoggedIn.jsx";
import "../css/profile.css";
import { IoPersonOutline } from "react-icons/io5";
import { User } from "../application.jsx";
import { Link, useNavigate } from "react-router-dom";
import { CapsuleButtonLetthet } from "../components/CapsuleButton.jsx";
import { fetchJSON_client } from "../helpers/http.jsx";
import { FiLogOut } from "react-icons/fi";
import { AreYouSureLogoutModal } from "../components/AreYouSureLogoutModal.jsx";

function ProgressBar({ color, progress }) {

  const fillerStyles = {
    height: "100%",
    maxWidth: "15rem",
    width: `${progress / 14}rem`,
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
  const navigate = useNavigate();
  /*let logoutToggler = false;

  const logOutHandler = () => {
    logoutToggler = !logoutToggler;
    console.log(logoutToggler);
  };

  console.log(logoutToggler);*/

  const logOutHandler = async () => {
    if (confirm("Er du sikker på at du ønsker å logge ut?")) {
      navigate("/");
      await fetchJSON_client("/api/deleteCookie");
      return true;
    } else {
      return false;
    }
  };

  if (name === undefined) {
    return <NotLoggedIn />;
  }

  return (
    <div className="profileContainer">
      <div id="main">
        <div id={"container"}>
          <div id={"logout-container"}>
            <div id={"logout-link"} onClick={logOutHandler}>
              <FiLogOut /> <span>Logg ut</span>
            </div>
          </div>
          <div id={"user-information-container"}>
            <h1 id="userName">{name}</h1>
            <div id="circle">
              <IoPersonOutline id="icon" />
            </div>
            <ProgressBar color="#333333" progress={points} />
            {/*TODO: Endre poeng her når vi vet hvor mange man kan få totalt*/}
            <p id="userPoints">{points}/210 poeng</p>
            <div id={"myfindings-button-container"}>
              <CapsuleButtonLetthet
                onClick={() => navigate("/myfindings")}
                buttonText={"Mine funn"}
              />
            </div>
            {/*{logoutToggler && <AreYouSureLogoutModal />}*/}
          </div>
        </div>
      </div>
    </div>
  );
}
