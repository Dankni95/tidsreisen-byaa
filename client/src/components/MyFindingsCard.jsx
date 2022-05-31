import React, { useContext } from "react";
import "../css/myFindingsCard.css";
import kvernhus from "../assets/images/myfindings-dummy-image.png";
import { FiCheck } from "react-icons/fi";
import { User } from "../application.jsx";
import { MdQuiz } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { myFindingsCardData } from "./myFindingsCardData.jsx";

function MyFindingsSingle({ onClick, capsule }) {
  const { user, setUser } = useContext(User);
  const HISTORYCAPSULE = "Historiekapsel";
  const QUIZCAPSULE = "Quizkapsel";
  const AUDIOCAPSULE = "Lydkapsel";
  let matchesArr = [];

  const mappedFromDummy = myFindingsCardData.finishedCapsules.map(
    (item) => item.name
  );

  const mappedFromDb = user.finishedCapsules?.map((dbName) => dbName.name);

  mappedFromDummy.forEach((capsuleFromDummy) => {
    mappedFromDb?.forEach((capsuleFromDb) => {
      if (capsuleFromDummy === capsuleFromDb) {
        matchesArr.push(capsuleFromDummy);
      }
    });
  });

  const styleVisited = matchesArr.includes(capsule.name)
    ? "card mb-3"
    : "card mb-3 card-nonvisited";

  function IconTrigger() {
    if (styleVisited) {
      return (
        <div id={"done-icon"} className={"col-1"}>
          <HiOutlineCheckCircle color={"var(--textColorGray)"} size={40} />
        </div>
      );
    }
  }

  return (
    <>
      {myFindingsCardData.finishedCapsules?.map((capsule, index) => {
        return (
          <div
            key={capsule.id}
            id={"card"}
            className={styleVisited}
            style={{ maxWidth: "540px" }}
            onClick={onClick}
          >
            <div id={"content-container"} className="row g-0">
              <div id={"image-container"} className="col-5">
                <img
                  id={"image"}
                  src={kvernhus}
                  className="img-fluid"
                  alt="dummyalttext"
                />
              </div>
              <div className="col-6">
                <div className="card-body">
                  <h5 className="card-title">{capsule.name}</h5>

                  <p className="card-text">
                    {capsule.category === HISTORYCAPSULE && (
                      <FaBook color={"var(--textColorGray)"} />
                    )}
                    {capsule.category === QUIZCAPSULE && (
                      <MdQuiz color={"var(--textColorGray)"} />
                    )}
                    {capsule.category === AUDIOCAPSULE && (
                      <AiFillSound color={"var(--textColorGray)"} />
                    )}
                    {capsule.category}
                  </p>
                </div>
              </div>
              <IconTrigger />
            </div>
          </div>
        );
      })}
    </>
  );
}

export function MyFindingsCard() {
  return (
    <>
      {myFindingsCardData.finishedCapsules?.map((capsule, index) => {
        return (
          <MyFindingsSingle
            key={index}
            onClick={() =>
              console.log(`Opens capsule but not 'done'-page ${index}`)
            }
            capsule={capsule}
          />
        );
      })}
    </>
  );
}
