import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import RecommendationCard from "./RecommendationCard";
import "swiper/css/bundle";

const recommendationItems = [
  {
    image: "/src/assets/slider-section/grillicon.svg",
    text: " Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmo tempor Stuttgart ut labore et dolore magna Luftballons Ut Turnbeutel nostrud exercitation ullamco .",
    position: "Halling Tobias",
    name: "Koch",
  },
  {
    image: "/src/assets/slider-section/grillicon.svg",
    text: " Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmo tempor Stuttgart ut labore et dolore magna Luftballons Ut Turnbeutel nostrud exercitation ullamco .",
    position: "Halling Tobias",
    name: "Koch",
  },
  {
    image: "/src/assets/slider-section/grillicon.svg",
    text: " Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmo tempor Stuttgart ut labore et dolore magna Luftballons Ut Turnbeutel nostrud exercitation ullamco .",
    position: "Halling Tobias",
    name: "Kochs",
  },
];

function SliderComp() {
  return (
    <div className="slider__wrapper">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ width: "100%", height: "100%" }}
      >
        {recommendationItems.map((element, _i) => (
          <SwiperSlide key={_i}>
            <RecommendationCard
              image={element.image}
              text={element.text}
              name={element.name}
              position={element.position}
            ></RecommendationCard>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
}

export default SliderComp;
