import "../styles/App.scss";
import FoodNavigationLink from "./FoodNavigationLink";

const foodNavigationElements = [
  {
    image: "/src/assets/gallery-section/gallery1.svg",
    text: "Dry aged",
  },
  {
    image: "/src/assets/gallery-section/gallery2.svg",
    text: "Die Metzgere",
  },
  {
    image: "/src/assets/gallery-section/gallery3.svg",
    text: "Events/Kurse",
  },
  {
    image: "/src/assets/gallery-section/gallery4.svg",
    text: "Impressum",
  },
];

function FoodNavigationGrid() {
  return (
    <div className="foodnav__grid">
      {foodNavigationElements.map((element, _i) => (
        <FoodNavigationLink
          key={_i}
          text={element.text}
          image={element.image}
        ></FoodNavigationLink>
      ))}
    </div>
  );
}

export default FoodNavigationGrid;
