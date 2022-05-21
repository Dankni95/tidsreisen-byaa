import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { UserContext } from "../contexts/userContext.jsx";
import { useLoading } from "../helpers/useLoading.jsx";
import { Loading } from "./Loading.jsx";

export default function Popup({ username, loading, error, reload }) {
  const [show, setShow] = useState(true);
  /*const [user, setUser] = useState();*/

  useEffect(() => {
    reload;
  }, [reload]);

  const [message, setMessage] = useState([
    `Hei ${username}, jeg heter Olaf! Velkommen til Byåaa Tidsreisen! Jeg skal ta deg gjennom noen steg og fortelle deg litt om hvordan denne reisen fungerer. Bli med da vel!`,
  ]);

  const messages = [
    /*    {
      id: 1,
      content: `Hei ${user}, jeg heter Olaf! Velkommen til Byåaa Tidsreisen! Jeg skal ta deg gjennom noen steg og fortelle deg litt om hvordan denne reisen fungerer. Bli med da vel!`,
    },*/
    {
      id: 2,
      content: `Beveg deg rundt på turstien i Byåa og utforsk de gamle ruinene ved å ta bilde av en QR-kode plassert på området.`,
    },
    {
      id: 3,
      content:
        "Da vil du oppdage de forskjellige tidskapslene: lyd, historie og oppgaver.",
    },
    {
      id: 4,
      content:
        "Du får poeng for de forskjellige tidskapslene du klarer å finne. Håper du finner dem alle! Lykke til!",
    },
  ];

  const [next, setNext] = useState(2);

  function changeTitle(id) {
    if (id > 4) handleClose();

    setMessage(
      messages.map((item) => {
        if (item.id === id) {
          return item.content;
        }
      })
    );
  }

  const handleClose = () => setShow(false);
  const handleNext = () => setNext(next + 1);
  const handleShow = () => setShow(true);

  // TODO: Her må staten til intro lagres per bruker i MONGODB

  if (next < 4) window.addEventListener("load", handleShow);

  return (
    <div className={"d-flex"}>
      {loading && <Loading />}
      {error && <div>{error.toString()}</div>}
      <Modal
        className={"d-flex justify-content-center align-items-center"}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: "Bubblegum Sans" }}>
            Velkommen til Tidsreisen!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ fontFamily: "Source Sans Pro Semibold" }}>
          {message}
        </Modal.Body>
        <Modal.Footer>
          {next > 4 && (
            <Button variant="secondary" onClick={handleClose}>
              Start reisen!
            </Button>
          )}
          {4 >= next ? (
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
    </div>
  );
}
