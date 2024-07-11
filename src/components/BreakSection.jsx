import "../styles/App.scss";

function BreakSection() {
  return (
    <section className="break__section">
      <div className="page__container">
        <div className="gray__line"></div>
        <div className="bw__logo__wrapper">
          <img
            src="/src/assets/icons/logo/bl-withdots.svg"
            className="bw__logo"
          />
        </div>
        <div className="gray__line"></div>
      </div>
    </section>
  );
}

export default BreakSection;
