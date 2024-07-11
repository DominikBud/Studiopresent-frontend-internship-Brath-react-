function FoodNavigationLink({ image, text }) {
  return (
    <a>
      <img src={image} />
      <div>
        <p className="text text--bold-16">{text}</p>
      </div>
    </a>
  );
}

export default FoodNavigationLink;
