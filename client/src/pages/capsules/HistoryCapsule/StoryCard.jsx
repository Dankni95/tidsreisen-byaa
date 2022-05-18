import React from "react";
import { useState } from "react";
import { Loading } from "../../../components/Loading.jsx";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import { Swiper } from "swiper/react/swiper-react.js";
import { Scrollbar } from "swiper";
import { SwiperSlide } from "swiper/react/swiper-react.js";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

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
          <h3
            className={"text-center"}
            style={{
              color: "#333333",
              fontFamily: "Source Sans Pro Semibold",
            }}
          >
            Historiekapsel
          </h3>
          <h1
            className={"text-center"}
            style={{ color: "#4A8554", fontFamily: "Source Sans Pro Bold" }}
          >
            {userCoordinates.category}
          </h1>
        </div>
        <Swiper
          modules={[Scrollbar]}
          spaceBetween={100}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {userCoordinates.story.map((historyCapsule, index) => {
            return (
              <SwiperSlide key={index} className={"slide"}>
                {historyCapsule.done === true ? (
                  <div>
                    <div className={"d-flex justify-content-center"}>
                      <h1>Fullført historiekapselen</h1>
                    </div>
                    <div
                      style={{ outline: "1px solid red", marginTop: "20rem" }}
                      className={
                        "d-flex justify-content-center flex-column align-items-center"
                      }
                    >
                      <p>+20 poeng</p>
                      <Link to={"/map"}>
                        <Button>Finn flere</Button>
                      </Link>
                      <Link to={"/myfindings"}>
                        <Button>Mine funn</Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div /*className={"swiper-slide"}*/ key={index}>
                    {/*{year === historyCapsule.year ? (*/}
                    <div className={"slide-content"}>
                      <div style={{ maxWidth: "45rem" }} className={"mt-5"}>
                        {historyCapsule.image && (
                          <img
                            className={"card-img"}
                            src={historyCapsule.image}
                            alt={"bilde av vannsag"}
                          />
                        )}
                      </div>
                      <section
                        style={{
                          minHeight: "12rem",
                          fontFamily: "Source Sans Pro Semibold",
                        }}
                        className={"mt-4"}
                      >
                        <p>{historyCapsule.story}</p>
                      </section>
                      {/*<div>
                      <p className={"blockquote-footer"}>
                        år {historyCapsule.year}
                      </p>
                    </div>*/}
                      <div
                        style={{ margin: "1rem", background: "transparent" }}
                        className={"swiper-scrollbar text-center"}
                      >
                        {historyCapsule.year}
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/*        <div className={"d-flex justify-content-between gap-3 flex-column"}>
          {userCoordinates.story.map((buttonYear, index) => {
            return (
              <div key={index} style={{ textAlign: "center" }}>
                <button
                  style={{ textAlign: "center" }}
                  type={"button"}
                  className={"btn btn-outline-secondary fw-bold"}
                  onClick={() => yearChanger(buttonYear.year)}
                >
                  {buttonYear.year}
                </button>
              </div>
            );
          })}
        </div>*/}
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
