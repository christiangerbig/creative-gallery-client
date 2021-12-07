import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import Logo from "../components/Logo";

const Home = (): JSX.Element => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <div className="homePageContainer">
      <Logo />
      <div className="homeIntroText">
        <h1 className="textFat"> Hi, I'm Christian </h1>
        <h2 className="textBig"> A passionate Web Developer </h2>
      </div>
    </div>
  );
};

export default Home;
