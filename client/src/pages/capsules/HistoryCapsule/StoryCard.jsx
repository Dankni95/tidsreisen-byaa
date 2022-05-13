import React from "react";
import { useState } from "react";
import { Loading } from "../../../components/Loading.jsx";

export function StoryCard({ userCoordinates, error, loading }) {
  const [year, setYear] = useState("1609");

  function yearChanger(yearClicked) {
    setYear(yearClicked);
  }

  /**
   * her blir denne === en eller annen koordinator vil jeg tro er best,
   * som er tilsvarende koordinator som bruker
   * klikker på av historiekapsel på kartet,
   * blir passet som prop gjennom application.jsx potensielt
   * */

  if (userCoordinates.category === "Vannsag") {
    return (
      <div
        /*className={"swiper-wrapper"}*/
        style={{ position: "relative", zIndex: "0" }}
      >
        <div style={{ position: "relative" }}>
          <h3 className={"text-center"} style={{ color: "#333333" }}>
            Historiekapsel
          </h3>
          <h1 className={"text-center"} style={{ color: "#4A8554" }}>
            {userCoordinates.category}
          </h1>
        </div>
        {userCoordinates.story.map((historyCapsule, index) => {
          return (
            <div /*className={"swiper-slide"}*/ key={index}>
              {year === historyCapsule.year ? (
                <div>
                  <div style={{ maxWidth: "45rem" }} className={"mt-5"}>
                    <img
                      className={"card-img"}
                      src={historyCapsule.image}
                      alt={"bilde av vannsag"}
                    />
                  </div>
                  <section
                    style={{ minHeight: "12rem" }}
                    className={"mt-4 fw-bold"}
                  >
                    <p>{historyCapsule.story}</p>
                  </section>
                  <div>
                    <p className={"blockquote-footer"}>
                      år {historyCapsule.year}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
        <div className={"d-flex justify-content-between gap-3 flex-column"}>
          {userCoordinates.story.map((historyCapsule, index) => {
            return (
              <div key={index} style={{ textAlign: "center" }}>
                <button
                  style={{ textAlign: "center" }}
                  type={"button"}
                  className={"btn btn-outline-secondary fw-bold"}
                  onClick={() => yearChanger(historyCapsule.year)}
                >
                  {historyCapsule.year}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <>
      {loading && <Loading />}
      {error && <div>{error.toString()}</div>}
    </>
  );
}
