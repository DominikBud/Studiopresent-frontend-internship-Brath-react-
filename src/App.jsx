import "./styles/App.scss";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import BreakSection from "./components/BreakSection";
import FoodNavigationGrid from "./components/FoodNavigationGrid";
import AwardsGrid from "./components/AwardsGrid";
import GalleryGrid from "./components/GalleryGrid";
import MainButton from "./components/MainButton";
import SplitSection from "./components/SplitSection";
import Popup from "./components/Popup";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Main>
        <Popup></Popup>
        <section className="hero__section">
          <div className="hero__slide__wrapper">
            <img className="hero__image" src="/src/assets/hero-image.svg" />
            <div className="content-wrapper">
              <div className="row row--vertical">
                <h1 className="text text--bold-38">
                  Heiko Brath Metzgermeister
                </h1>
                <p className="text text--300-16">
                  Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et.
                  Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per
                  ne, nam Aperol Spritz probatus pertinax.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery__section">
          <div className="page__container">
            <div className="gallery__columns">
              <div className="column--12">
                <GalleryGrid></GalleryGrid>
              </div>
              <div className="column--12">
                <div className="row row--vertical gap--none">
                  <h2 className="text  text--bold-32">Dry aged</h2>
                  <p className="text  text--bold-22">Alte Wutz, Dry Aged</p>
                </div>
                <p className="text  text--300-16">
                  Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et.
                  Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per
                  ne, nam Aperol Spritz probatus pertinax.
                </p>
                <p className="text  text--300-16">
                  Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et.
                  Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per
                  ne, nam Aperol Spritz probatus pertinax.
                </p>
                <div className="row">
                  <MainButton
                    href=""
                    variation="red"
                    text="Grillkurs"
                  ></MainButton>
                  <MainButton
                    href=""
                    variation="red"
                    text="Grillkurs"
                  ></MainButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SplitSection image={"/src/assets/food-5050.svg"}>
          <div className="row row--vertical gap--xl">
            <h2 className="text  text--bold-32">
              Buchen Sie den Grillkurs jetzt
            </h2>
            <ul>
              <li className="text  text--300-16">professioneller Lehrer</li>
              <li className="text  text--300-16">ausgezeichneter Metzger</li>
              <li className="text  text--300-16">1 Tag</li>
              <li className="text  text--300-16">
                lernen Sie die Kunst des Grillens
              </li>
            </ul>
            <button href="" className="default__button--white">
              Grillkurs
            </button>
          </div>
        </SplitSection>
        <section className="section">
          <div className="page__container">
            <div className="row row--vertical gap--xl">
              <div className="row row--vertical gap--none">
                <h2 className="text  text--bold-32">Dry aged</h2>
                <p className="text  text--bold-22">Alte Wutz, Dry Aged</p>
              </div>
              <div className="row row--vertical row--text-center">
                <p className="text  text--300-16">
                  Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et.
                  Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per
                  ne, nam Aperol Spritz probatus pertinax.
                </p>
                <p className="text text--300-16">
                  Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et.
                  Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per
                  ne, nam Aperol Spritz probatus pertinax.
                </p>
              </div>
              <MainButton variation="red" text="Grillkurs"></MainButton>
            </div>
          </div>
        </section>
        <BreakSection></BreakSection>
        <section className="section">
          <div className="page__container">
            <FoodNavigationGrid></FoodNavigationGrid>
          </div>
        </section>

        <section className="section delivery__section">
          <div className="page__container">
            <div className="row row--vertical gap--xl">
              <h2 className="text text--bold-32">Fleischversand</h2>
              <button className="default__button--white">
                Jetzt bestellen
              </button>
            </div>
          </div>
        </section>
        <section className="section jre__section">
          <div className="page__container">
            <div className="row row--vertical gap--xl">
              <img src="src/assets/icons/logo/jre.svg" className="jre__logo" />
              <div className="row row--vertical row--text-center gap--xl">
                <h2 className="text  text--bold-32">
                  Metzgerei Brath ist Mitglied im Genussnetzwerk
                </h2>
                <button className="default__button--red">Gehen zu site</button>
              </div>
            </div>
          </div>
        </section>

        <BreakSection></BreakSection>

        <section className="section">
          <div className="page__container">
            <AwardsGrid></AwardsGrid>
          </div>
        </section>
        <BreakSection></BreakSection>
      </Main>

      <Footer></Footer>
    </>
  );
}

export default App;
