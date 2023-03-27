import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeaderText from "../components/helpers/HeaderText";

const NotFound = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="not-found">
      <header className="header">
        <HeaderText
          headlines={{
            headline: t("texts.pageNotFound.headline"),
            subheadline: t("texts.pageNotFound.subheadline"),
          }}
          borderColorName={"orange"}
        />
      </header>
      <div className="not-found__get-back">
        <Link to={"/"} className="not-found__get-back__link">
          {t("link.getBack")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
