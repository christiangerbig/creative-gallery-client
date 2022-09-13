import { useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../hooks";
import { setMenuItem } from "../reducer/creativeGallerySlice";
import HeaderText from "../components/HeaderText";

const About = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <div className="about-page-container">
      <header className="headline">
        <HeaderText
          headlines={{
            headline: t("about.headline"),
            subheadline: t("about.subheadline"),
          }}
          borderColorName={"green"}
        />
      </header>
      <div className="about-text-container">
        <div className="about-text-colum-container">
          <article>
            <header>
              <h3> {t("about.personalDetails.headline")} </h3>
            </header>
            <p> {t("about.personalDetails.paragraph1")} </p>
            <p> {t("about.personalDetails.paragraph2")} </p>
            <p> {t("about.personalDetails.paragraph3")} </p>
            <p> {t("about.personalDetails.paragraph4")} </p>
          </article>
        </div>
        <div className="about-text-colum-container">
          <article>
            <header>
              <h3> {t("about.experience.headline")} </h3>
            </header>
            <p> {t("about.experience.paragraph1")} </p>
            <p> {t("about.experience.paragraph2")} </p>
            <p> {t("about.experience.paragraph3")} </p>
            <p> {t("about.experience.paragraph4")} </p>
            <p>
              <span
                className="about-contact-link"
                onClick={() => dispatch(setMenuItem("contact"))}
              >
                <Link to={{ pathname: "/contact" }}>
                  {" "}
                  {t("about.experience.contact")}{" "}
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
