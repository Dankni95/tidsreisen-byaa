import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { CapsuleButtonGreen } from "./CapsuleButton.jsx";
import { BsArrowRight } from "react-icons/bs";
import "./popup.css";
import olaf from "./iben-from-front.png";
import { postJSON } from "../helpers/http.jsx";

export default function Popup({ username, intro }) {
  const [show, setShow] = useState(true);

  console.log(intro, username);

  const [message, setMessage] = useState(() => {
    return (
      <div>
        Trykk på <BsArrowRight /> for å lære litt om appen
      </div>
    );
  });

  const messages = [
    {
      id: 1,
      content: (
        <p className={"intro-content"}>
          Heisann {username}, jeg heter Olaf! Velkommen til Tidsreisen i Byåa.
          Jeg skal ta deg gjennom noen steg og fortelle deg litt om hvordan
          denne reisen fungerer. Bli med da vel!
        </p>
      ),
    },
    {
      id: 2,
      content: (
        <p className={"intro-content"}>
          Beveg deg rundt på turstien og utforsk hvordan det så ut i Byåa i
          gamle dager ved å ta bilde av QR-koder plassert på områdene.
        </p>
      ),
    },
    {
      id: 3,
      content: (
        <p className={"intro-content"}>
          Da vil du oppdage de forskjellige tidskapslene: lyd, historie og
          oppgaver som vil gi deg enten et lydopptak, historie med bilder eller
          oppgaver du svarer på.
        </p>
      ),
    },
    {
      id: 4,
      content: (
        <p className={"intro-content"}>
          Du får poeng for de forskjellige tidskapslene du gjør ferdig. Håper du
          finner dem alle!
          <br />
          Husk å ha det gøy og lykke til {username}!
        </p>
      ),
    },
  ];

  const [next, setNext] = useState(1);

  function changeTitle(id) {
    if (id > 4) handleClose();

    messages.map((modalMessage) => {
      if (modalMessage.id === id) {
        setMessage(modalMessage.content);
      }
    });
  }

  const handleClose = async () => {
    await postJSON("/api/update-state", {
      user: username,
      intro: false,
    });
    setShow(false);
    // for å fikse navbar show etter man har gjennomført intro
    window.location.reload();
  };
  const handleNext = () => setNext(next + 1);
  const handleShow = () => setShow(true);

  if (intro) window.addEventListener("load", handleShow);

  return (
    <div>
      {username && (
        <Modal
          className={"d-flex justify-content-center align-items-center"}
          show={show}
          onHide={handleClose}
        >
          {/*<div id={"olaf"}>
          <img src={olaf} alt="bilde av intro-olaf" />
        </div>*/}
          <Modal.Header className={"my-modal"} closeButton>
            <Modal.Title style={{ fontFamily: "Bubblegum Sans" }}>
              Velkommen til Tidsreisen!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className={"my-modal"}>
            <img src={olaf} alt="bilde av intro-olaf" />
            <div>{message}</div>
          </Modal.Body>
          <Modal.Footer className={"d-flex justify-content-center my-modal"}>
            <div className={"d-flex flex-column"}>
              {next > 4 && (
                <CapsuleButtonGreen
                  className={"justify-content-center align-content-center"}
                  buttonText={"Start reisen!"}
                  onClick={handleClose}
                />
              )}
            </div>
            {4 >= next ? (
              <BsArrowRight
                style={{
                  fontSize: "2.5rem",
                  color: "var(--backgroundColorGreeny)",
                }}
                onClick={() => {
                  handleNext();
                  changeTitle(next);
                }}
              />
            ) : (
              ""
            )}
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
