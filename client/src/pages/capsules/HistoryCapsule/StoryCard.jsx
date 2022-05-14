import React from "react";
import { useState } from "react";
import { Loading } from "../../../components/Loading.jsx";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

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
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={200}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          onReachEnd={() =>
            console.log("reached end, activate claim points-button")
          }
        >
          {userCoordinates.story.map((historyCapsule, index) => {
            return (
              <SwiperSlide key={index} className={"slide"}>
                <div /*className={"swiper-slide"}*/ key={index}>
                  {/*{year === historyCapsule.year ? (*/}
                  <div className={"slide-content"}>
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
                    <div className={"swiper-pagination"}></div>
                  </div>
                  {/*) : null}*/}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className={"d-flex justify-content-between gap-3 flex-column"}>
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
