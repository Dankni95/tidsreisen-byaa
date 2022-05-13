import "swiper/swiper.min.css";
import Swiper, { Navigation, Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";

export const SwiperComponent = () => {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "vertical",
    loop: false,
  });

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};
