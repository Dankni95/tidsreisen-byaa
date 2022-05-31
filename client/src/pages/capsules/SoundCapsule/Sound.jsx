import React, { useState, useContext, useEffect } from "react";
import Play from "./Play";
import note from "../../../assets/images/soundcapsule/note2.svg";
import singleNote from "../../../assets/images/soundcapsule/note3.svg";
import FinishedSoundCapsule from "./FinishedSoundCapsule";
import { useLoading } from "../../../helpers/useLoading";
import { DatabaseContext } from "../../../contexts/databaseContext";
import { useParams } from "react-router-dom";
import { User } from "../../../application.jsx";
import { NotLoggedIn } from "../../../components/NotLoggedIn.jsx";
import { UserContext } from "../../../contexts/userContext.jsx";
const Sound = () => {
  const { id } = useParams();
  const { updateUser } = useContext(UserContext);
  const { user, setUser } = useContext(User);
  const { name, intro, walk, points, level } = user;
  const [count, setCount] = useState(0);
  const [drag, setDrag] = useState();
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: null,
  });

  const { listAudio } = useContext(DatabaseContext);
  const { data, error, loading } = useLoading(async () => await listAudio());
  let finishedCapsules = [];
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (name === undefined) {
    return <NotLoggedIn />;
  }

  const getId = data?.map((id) => id.id);

  const capsuleObject = {
    // TODO Stian, ordne så id til den lydkapselen blir også passed til DB, fikk det ikke til
    /*id: getId[id],*/
    name: id.charAt(0).toUpperCase() + id.slice(1),
    category: "Lydkapsel",
  };

  const updateToDatabase = async () => {
    setCount(count + 1);
    await updateUser({
      user,
      finishedCapsules: capsuleObject,
      points: 20,
    });

    user.finishedCapsules.forEach((capsule) => {
      finishedCapsules.push(capsule);
    });

    finishedCapsules.push(capsuleObject);
    console.log(finishedCapsules);
    if (count > 0)
      setUser({
        name,
        intro,
        walk,
        points,
        level,
        finishedCapsules: finishedCapsules,
      });
  };

  return (
    <>
      {songInfo.duration === songInfo.currentTime ? (
        <FinishedSoundCapsule id={id} update={updateToDatabase} />
      ) : (
        <div className="position-relative d-flex justify-content-center align-items-center flex-column vh-100 bg-capsule">
          <div
            style={{
              position: "absolute",
              top: 20,
              left: 20,
              color: "rgba(255, 255, 255, 0.271)",
            }}
          >
            <img src={note} alt="Some note" />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 20,
              left: 20,
              color: "rgba(255, 255, 255, 0.271)",
            }}
          >
            <img width={100} src={note} alt="Some note" />
          </div>
          <div
            style={{
              position: "absolute",
              top: 200,
              right: 20,
              color: "rgba(255, 255, 255, 0.271)",
              transform: "scaleX(-1)",
            }}
          >
            <img width={80} src={note} alt="Some note" />
          </div>
          <div
            style={{
              position: "absolute",
              top: 500,
              right: 20,
              color: "rgba(255, 255, 255, 0.271)",
              transform: "scaleX(-1)",
            }}
          >
            <img width={50} src={singleNote} alt="Some note" />
          </div>
          <div
            style={{
              position: "absolute",
              top: 400,
              left: 20,
              color: "rgba(255, 255, 255, 0.271)",
            }}
          >
            <img width={50} src={singleNote} alt="Some note" />
          </div>
          {data.map((item, index) => {
            return (
              <>
                {item.title.toLowerCase() === id.toLowerCase() && (
                  <div
                    className="position-relative d-flex justify-content-center align-items-center flex-column "
                    key={index}
                  >
                    <h3 className="pb-3">{item.category}</h3>
                    <h1 className="pb-3 fw-bolder text-capsule">
                      {item.title}
                    </h1>
                    <img className="p-2" src={item.image} alt={item.image} />

                    <Play
                      songInfo={songInfo}
                      setSongInfo={setSongInfo}
                      setDrag={setDrag}
                    />
                    <h4 className="my-5 fw-bold">{item.year}</h4>
                    <p className="fst-italic fw-bold">
                      Lytt ferdig lydlkapselen for å få poeng
                    </p>
                  </div>
                )}
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Sound;
