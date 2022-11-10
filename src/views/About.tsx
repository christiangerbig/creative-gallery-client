import { useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../app/hooks";
import { setNavItem } from "../reducer/creativeGallerySlice";
import HeaderText from "../components/helpers/HeaderText";

const About = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { scrollToTop } = scroll;

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="about-page-container" data-cy="about-page">
      <header className="headline">
        <HeaderText
          headlines={{
            headline: t("texts.about.headline"),
            subheadline: t("texts.about.subheadline"),
          }}
          borderColorName={"green"}
        />
      </header>
      <div className="about-text-container">
        <div className="about-text-colum-container">
          <article>
            <header>
              <h3>{t("texts.about.personalDetails.headline")}</h3>
            </header>
            <p>{t("texts.about.personalDetails.paragraph1")}</p>
            <p>{t("texts.about.personalDetails.paragraph2")}</p>
            <p>{t("texts.about.personalDetails.paragraph3")}</p>
            <p>{t("texts.about.personalDetails.paragraph4")}</p>
          </article>
        </div>
        <div className="about-text-colum-container">
          <article>
            <header>
              <h3>{t("texts.about.experience.headline")}</h3>
            </header>
            <p>{t("texts.about.experience.paragraph1")}</p>
            <p>{t("texts.about.experience.paragraph2")}</p>
            <p>{t("texts.about.experience.paragraph3")}</p>
            <p>{t("texts.about.experience.paragraph4")}</p>
            <p>
              <span
                className="about-contact-link"
                onClick={(): void => {
                  dispatch(setNavItem("contact"));
                }}
              >
                <Link to={{ pathname: "/contact" }} data-cy="alt-contact-link">
                  {t("texts.about.experience.contact")}
                </Link>
              </span>
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default About;
