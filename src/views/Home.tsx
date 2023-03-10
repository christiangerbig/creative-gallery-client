import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import Logo from "../components/home/HomeLogo";
import HeaderText from "../components/helpers/HeaderText";

const Home = (): JSX.Element => {
  const { t } = useTranslation();
  const { scrollToTop } = scroll;

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="home" data-cy="home-page">
      <Logo />
      <header className="header">
        <HeaderText
          headlines={{
            headline: t("texts.home.welcome.headline"),
            subheadline: t("texts.home.welcome.subheadline"),
          }}
          borderColorName={""}
        />
      </header>
    </div>
  );
};

export default Home;
