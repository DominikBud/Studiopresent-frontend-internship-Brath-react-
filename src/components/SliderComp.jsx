import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import RecommendationCard from "./RecommendationCard";

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
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        1024: {
          slidesPerView: 3,
        },
      }}
      modules={[Navigation, Pagination]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
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
    </Swiper>
  );
}

export default SliderComp;
