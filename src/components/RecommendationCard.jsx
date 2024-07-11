function RecommendationCard({ image, text, name, position }) {
  return (
    <div className="slider__card">
      <img src="/src/assets/slider-section/znak.svg" className="quotes" />
      <div className="row row--vertical gap--large">
        <img src={image} alt="" className="slider__card__icon" />
        <img
          src="/src/assets/slider-section/zvezdice.svg"
          alt=""
          className="slider__card__rating"
        />
        <p className="text text--regular-16">{text}</p>
      </div>
      <div className="row row--vertical">
        <p className="text text--regular-16">{name}</p>
        <p className="text text--300-16">{position}</p>
      </div>
    </div>
  );
}

export default RecommendationCard;
