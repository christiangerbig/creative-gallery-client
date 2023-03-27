import { useTranslation } from "react-i18next";
import { gitHubPath, linkedInPath } from "../lib/externalLinkPaths";
import ExternalLink from "./helpers/ExternalLink";

const Footer = (): JSX.Element => {
  const { t } = useTranslation();
  const currentTime = new Date();
  const year = currentTime.getFullYear();

  return (
    <footer className="footer">
      <span className="footer__copyright-text">
        {" "}
        {t("texts.footer.copyright")} {year} {t("texts.footer.appAuthor")}
      </span>
      <ul className="footer__navigation-list">
        <li>
          <ExternalLink
            path={linkedInPath}
            styleClass="footer__navigation-link"
            faClass="fa-linkedin"
          />
        </li>
        <li>
          <ExternalLink
            path={gitHubPath}
            styleClass="footer__navigation-link"
            faClass="fa-github"
          />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
