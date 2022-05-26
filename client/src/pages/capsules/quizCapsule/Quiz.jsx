import "./quiz.css";
import { useLoading } from "../../../helpers/useLoading.jsx";
import { DatabaseContext } from "../../../contexts/databaseContext.jsx";
import { UserContext } from "../../../contexts/userContext.jsx";
import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CapsuleButtonGreen } from "../../../components/CapsuleButton.jsx";
import { NotLoggedIn } from "../../../components/NotLoggedIn.jsx";
import { User } from "../../../application.jsx";

export function Quiz() {
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showPoints, setShowPoints] = useState(false);
  const [score, setScore] = useState(0);
  const [points, setPoints] = useState(0);

  const { listQuiz } = useContext(DatabaseContext);
  const { updateUser } = useContext(UserContext);
  const { user, setUser } = useContext(User);
  const { name, intro, walk, points: prevPoints} = user;

  const { loading, error, data } = useLoading(
    async () => await listQuiz({ id }),
    [id]
  );

  if (loading) {
    return <div>Loading...</div>;
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

  function incPoints() {
    setPoints((state) => {
      return state + 10;
    })
    console.log(points)
  }

  function incScore() {
    setScore((state) => {
      return state + 1;
    })
    console.log(score)
  }


  function handleAnswerClick(isCorrect) {
    if (isCorrect) {
      console.log("Korrekt, nå skal poeng og score inkrementeres!")
      incPoints()
      incScore()
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowPoints(true);
      setUser({name: name, intro: intro, walk: walk, points: prevPoints  })
      console.log("Previous points: " + prevPoints)
      console.log("Added points: " + points)
      updateUser({ points, user})
    }
  }

  return (
    <main className="quiz" style={{ display: "grid", placeItems: "center" }}>
      {showPoints ? (
        <div>
          <h1 className="completed">Fullført quizkapsel</h1>
          <h3 className="result">
            Du har {score}/{data.length} riktige
          </h3>
          <h5 className="points">+ {points} poeng!</h5>
          <a href={"/map"}>Finn flere </a>
          <a href={"/myfindings"}>Mine funn</a>
        </div>
      ) : (
        <Container className="quiz-items">
          <div>
            <h1 className="capsule-title">Quizkapsel</h1>
            <h3 className="category">{data[currentQuestion].category}</h3>
            <p className="question">{data[currentQuestion].question_}</p>
          </div>

          <div className="button-container">
            {data[currentQuestion].answers.map((a, index) => (
              <div key={index} className={"mb-3"}>
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
