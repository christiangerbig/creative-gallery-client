import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import { toolsLogos } from "../lib/toolsLogos";
import HeaderText from "../components/helpers/HeaderText";

const TechStack = (): JSX.Element => {
  const { t } = useTranslation();
  const { scrollToTop } = scroll;

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="tech-stack" data-cy="tech-stack-page">
      <header className="header">
        <HeaderText
          headlines={{
            headline: t("texts.techStack.headline"),
            subheadline: t("texts.techStack.subheadline"),
          }}
          borderColorName={"violet"}
        />
      </header>
      <div className="tech-stack__logo-collection">
        {toolsLogos.map(
          (logo: string, index: number): JSX.Element => (
            <div key={`${logo}${index.toString()}`} className="tech-stack-logo">
              <img
                src={logo}
                loading="lazy"
                alt="firm logo"
                className="tech-stack-logo__image"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TechStack;
