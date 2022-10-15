import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import HeaderText from "../components/helpers/HeaderText";
import toolsLogos from "../lib/toolsLogos";

const TechStack = (): JSX.Element => {
  const { t } = useTranslation();

  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <div className="tech-stack-page-container" data-cy="tech-stack-page">
      <header className="headline">
        <HeaderText
          headlines={{
            headline: t("texts.techStack.headline"),
            subheadline: t("texts.techStack.subheadline"),
          }}
          borderColorName={"violet"}
        />
      </header>
      <div className="tech-stack-logos-container">
        {toolsLogos.map((logo: string, index: number): JSX.Element => {
          return (
            <div className="tech-stack-logo">
              <img
                src={logo}
                loading="lazy"
                alt="firm logo"
                key={`${logo}${index.toString()}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
