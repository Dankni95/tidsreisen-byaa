import React from "react";
import { Loading } from "../../../components/Loading.jsx";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import { Swiper } from "swiper/react/swiper-react.js";
import { Scrollbar } from "swiper";
import { SwiperSlide } from "swiper/react/swiper-react.js";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CapsuleButtonGreen } from "../../../components/CapsuleButton.jsx";

export function StoryCard({ historyCapsule, error, loading }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const navigateToMap = () => navigate("/map");
  const navigateToMyFindings = () => navigate("/myfindings");

  if (historyCapsule.category.toLowerCase() === id.toLowerCase()) {
    return (
      <div
        /*className={"swiper-wrapper"}*/
        style={{ position: "relative", zIndex: "0" }}
      >
        <div style={{ position: "relative" }}>
          <h3
            className={"text-center"}
            style={{
              color: "var(--textColorGray)",
              fontFamily: "Source Sans Pro Semibold",
            }}
          >
            Historiekapsel
          </h3>
          <h1
            className={"text-center"}
            style={{
              color: "var(--backgroundColorGreeny)",
              fontFamily: "Source Sans Pro Bold",
            }}
          >
            {historyCapsule.category}
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
          {historyCapsule.story.map((historyCapsule, index) => {
            return (
              <SwiperSlide key={index} className={"slide"}>
                {historyCapsule.done === true ? (
                  <div style={{ height: "35rem" }}>
                    <div className={"d-flex justify-content-center mt-3"}>
                      <h1
                        style={{
                          fontSize: "1.5rem",
                          fontFamily: "Source Sans Pro Bold",
                          color: "var(--backgroundColorGreeny)",
                        }}
                      >
                        Fullført historiekapselen!
                      </h1>
                    </div>
                    <div
                      className={
                        "d-flex justify-content-center flex-column align-items-center h-100"
                      }
                    >
                      <div className={"mb-5"}>
                        <p
                          style={{
                            fontFamily: "Source Sans Pro Semibold",
                            fontSize: "1.7rem",
                          }}
                        >
                          +20 poeng
                        </p>
                      </div>
                      <div className={"d-flex flex-column mt-5"}>
                        <div className={"mb-3"}>
                          <CapsuleButtonGreen
                            onClick={navigateToMap}
                            buttonText={"Finn flere"}
                          />
                        </div>
                        <div>
                          <CapsuleButtonGreen
                            onClick={navigateToMyFindings}
                            buttonText={"Mine funn"}
                          />
                        </div>
                      </div>
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
