import { useState } from "react";

function BurgerMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="mobile__menu__wrapper">
      <a className="mobile__menu__icon" onClick={() => setShowMenu(!showMenu)}>
        <img src="/src/assets/hamburger-icon.png" />
      </a>
      {showMenu && (
        <div className="menu__links__wrapper ">
          <a className="text  text--regular-16">Die Metzgerei</a>
          <a className="text  text--regular-16">Dry Aged</a>
          <a className="text  text--regular-16">Fleischversand</a>
          <a className="text  text--regular-16">Events/Kurse</a>
          <a className="text  text--regular-16">Partyservice</a>
          <a className="text  text--regular-16">Tagesessen</a>
          <a className="text  text--regular-16">Impressum</a>
          <a className="text  text--regular-16">Kontakt</a>
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;
