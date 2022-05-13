import React, { useContext, useState } from "react";
import { DatabaseContext } from "../../../contexts/databaseContext.jsx";
import { useLoading } from "../../../helpers/useLoading.jsx";
import { Loading } from "../../../components/Loading.jsx";
import imageSawEffect from "./sag-effekt.png";

function StoryCard(props) {
  const [year, setYear] = useState("1609");

  function yearChanger(yearClicked) {
    setYear(yearClicked);
  }

  if (props.item.category === "Vannsag") {
    return (
      <div>
        <h3 style={{ color: "#333333" }}>Historiekapsel</h3>
        <h1 style={{ color: "#4A8554" }}>{props.item.category}</h1>

        {props.item.story.map((item) => {
          return (
            <>
              {year === item.year ? (
                <div>
                  <img
                    className={"card-img"}
                    src={item.image}
                    alt={"bilde av vannsag"}
                  />
                  {/*innholdet som hører til året*/}
                  <p className="font-weight-bold">{item.story}</p>
                  {/*år*/}
                  <p>{item.year}</p>
                </div>
              ) : null}
            </>
          );
        })}
        {props.item.story.map((item) => {
          return (
            <>
              <button onClick={() => yearChanger(item.year)}>
                {item.year}
              </button>
            </>
          );
        })}
      </div>
    );
  }
  return null;
}

export function History() {
  const { listHistory } = useContext(DatabaseContext);
  const { data, error, loading, reload } = useLoading(
    async () => await listHistory()
  );

  return (
    <div
      style={{
        backgroundColor: "#F2F1E8",
        height: "100vh",
      }}
    >
      <img
        style={{ float: "right" }}
        src={imageSawEffect}
        alt="bilde av vann sag effekt bakgrunn"
      />
      {loading && <Loading />}
      {error && <div>{error.toString()}</div>}
      {data && (
        // dette er parenten til hele siden
        <div className={"p-4"}>
          {/*dette er bilde av den hvite sagen i bakgrunnen*/}

          {data?.map((item) => {
            return <StoryCard item={item} />;
          })}
        </div>
      )}
    </div>
  );
}
