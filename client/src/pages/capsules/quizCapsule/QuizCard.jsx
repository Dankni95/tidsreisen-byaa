import {useState} from "react";

export function QuizCard({question, data, correctAnswer}) {

    const [dataIndex, setDataIndex] = useState(data[0]);

    function checkAnswer(answer) {
        if (answer === correctAnswer) {
            alert("Great job!")
        }
    }

    if (question === "Hva gjør et sagbruk?") {
        return (
            <div>
                <h1>{dataIndex.title}</h1>
                <h3>{dataIndex.category}</h3>
                <h5>{dataIndex.question}</h5>
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
    } else if (question === "Hvor gammelt er sagbruket?") {
        return (
            <div>
                <h1>{dataIndex.title}</h1>
                <h3>{dataIndex.category}</h3>
                <h5>{dataIndex.question}</h5>
                <div>{dataIndex.map((b, aindex) => (
                    <button
                        style={{
                            color: "black",
                            backgroundColor: "white"
                        }}
                        key={aindex}
                        onClick={() => checkAnswer(b)}
                    >
                        {b}
                    </button>
                ))}</div>
            </div>
        )
    }
    return null;
}