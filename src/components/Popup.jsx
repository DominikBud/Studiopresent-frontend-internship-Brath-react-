import { useEffect, useState } from "react";

function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const hasShownPopup = localStorage.getItem("hasShownPopup");

    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        document.body.style.overflow = "hidden";

        localStorage.setItem("hasShownPopup", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {showPopup && (
        <div className="popup">
          <form className="form__popup">
            <div className="row">
              <img src="/src/assets/icons/logo/bl-withdots.svg" />
              <p className="text text--bold-32">Join our newsletter!</p>
            </div>
            <input type="text dark__mode" placeholder="Enter your name" />
            <input type="text dark__mode" placeholder="Enter your email" />

            <div className="row">
              <button className="default__button--red" onClick={closePopup}>
                Join Newsletter
              </button>
              <button className="default__button--red" onClick={closePopup}>
                Close
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Popup;
