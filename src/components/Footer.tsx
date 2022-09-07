import { gitHubPath, linkedInPath } from "../lib/externalLinkPaths";
import ExternalLink from "./ExternalLink";

const Footer = (): JSX.Element => {
  const currentTime = new Date();
  let year = currentTime.getFullYear();

  return (
    <div>
      <footer>
        <div className="footerContainer">
          <span className="copyrightText"> © {year} Christian Gerbig </span>
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
