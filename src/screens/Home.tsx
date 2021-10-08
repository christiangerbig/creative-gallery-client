import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

const Home = () => {
  // Scroll to top as soon as page loads
  useEffect(() => scroll.scrollToTop(), []);

  return (
    <div className="homePageContainer">
      <header>
        <div className="headerText blueBorder">
          <h1 className="textFat"> Hi, I'm Christian </h1>
          <h2 className="textBig"> A passionate Web Developer </h2>
        </div>
      </header>
    </div>
  );
};

export default Home;
