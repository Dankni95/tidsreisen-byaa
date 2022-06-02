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
import { AiFillSound } from "react-icons/ai";
import { Loading } from "../../../components/Loading";

const Sound = () => {
  const { id } = useParams();
  const [drag, setDrag] = useState();
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: null,
  });

  const [count, setCount] = useState(0);
  const { updateUser } = useContext(UserContext);
  const { user, setUser } = useContext(User);
  const { name, intro, walk, points, level } = user;

  const { listAudio } = useContext(DatabaseContext);
  const { data, error, loading } = useLoading(async () => await listAudio());

  useEffect(() => {
    if (count > 0) {
      return () => {
        if (!user.finishedCapsules.includes(capsuleObject)) {
          user.finishedCapsules.push(capsuleObject);
          user.points = user.points + 20;

          setUser({
            ...user,
          });
        }
      };
    }
  }, [count]);

  const updateToDatabase = async () => {
    setCount(count + 1);
    await updateUser({
      user,
      finishedCapsules: capsuleObject,
      points: 20,
    });

    /* user.finishedCapsules.forEach((capsule) => {
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
      }); */
  };

  if (loading) {
    return <Loading />;
  }

  if (name === undefined) {
    return <NotLoggedIn />;
  }

  const getId = data
    ?.map((id) => id)
    .filter((item) => item.title.toLowerCase() === id.toLowerCase())
    .map((itemId) => itemId.id);

  const capsuleObject = {
    id: getId.toString(),
    name: id,
    category: "Lydkapsel",
  };

  const capsuleNameFromDatabase = user.finishedCapsules.map((capsuleName) => {
    return capsuleName.name;
  });

  const filteredCapsuleNamesFromUserDatabase = capsuleNameFromDatabase.find(
    (capsuleName) => {
      console.log(capsuleName);
      return capsuleName === id;
    }
  );
  return (
    <>
      {songInfo.duration === songInfo.currentTime ? (
        <FinishedSoundCapsule
          filteredCapsule={filteredCapsuleNamesFromUserDatabase}
          update={updateToDatabase}
        />
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
          {data?.map((item, index) => {
            return (
              <>
                {item.title.toLowerCase() === id.toLowerCase() && (
                  <div
                    className="position-relative d-flex justify-content-center align-items-center flex-column "
                    key={index}
                  >
                    <h3 className="pb-3">
                      <AiFillSound color={"var(--textColorGray)"} />{" "}
                      {item.category}
                    </h3>
                    <h1 className="pb-3 fw-bolder text-capsule">
                      {item.title}
                    </h1>
                    <img className="p-2" src={item.image} alt={item.image} />

                    <Play
                      song={item.song}
                      songInfo={songInfo}
                      setSongInfo={setSongInfo}
                      setDrag={setDrag}
                    />
                    <h4 className="my-5 fw-bold">År {item.year}</h4>
                    {filteredCapsuleNamesFromUserDatabase ? (
                      <p className="fst-italic fw-bold">
                        Denne lydkapselen er lyttet ferdig
                      </p>
                    ) : (
                      <p className="fst-italic fw-bold">
                        Lytt ferdig lydlkapselen for å få poeng
                      </p>
                    )}
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
