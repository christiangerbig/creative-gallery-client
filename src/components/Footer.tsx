import { useTranslation } from "react-i18next";
import { gitHubPath, linkedInPath } from "../lib/externalLinkPaths";
import ExternalLink from "./ExternalLink";

const Footer = (): JSX.Element => {
  const { t } = useTranslation();
  const currentTime = new Date();
  const year = currentTime.getFullYear();

  return (
    <div>
      <footer>
        <div className="footer-container">
          <span className="copyright-text">
            {" "}
            {t("texts.footer.copyright")} {year} {t("texts.footer.appAuthor")}{" "}
          </span>
          <ul className="footer-subcontainer navigation-list">
            <li>
              <ExternalLink
                linkPath={linkedInPath}
                linkClass="footer-link"
                faClass="fa-linkedin"
              />
            </li>
            <li>
              <ExternalLink
                linkPath={gitHubPath}
                linkClass="footer-link"
                faClass="fa-github"
              />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
