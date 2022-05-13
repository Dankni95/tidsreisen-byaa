import React, { useContext, useState } from "react";
import * as PropTypes from "prop-types";
import { DatabaseContext } from "../../../contexts/databaseContext.jsx";
import { useLoading } from "../../../helpers/useLoading.jsx";
import { Loading } from "../../../components/Loading.jsx";
import imageVannsag from "./vannsag.png";
import imageSagEffect from "./sag-effekt.png";

function StoryCard(props) {
  const [year, setYear] = useState("1609");

  function yearChanger(yearClicked) {
    setYear(yearClicked);
  }

  if (props.item.category === "Vannsag") {
    return (
      <div>
        <h1>{props.item.category}</h1>
        {/*bilde*/}

        {props.item.story.map((item) => {
          return (
            <>
              {year === item.year ? (
                <div>
                  <img src={imageVannsag} alt={"bilde av vannsag"} />
                  {/*innholdet som hører til året*/}
                  <p>{item.story}</p>
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

StoryCard.propTypes = {
  item: PropTypes.any,
  prop1: PropTypes.func,
};

export function History() {
  const { listHistory } = useContext(DatabaseContext);
  const { data, error, loading, reload } = useLoading(
    async () => await listHistory()
  );

  return (
    <>
      {loading && <Loading />}
      {error && <div>{error.toString()}</div>}
      {data && (
        // dette er parenten til hele siden
        <div style={{ backgroundColor: "#F2F1E8", height: "100vh" }}>
          {/*dette er bilde av den hvite sagen i bakgrunnen*/}
          <img
            style={{ float: "right" }}
            src={imageSagEffect}
            alt="image of white vannsag effect"
          />
          <h3>Historiekapsel</h3>
          {data?.map((item) => {
            return <StoryCard item={item} />;
          })}
        </div>
      )}
    </>
  );
}
