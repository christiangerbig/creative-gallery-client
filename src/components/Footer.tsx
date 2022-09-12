import { useTranslation } from "react-i18next";
import { gitHubPath, linkedInPath } from "../lib/externalLinkPaths";
import ExternalLink from "./ExternalLink";

const Footer = (): JSX.Element => {
  const { t } = useTranslation();
  const currentTime = new Date();
  let year = currentTime.getFullYear();

  return (
    <div>
      <footer>
        <div className="footerContainer">
          <span className="copyrightText">
            {" "}
            {t("footer.copyright")} {year} {t("footer.appAuthor")}{" "}
          </span>
          <ul className="footerSubContainer">
            <li>
              <ExternalLink
                linkPath={linkedInPath}
                linkClass="footerLink"
                faClass="fa-linkedin"
              />
            </li>
            <li>
              <ExternalLink
                linkPath={gitHubPath}
                linkClass="footerLink"
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
