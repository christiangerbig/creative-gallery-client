import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import HeaderText from "../components/HeaderText";
import toolsLogos from "../lib/toolsLogos";

const TechStack = (): JSX.Element => {
  const { t } = useTranslation();

  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <div className="techStackPageContainer">
      <header className="headline">
        <HeaderText
          headlines={{
            headline: t("techStack.headline"),
            subheadline: t("techStack.subheadline"),
          }}
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
