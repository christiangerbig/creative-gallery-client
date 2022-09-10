import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import Logo from "../components/Logo";
import HeaderText from "../components/HeaderText";

const Home = (): JSX.Element => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <div className="homePageContainer">
      <Logo />
      <HeaderText
        text={["Hi, I'm Christian", "A passionate Web Developer"]}
        borderColorName={""}
      />
    </div>
  );
};

export default Home;
