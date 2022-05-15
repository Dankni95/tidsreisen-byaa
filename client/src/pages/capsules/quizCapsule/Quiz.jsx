import {fetchJSON} from "../../../helpers/http.jsx";
import {useLoading} from "../../../helpers/useLoading.jsx";
import {QuizCard} from "./QuizCard.jsx";

export function Quiz() {
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

    return (
        <div style={{display: "grid", placeItems: "center"}}>
            <QuizCard data={data} />
        </div>
    );
}