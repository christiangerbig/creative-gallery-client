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
    <div className="tech-stack-page-container">
      <header className="headline">
        <HeaderText
          headlines={{
            headline: t("techStack.headline"),
            subheadline: t("techStack.subheadline"),
          }}
          borderColorName={"violet"}
        />
      </header>
      <div className="tech-stack-logos-container">
        {toolsLogos.map((logo: string, index: number): JSX.Element => {
          return (
            <div className="tech-stack-logo">
              <img src={logo} alt="firm logo" key={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
