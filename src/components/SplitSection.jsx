function SplitSection({ image, children }) {
  return (
    <section className="split__section">
      <div className="split__column split__column--padding-backgroundColor">
        {children}
      </div>
      <div className="split__column">
        <img className="split__img" src={image} />
      </div>
    </section>
  );
}

export default SplitSection;
