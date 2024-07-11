import "../styles/App.scss";
import FoodNavigationLink from "./FoodNavigationLink";

const foodNavigationElements = [
  {
    image: "/src/assets/food-5050.svg",
    text: "Sample",
  },
  {
    image: "/src/assets/food-5050.svg",
    text: "Sample",
  },
  {
    image: "/src/assets/food-5050.svg",
    text: "Sample",
  },
  {
    image: "/src/assets/food-5050.svg",
    text: "Sample",
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
