import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import reactLogo from "../images/React-Logo.svg";
import reduxLogo from "../images/Redux-Logo.svg";
import javaScriptES6Logo from "../images/JavaScript(ES6)-Logo.svg";
import typeScriptLogo from "../images/TypeScript-Logo.svg";
import sassLogo from "../images/Sass-Logo.svg";
import cloudinaryLogo from "../images/Cloudinary-Logo.svg";
import bootstrapLogo from "../images/Bootstrap-Logo.svg";
import npmLogo from "../images/NPM-Logo.svg";
import mongoDBLogo from "../images/MongoDB-Logo.svg";
import nodeJsLogo from "../images/NodeJS-Logo.svg";
import gitHubLogo from "../images/GitHub-Logo.svg";
import visualStudioCodeLogo from "../images/Visual-Studio-Code-Logo.svg";

type LogosList = string[];

const TechStack = (): JSX.Element => {
  const logosList: LogosList = [
    reactLogo,
    reduxLogo,
    nodeJsLogo,
    javaScriptES6Logo,
    typeScriptLogo,
    sassLogo,
    bootstrapLogo,
    mongoDBLogo,
    cloudinaryLogo,
    npmLogo,
    gitHubLogo,
    visualStudioCodeLogo,
  ];

  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <div className="techStackPageContainer">
      <header className="headline">
        <div className="headerText violetBorder">
          <h1 className="textFat"> The tech stack </h1>
          <h2 className="textBig"> I use in my projects </h2>
        </div>
      </header>
      <div className="techStackLogosContainer">
        {logosList.map((logo: string, index: number): JSX.Element => {
          return <img src={logo} alt="firm logo" key={index} />;
        })}
      </div>
    </div>
  );
};

export default TechStack;
