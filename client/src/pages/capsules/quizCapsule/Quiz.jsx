import {fetchJSON} from "../../../helpers/http.jsx";
import {useLoading} from "../../../helpers/useLoading.jsx";
import {useState, react} from "react";

export function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showPoints, setShowPoints] = useState(false);
    const [points, setPoints] = useState(0);

    async function listQuiz() {
        return await fetchJSON("/api/quiz")
    }

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
            setPoints(points + 1);
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
                    <h3>Du har {points}/{data.length} riktige</h3>
                    <a href={"/"}>Finn flere </a>
                    <a href={"/"}>Mine funn</a>
                </div>) : (
                    <section>
                        <div>
                            <h1>Quizkapsel</h1>
                            <h3>Sagtuft</h3>
                            <p>{data[currentQuestion].question_}</p>
                        </div>
                        <div>
                            {data[currentQuestion].answers.map((a, index) => (
                                <button key={index} onClick={() => handleAnswerClick(a.isCorrect)}>{a.answer}</button>
                            ))}
                        </div>
                    </section>
                )}
        </main>
    );
}