import "../styles/App.scss";
function Footer() {
  return (
    <footer>
      <div className="page__container upper__footer">
        <div className="row row--vertical gap--large first__column__footer">
          <div className="">
            <img src="/src/assets/icons/footer/location.png" />
            <p className="text  text--regular-16">
              Klauprechtstraße 25 76137 Karlsruhe, Germany
            </p>
          </div>
          <div className="">
            <img src="/src/assets/icons/footer/telephone.png" />
            <p className="text  text--regular-16">+49 721 358060</p>
          </div>
          <div className="">
            <img src="/src/assets/icons/footer/mail.png" />
            <p className="text text--regular-16">info@partyservice-brath.de</p>
          </div>
        </div>
        <div className="footer__logo__wrapper">
          <img className="" src="/src/assets/icons/logo/logo-with-dots.svg" />
        </div>
        <div className="row last__column__footer">
          <p className="text  text--regular-16">Besuchen Sie uns auf:</p>
          <div className="row gap--small">
            <div>
              <img src="/src/assets/icons/footer/instagram.svg" />
            </div>
            <div>
              <img src="/src/assets/icons/footer/facebook.svg" />
            </div>
            <div>
              <img src="/src/assets/icons/footer/x.svg" />
            </div>
            <div>
              <img src="/src/assets/icons/footer/youtube.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="lower__footer">
        <div className="page__container">
          <div className="row">
            <p className="text  text--regular-14">
              © 2020 by Metzgerei Heiko Brath GmbH, Deutschland
            </p>
            <p className="text  text--regular-14">
              Code and design by
              <span className="text  text--regular-14-italic">
                StudioPresent
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
