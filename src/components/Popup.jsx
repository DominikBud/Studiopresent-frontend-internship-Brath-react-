import { useEffect, useState } from "react";

function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const hasShownPopup = localStorage.getItem("hasShownPopup");

    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem("hasShownPopup", "true");
      }, 30000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {showPopup && (
        <div className="popup">
          <form className="form__popup">
            <p className="text text--bold-22 dark__mode">
              Join our newsletter!
            </p>
            <input type="text dark__mode" placeholder="Enter your email" />
            <button className="default__button--red">Join Newsletter</button>
            <button
              className="default__button--red close__button"
              onClick={() => closePopup()}
            >
              Close
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Popup;
