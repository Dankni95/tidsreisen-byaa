/*
import React from "react";
import { Modal } from "react-bootstrap";
import { CapsuleButtonYellow } from "./CapsuleButton.jsx";
import { useNavigate } from "react-router-dom";
import { fetchJSON_client } from "../helpers/http.jsx";

export function AreYouSureLogoutModal() {
  const navigate = useNavigate();

  const logOutHandler = async () => {
    /!*if (confirm("Er du sikker på at du ønsker å logge ut?")) {*!/
    navigate("/");
    await fetchJSON_client("/api/deleteCookie");
    return true;
    /!*    } else {
      return false;
    }*!/
  };

  return (
    <Modal
      className={"d-flex justify-content-center align-items-center"}
      show={true}
    >
      <Modal.Body>Er du sikker på at du ønsker å logge ut?</Modal.Body>
      <Modal.Footer className={"d-flex justify-content-center my-modal"}>
        <CapsuleButtonYellow
          className={"justify-content-center align-content-center"}
          buttonText={"Ja, logg ut"}
          onClick={logOutHandler}
        />
        <CapsuleButtonYellow
          className={"justify-content-center align-content-center"}
          buttonText={"Nei"}
          onClick={() => console.log("logger ikke ut")}
        />
      </Modal.Footer>
    </Modal>
  );
}
*/
