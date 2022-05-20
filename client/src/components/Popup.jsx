import React, { useRef, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Popup() {
  const [show, setShow] = useState(true);
  const [title, setTitle] = useState(
    "Velkommen til tidsreisen! Bruk menyen nederst for å navigere mellom kart og din profil."
  );

  const titles = [
    {
      id: 2,
      title:
        "Trykk på de forskjellige sirklene på kartet for å se hva som skjuler seg!",
    },
    {
      id: 3,
      title:
        "Du får poeng for de forskjellige tidskapslene du klarer å finne. Håper du finner dem alle! Lykke til!",
    },
  ];

  const [next, setNext] = useState(2);

  function changeTitle(id) {
    if (id > 3) handleClose();

    setTitle(
      titles.map((item) => {
        if (item.id === id) {
          console.log(item.title);
          return item.title;
        }
      })
    );
  }

  const handleClose = () => setShow(false);
  const handleNext = () => setNext(next + 1);
  const handleShow = () => setShow(true);

  // TODO: Her må staten til intro lagres per bruker i MONGODB

  if (next < 3) window.addEventListener("load", handleShow);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton />
        <Modal.Body>{title}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Lukk
          </Button>
          {3 >= next ? (
            <Button
              variant="secondary"
              onClick={() => {
                handleNext();
                changeTitle(next);
              }}
            >
              Neste
            </Button>
          ) : (
            ""
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
