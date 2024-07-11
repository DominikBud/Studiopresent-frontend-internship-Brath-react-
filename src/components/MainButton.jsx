function MainButton({ variation, text }) {
  return (
    <button
      className={`${
        variation === "red" ? "default__button--red " : "default__button--white"
      }`}
    >
      {text}
    </button>
  );
}

export default MainButton;
