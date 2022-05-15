import {useState} from "react";
import {QuizResult} from "./QuizResult.jsx"

export function QuizCard({ data }) {

    const [dataIndex, setDataIndex] = useState(data[0]);
    const [points, setPoints] = useState(0);

    function checkAnswer(answer) {
        if (answer === dataIndex.correct_answer) {
            setPoints(points + 1)
        }
    }
        return (
            <div>
                <QuizResult points={points}/>
                <h1>{dataIndex.title}</h1>
                <h3>{dataIndex.category}</h3>
                <h5>{dataIndex.question_}</h5>
                <div>{dataIndex.answers.map((a, aindex) => (
                    <button
                        style={{
                            color: "black",
                            backgroundColor: "white"
                        }}
                        key={aindex}
                        onClick={() => {
                            setDataIndex(data[1]);
                            checkAnswer(a)
                        }}
                    >
                        {a}
                    </button>
                ))}</div>
            </div>
        )
}