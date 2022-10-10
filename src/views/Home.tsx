import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import Logo from "../components/Logo";
import HeaderText from "../components/HeaderText";

const Home = (): JSX.Element => {
  const { t } = useTranslation();

  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <div className="home-page-container">
      <Logo />
      <HeaderText
        headlines={{
          headline: t("texts.home.welcome.headline"),
          subheadline: t("texts.home.welcome.subheadline"),
        }}
        borderColorName={""}
      />
    </div>
  );
};

export default Home;
