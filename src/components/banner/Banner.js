import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";

const Banner = ({ list = [], viewNum }) => {
  return (
    <Swiper slidesPerView={viewNum} className="swiper-container">
      {list?.map((slide, index) => (
        <SwiperSlide key={index} className="swiper-slide">
          <img src={slide} alt={"배너이미지"} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
