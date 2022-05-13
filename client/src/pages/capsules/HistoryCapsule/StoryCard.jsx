import React from "react";
import { useState } from "react";

export function StoryCard(props) {
  const [year, setYear] = useState("1609");

  function yearChanger(yearClicked) {
    setYear(yearClicked);
  }

  if (props.item.category === "Vannsag") {
    return (
      <div>
        <div style={{ position: "relative" }}>
          <h3 className={"text-center"} style={{ color: "#333333" }}>
            Historiekapsel
          </h3>
          <h1 className={"text-center"} style={{ color: "#4A8554" }}>
            {props.item.category}
          </h1>
        </div>
        {props.item.story.map((item, index) => {
          return (
            <div key={index}>
              {year === item.year ? (
                <div>
                  <div className={"mt-5 position-relative"}>
                    <img
                      className={"card-img"}
                      src={item.image}
                      alt={"bilde av vannsag"}
                    />
                  </div>
                  <section style={{ minHeight: "12rem" }} className={"mt-4"}>
                    <p>
                      <strong>{item.story}</strong>
                    </p>
                  </section>
                  <div>
                    <p className={"blockquote-footer"}>år {item.year}</p>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
        <div className={"d-flex justify-content-center"}>
          {props.item.story.map((item, index) => {
            return (
              <div key={index} className={"m-3"}>
                <button
                  className={"btn btn-light data-mdb-ripple-color=dark w-100"}
                  onClick={() => yearChanger(item.year)}
                >
                  {item.year}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return null;
}
