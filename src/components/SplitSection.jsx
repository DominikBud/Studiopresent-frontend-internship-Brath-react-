import Parallax from "react-rellax";

function SplitSection({ image, children }) {
  return (
    <section className="split__section">
      <div className="split__column split__column--padding-backgroundColor">
        {children}
      </div>
      <div className="split__column ">
        <Parallax className="rellax-image" speed={-2}>
          {" "}
          <img className="split__img" src={image} />
        </Parallax>
      </div>
    </section>
  );
}

export default SplitSection;
