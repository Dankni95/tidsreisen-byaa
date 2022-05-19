import {useLoading} from "../../../helpers/useLoading.jsx";
import { DatabaseContext } from "../../../contexts/databaseContext.jsx";
import {useState, react, useContext} from "react";
import {Container,Row,Col,Button} from "react-bootstrap";

export function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showPoints, setShowPoints] = useState(false);
    const [score, setScore] = useState(0);
    const [points, setPoints] = useState(0);

    const { listQuiz } = useContext(DatabaseContext);

    const {loading, error, data} = useLoading(
        async () => await listQuiz(),
        []
    );

    if (loading) {
        return <div>Loading...</div>;
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
        console.log(isCorrect)
        if (isCorrect) {
            setScore(score + 1);
            setPoints(points + 10)
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < data.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowPoints(true);
        }
    }

    return (
        <main style={{display: "grid", placeItems: "center"}}>
            {showPoints ?
                (<div>
                    <h1>Fullført quizkapsel</h1>
                    <h3>Du har {score}/{data.length} riktige</h3>
                    <h5>+ {points} poeng!</h5>
                    <a href={"/"}>Finn flere </a>
                    <a href={"/"}>Mine funn</a>
                </div>) : (
                    <Container>
                     <row>
                        <div>
                            <h1>Quizkapsel</h1>
                            <h3>{data[currentQuestion].category}</h3>
                            <p className="question">{data[currentQuestion].question_}</p>
                        </div>
                        <div>
                            {data[currentQuestion].answers.map((a, index) => (
                                <Button variant="success" key={index} onClick={() => handleAnswerClick(a.isCorrect)}>{a.answer}</Button>
                            ))}
                        </div>
                    </row>
                    </Container>
                )}
        </main>
    );
}