import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

const Home = (): JSX.Element => {
  // Scroll to top as soon as page loads
  useEffect(() => scroll.scrollToTop(), []);

  return (
    <div className="homePageContainer">
      <div className="homeLogoContainer blurrIn">
        <div className="homeLogoSubContainer">
          <div className="homeLogoLetterOutlineC">
            <div className="homeLogoLetterInlineC"></div>
          </div>
          <div className="homeLogoLetterOutlineG">
            <div className="homeLogoLetterInlineG">
              <div className="homeLogoLetterBoxG">
                <div className="homeLogoLetterBoxG2"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homeIntroText">
        <h1 className="textFat"> Hi, I'm Christian </h1>
        <h2 className="textBig"> A passionate Web Developer </h2>
      </div>
    </div>
  );
};

export default Home;
