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
import SliderComp from "./components/SliderComp";

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
                <p className="text text--regular-16">
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
              <div className="column--12 column--aligned-left">
                <div className="row row--vertical gap--none">
                  <h2 className="text  text--bold-32">Dry aged</h2>
                  <p className="text  text--bold-22">Alte Wutz, Dry Aged</p>
                </div>
                <p className="text  text--regular-16">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up o
                </p>
                <p className="text  text--regular-16">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum pas
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
          <div className="row row--vertical gap--xl ">
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
                <h2 className="text  text--bold-32">Das Handwerk</h2>
                <p className="text  text--bold-22">
                  alles über unsere Hausgemachte Produkte
                </p>
              </div>
              <div className="row row--vertical row--text-center information__wrapper">
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
        <section className="section foodNav__section">
          <div className="page__container">
            <FoodNavigationGrid></FoodNavigationGrid>
          </div>
        </section>
        <SplitSection image={"/src/assets/spices-5050.svg"}>
          <div className="split__column spices__column split__column--padding-backgroundColor">
            <div className="row row--vertical gap--xl">
              <div className="row row--vertical">
                <h2 className="text  text--bold-32">
                  Buchen Sie den Grillkurs jetzt
                </h2>
                <p className="text  text--bold-22">
                  Turnbeutel nostrudexercitation ullamco Sprechen Sie deutsch
                </p>
              </div>
              <div className="row row--vertical row--text-center gap--xl">
                <p className="text  text--300-16">
                  Contrary to popular belief, Lorem Ipsum is not simply random a
                  Latin professor at Hampden-Sydney College in Virginia, looked
                  up one of the more obscure Latin words, consectetur, written
                  in 45 BC. This book is a treatise on the theory of ethics,
                  very popular during the Renaissance. The first line of Lorem
                  Ipsum,Lorem ipsum dolor sit amet.., comes from a line in
                  section 1.10.32.
                </p>
                <p className="text  text--300-16">
                  Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et.
                  Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per
                  ne, nam Aperol Spritz probatus pertinax.
                </p>
              </div>
            </div>
          </div>
        </SplitSection>
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
        <section className="section">
          <div className="page__container">
            <div className="row row--vertical gap--xl">
              <div className="row row--vertical">
                <p className="text text--bold-22 text--opacity">Empfehlungs</p>
                <h2 className="text text--bold-32">
                  Was die Leute über uns sagen
                </h2>
              </div>
              <SliderComp></SliderComp>
              <button className="default__button--red">Gilsdkem</button>
            </div>
          </div>
        </section>
      </Main>

      <Footer></Footer>
    </>
  );
}

export default App;
