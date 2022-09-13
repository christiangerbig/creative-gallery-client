import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeaderText from "../components/HeaderText";

const PageNotFound = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="page-not-found-container">
      <header className="headline">
        <HeaderText
          headlines={{
            headline: t("pageNotFound.headline"),
            subheadline: t("pageNotFound.subheadline"),
          }}
          borderColorName={"orange"}
        />
      </header>
      <div className="page-not-found-get-back-container">
        <Link to={"/"} className="page-not-found-get-back-link">
          {" "}
          {t("pageNotFound.getBack")}{" "}
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
