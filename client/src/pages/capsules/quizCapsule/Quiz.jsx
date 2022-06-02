import React from "react";
import "./quiz.css";
import { useLoading } from "../../../helpers/useLoading.jsx";
import { DatabaseContext } from "../../../contexts/databaseContext.jsx";
import { UserContext } from "../../../contexts/userContext.jsx";
import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { CapsuleButtonGreen } from "../../../components/CapsuleButton.jsx";
import { NotLoggedIn } from "../../../components/NotLoggedIn.jsx";
import { User } from "../../../application.jsx";
import { MdQuiz } from "react-icons/md";
import { Loading } from "../../../components/Loading.jsx";

export function Quiz() {
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showPoints, setShowPoints] = useState(false);
  const [alreadyDone, setAlreadyDone] = useState(false);
  const [score, setScore] = useState(0);
  const [points, setPoints] = useState(0);
  const [index, setIndex] = useState(1);
  const navigate = useNavigate();

  const { listQuiz } = useContext(DatabaseContext);
  const { updateUser } = useContext(UserContext);
  const { user, setUser } = useContext(User);
  const { name, intro, walk, points: prevPoints, finishedCapsules } = user;

  let capsuleObject = {};

  const { loading, error, data } = useLoading(
    async () => await listQuiz({ id }),
    [id]
  );

  useEffect(async () => {
    if (showPoints) {
      await updateUser({ points, user, finishedCapsules: capsuleObject });

      if (!user.finishedCapsules.includes(capsuleObject)) {
        user.finishedCapsules.push(capsuleObject);

        setUser({
          ...user,
        });
      }
    }
  }, [showPoints, updateUser]);

  if (loading) {
    return <Loading />;
  }

  if (!name) {
    return <NotLoggedIn />;
  }

  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <div id="error-text">{error.toString()}</div>
      </div>
    );
  }

  console.log(data[currentQuestion].id);

  capsuleObject = {
    id: data[currentQuestion].id,
    name: data[currentQuestion].name_,
    category: data[currentQuestion].category,
  };

  const capsuleNameFromDatabase = user.finishedCapsules.map((capsuleName) => {
    return capsuleName.name;
  });

  const filteredCapsuleNamesFromUserDatabase = capsuleNameFromDatabase.find(
    (capsuleName) => {
      return capsuleName === data[currentQuestion].name_;
    }
  );

  function incPoints() {
    setPoints((state) => {
      return state + 10;
    });
  }

  function incScore() {
    setScore((state) => {
      return state + 1;
    });
  }

  function handleAnswerClick(isCorrect) {
    setIndex(index + 1);
    if (isCorrect) {
      incPoints();
      incScore();
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion);
      console.log(capsuleNameFromDatabase);
    } else if (
      filteredCapsuleNamesFromUserDatabase === data[currentQuestion].name_
    ) {
      console.log(alreadyDone);
      setAlreadyDone(true);
      console.log(alreadyDone);
    } else {
      setShowPoints(true);
    }
  }

  return (
    <main className="quiz" style={{ display: "grid", placeItems: "center" }}>
      {showPoints ? (
        <div>
          <h1 className="completed">Fullført quizkapsel</h1>
          <h3 className="result">
            Du har {score}/{data?.length} riktige
          </h3>
          <h5 className="points">+ {points} poeng!</h5>
          <div className={"links"}>
            <CapsuleButtonGreen
              buttonText={"Tilbake til kart"}
              onClick={() => navigate("/map")}
            />
            <CapsuleButtonGreen
              buttonText={"Mine funn"}
              onClick={() => navigate("/myfindings")}
            />
          </div>
        </div>
      ) : alreadyDone ? (
        <div>
          <h1 className="completed">Allerede gjennomført</h1>
          <h3 className="result">
            Du har allerede gjennomført denne quizzen, ser det ut til!
          </h3>
          <div className={"links"}>
            <CapsuleButtonGreen
              buttonText={"Finn flere"}
              onClick={() => navigate("/map")}
            ></CapsuleButtonGreen>
            <CapsuleButtonGreen
              buttonText={"Mine funn"}
              onClick={() => navigate("/myfindings")}
            ></CapsuleButtonGreen>
          </div>
        </div>
      ) : (
        <Container className="quiz-items">
          <div>
            <h1 className="capsule-title">
              <MdQuiz color={"var(--textColorGray)"} /> Quizkapsel
            </h1>
            <h3 className="category">{data[currentQuestion].name_}</h3>
            <p className="questionIndex">
              {index}/{data.length}
            </p>
            <p className="question">{data[currentQuestion].question_}</p>
          </div>

          <div className="button-container">
            {data[currentQuestion].answers.map((a, index) => (
              <div key={index} className={"answer-btn"}>
                <CapsuleButtonGreen
                  onClick={() => handleAnswerClick(a.isCorrect)}
                  buttonText={a.answer}
                />
              </div>
            ))}
          </div>
        </Container>
      )}
    </main>
  );
}
