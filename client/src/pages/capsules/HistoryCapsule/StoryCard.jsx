import React, { useContext, useEffect, useState } from "react";
import { Loading } from "../../../components/Loading.jsx";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Scrollbar } from "swiper";
import { useParams } from "react-router-dom";
import "./storycard.css";
import { UserContext } from "../../../contexts/userContext.jsx";
import { HistoryDone } from "./HistoryDone.jsx";
import { User } from "../../../application.jsx";
import { ErrorModal } from "../../../components/ErrorModal.jsx";
import { FaBook } from "react-icons/fa";

export function StoryCard({ historyCapsule, error, loading }) {
  const { id } = useParams();
  const { updateUser } = useContext(UserContext);
  const { user, setUser } = useContext(User);
  const { name, intro, walk, points } = user;
  const [count, setCount] = useState(0);
  let previousState = { ...user };

  console.log(historyCapsule.id);

  const capsuleObject = {
    id: historyCapsule.id,
    name: historyCapsule.name,
    category: historyCapsule.category,
  };

  const updateToDatabase = async () => {
    setCount(count + 1);
    await updateUser({
      user,
      finishedCapsules: capsuleObject,
      points: 20,
    });
  };

  useEffect(() => {
    if (count > 0) {
      return () => {
        if (!user.finishedCapsules.includes(capsuleObject)) {
          user.finishedCapsules.push(capsuleObject);
          user.points = user.points + 20;
          setUser({
            ...previousState,
          });
        }
      };
    }
  }, [count]);

  /*const olafHiderLeft = () =>
    (document.querySelector("#olaf-left").style.display = "none");

  const olafDisplayerLeft = () =>
    (document.querySelector("#olaf-left").style.display = "block");*/

  if (historyCapsule.name.toLowerCase() === id.toLowerCase()) {
    return (
      <div>
        <div id={"olaf-left-div"}>
          {/*<img
            id={"olaf-left"}
            src={olafLeft}
            alt="bilde av olaf på venstre side"
          />*/}
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
              <FaBook color={"var(--textColorGray)"} /> Historiekapsel
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
            spaceBetween={50}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            onReachEnd={async () => await updateToDatabase()}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {historyCapsule.story.map((capsuleStory, index) => {
              return (
                <SwiperSlide key={index} className={"slide"}>
                  {capsuleStory.done === true ? (
                    <HistoryDone
                      updateToDatabase={updateToDatabase}
                      id={historyCapsule.id}
                    />
                  ) : (
                    <div className={"swiper-slide"} key={index}>
                      <div className={"slide-content"}>
                        <div>
                          <div style={{ maxWidth: "45rem" }} className={"mt-5"}>
                            {capsuleStory.image && (
                              <section>
                                <img
                                  id={"history-image"}
                                  className={"card-img"}
                                  src={capsuleStory.image}
                                  alt={"bilde av historie-element"}
                                />
                              </section>
                            )}
                          </div>
                          <section id={"story-section"} className={"mt-4"}>
                            <p id={"story-paragraph"}>{capsuleStory.story}</p>
                          </section>
                        </div>
                        <div id={"year"}>
                          <p>{capsuleStory.year}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    );
  }
  return (
    <>
      {loading && <Loading />}
      {error && <ErrorModal error={error} />}
    </>
  );
}
