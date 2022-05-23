import "./quiz.css";
import { useLoading } from "../../../helpers/useLoading.jsx";
import { DatabaseContext } from "../../../contexts/databaseContext.jsx";
import { useState, react, useContext } from "react";
import { Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CapsuleButtonGreen } from "../../../components/CapsuleButton.jsx";
import { NotLoggedIn } from "../../../components/NotLoggedIn.jsx";

export function Quiz({ username }) {
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showPoints, setShowPoints] = useState(false);
  const [score, setScore] = useState(0);
  const [points, setPoints] = useState(0);

  const { listQuiz } = useContext(DatabaseContext);

  const { loading, error, data } = useLoading(async () => await listQuiz({id}), [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!username) {
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

  function handleAnswerClick(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
      setPoints(points + 10);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowPoints(true);
    }
  }

    return (
        <main className="quiz" style={{display: "grid", placeItems: "center"}}>
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
