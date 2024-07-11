import { useDarkMode } from "../contexts/DarkModeContext";
import "../styles/App.scss";
import BurgerMenu from "./BurgerMenu";

function Navigation() {
  const { darkMode, changeTheme } = useDarkMode();

  return (
    <nav className="nav__wrapper">
      <div className="top__wrapper">
        <div className="nav__logo__wrapper">
          <img
            className="nav__logo"
            src="/src/assets/icons/logo/logo-with-dots.svg"
          />
        </div>
        <div className="content__wrapper__top">
          <div className="nav__links__wrapper">
            <a className="text  text--regular-16">Die Metzgerei</a>
            <a className="text  text--regular-16">Dry Aged</a>
            <a className="text  text--regular-16">Fleischversand</a>
            <a className="text  text--regular-16">Events/Kurse</a>
            <a className="text  text--regular-16">Partyservice</a>
            <a className="text  text--regular-16">Tagesessen</a>
            <a className="text  text--regular-16">Impressum</a>
            <a className="text  text--regular-16" onClick={changeTheme}>
              DarkMode
            </a>
          </div>

          <a className="pdf__link">
            <div className="row">
              <img className="pdf__icon" src="/src/assets/icons/pdf-icon.svg" />
              <span className="text text--bold-14 ">download</span>
            </div>
          </a>

          <BurgerMenu></BurgerMenu>
        </div>
      </div>
      <div
        className={`bottom__wrapper ${darkMode == true ? "dark__mode" : ""}`}
      >
        <div className="content__wrapper__bottom">
          <div className="row">
            <img className="img__clock" src="" />
            <p
              className={`text  text--regular-14 ${
                darkMode == true ? "dark__mode" : ""
              }`}
            >
              <span className="text  text--bold-14">Opens: </span>Di. - Fr.:
              07:00-13:00 und 15:00-18:30. Sa.: 07:30 - 12:30
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
