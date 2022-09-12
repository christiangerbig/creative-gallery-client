import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeaderText from "../components/HeaderText";

const PageNotFound = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="notFoundPageContainer logoImage">
      <header className="headline">
        <HeaderText
          headlines={{
            headline: t("pageNotFound.headline"),
            subheadline: t("pageNotFound.subheadline"),
          }}
          borderColorName={"orange"}
        />
      </header>
      <div className="notFoundGetBackContainer">
        <Link to={"/"} className="notFoundGetBackLink textEnlighted">
          {" "}
          {t("pageNotFound.getBack")}{" "}
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
