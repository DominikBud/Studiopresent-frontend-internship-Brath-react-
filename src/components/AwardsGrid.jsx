import SingleAward from "./SingleAward";

const awardsElements = [
  {
    text: "Tollit argumentum genau Saepe lobortis",
    image: "/src/assets/icons/awards/award1.svg",
  },
  {
    text: "Tollit argumentum genau Saepe lobortis",
    image: "/src/assets/icons/awards/award2.svg",
  },
  {
    text: "Tollit argumentum genau Saepe lobortis",
    image: "/src/assets/icons/awards/award3.svg",
  },
  {
    text: "Tollit argumentum genau Saepe lobortis",
    image: "/src/assets/icons/awards/award4.svg",
  },
];

function AwardsGrid() {
  return (
    <div className="awards__grid">
      <div className="first__cell--awards">
        <h2 className="text  text--bold-32">Auszeichnungen</h2>
      </div>
      {awardsElements.map((el, _i) => (
        <SingleAward image={el.image} text={el.text} key={_i}></SingleAward>
      ))}
    </div>
  );
}

export default AwardsGrid;
