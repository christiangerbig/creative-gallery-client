import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeaderText from "../components/helpers/HeaderText";

const NotFound = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="page-not-found">
      <header className="header">
        <HeaderText
          headlines={{
            headline: t("texts.pageNotFound.headline"),
            subheadline: t("texts.pageNotFound.subheadline"),
          }}
          borderColorName={"orange"}
        />
      </header>
      <div className="page-not-found__get-back-container">
        <Link to={"/"} className="page-not-found__get-back-container__link">
          {t("link.getBack")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
