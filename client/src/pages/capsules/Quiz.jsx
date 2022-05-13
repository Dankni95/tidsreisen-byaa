import { fetchJSON } from "../../helpers/http.jsx";
import { useLoading } from "../../helpers/useLoading.jsx";

export function Quiz() {
  async function listQuiz() {
    return await fetchJSON("/api/quiz");
  }

  const { loading, error, data } = useLoading(async () => await listQuiz(), []);

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
    <div>
      {data.map((a, index) => (
        <div key={index}>
          <h1>{a.title}</h1>
          <h3>{a.category}</h3>
          <div>
            {a.questions.map((b) => (
              <p>{b.question1}</p>
            ))}
          </div>
          <div>
            {a.questions.map((c) => (
              <div>
                {c.answers.map((d) => (
                  <p>{d}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
