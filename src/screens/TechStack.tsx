import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import HeaderText from "../components/HeaderText";
import toolsLogos from "../lib/toolsLogos";

const TechStack = (): JSX.Element => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <div className="techStackPageContainer">
      <header className="headline">
        <HeaderText
          text={["The tech stack", "I use in my projects"]}
          borderColorName={"violet"}
        />
      </header>
      <div className="techStackLogosContainer">
        {toolsLogos.map((logo: string, index: number): JSX.Element => {
          return <img src={logo} alt="firm logo" key={index} />;
        })}
      </div>
    </div>
  );
};

export default TechStack;
