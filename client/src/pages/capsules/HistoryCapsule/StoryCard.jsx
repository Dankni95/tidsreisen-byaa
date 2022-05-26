import React, { useContext, useEffect } from "react";
import { Loading } from "../../../components/Loading.jsx";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import { Swiper } from "swiper/react/swiper-react.js";
import { Scrollbar } from "swiper";
import { SwiperSlide } from "swiper/react/swiper-react.js";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CapsuleButtonGreen } from "../../../components/CapsuleButton.jsx";
import olafLeft from "./olaf-left.png";
import olafInfront from "./olaf-infront.png";
import "./storycard.css";
import { UserContext } from "../../../contexts/userContext.jsx";

export function StoryCard({ user, historyCapsule, error, loading }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { updateUser } = useContext(UserContext);

  const navigateToMap = () => navigate("/map");
  const navigateToMyFindings = () => navigate("/myfindings");

  const capsuleObject = {
    name: historyCapsule.name,
    category: historyCapsule.category,
  };

  const getCapsuleNameRdyForDatabase = user.finishedCapsules.map(
    (capsuleName) => {
      return capsuleName.name;
    }
  );

  const filteredCapsuleNames = getCapsuleNameRdyForDatabase.find(
    (capsuleName) => {
      return capsuleName === historyCapsule.name;
    }
  );

  console.log(filteredCapsuleNames);

  const updateToDatabase = async () => {
    if (filteredCapsuleNames !== historyCapsule.name) {
      await updateUser({
        user,
        finishedCapsules: capsuleObject,
        points: 20,
      });
    }
  };

  const olafHiderLeft = () =>
    (document.querySelector("#olaf-left").style.display = "none");

  const olafDisplayerLeft = () =>
    (document.querySelector("#olaf-left").style.display = "block");

  if (historyCapsule.name.toLowerCase() === id.toLowerCase()) {
    return (
      <div>
        <div id={"olaf-left-div"}>
          <img
            id={"olaf-left"}
            src={olafLeft}
            alt="bilde av olaf på venstre side"
          />
        </div>
        <div className={"p-4"} style={{ position: "relative", zIndex: "0" }}>
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
              {historyCapsule.name}
            </h1>
          </div>
          <Swiper
            modules={[Scrollbar]}
            centeredSlides={true}
            spaceBetween={100}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            onSlideNextTransitionStart={() => olafHiderLeft()}
            onReachBeginning={() => olafDisplayerLeft()}
            onReachEnd={async () => await updateToDatabase()}
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
                        id={"olaf-infront-div"}
                        className={
                          "w-100 h-50 d-flex align-content-center flex-row justify-content-center gap-3"
                        }
                      >
                        <div style={{ marginTop: "3rem" }}>
                          <img
                            height={200}
                            /*className={"img-fluid"}*/
                            src={olafInfront}
                            alt="bilde av olaf på fullført side"
                          />
                        </div>

                        <div
                          style={{ marginTop: "2rem" }}
                          className={"flex-shrink-1"}
                        >
                          <div className="left-point"></div>
                          <p id={"finish-paragraph"}>
                            Godt jobbet!
                            <br /> Du har gjennomført en kapsel og fått poeng
                            for det, og kanskje til og med lært noe nytt om
                            Byåa!
                          </p>
                        </div>
                      </div>
                      <div
                        className={
                          "d-flex justify-content-center flex-column align-items-center"
                        }
                      >
                        <div className={"mb-5"}>
                          <p id={"history-points"}>+20 poeng</p>
                        </div>
                        <div className={"d-flex flex-column"}>
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
                    <div className={"swiper-slide"} key={index}>
                      {/*{year === historyCapsule.year ? (*/}
                      <div className={"slide-content"}>
                        <div>
                          <div style={{ maxWidth: "45rem" }} className={"mt-5"}>
                            {historyCapsule.image && (
                              <section>
                                <img
                                  id={"history-image"}
                                  className={"card-img"}
                                  src={historyCapsule.image}
                                  alt={"bilde av historie-element"}
                                />
                              </section>
                            )}
                          </div>
                          <section id={"story-section"} className={"mt-4"}>
                            <p id={"story-paragraph"}>{historyCapsule.story}</p>
                          </section>
                        </div>
                        <div id={"year"}>
                          <p>{historyCapsule.year}</p>
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
