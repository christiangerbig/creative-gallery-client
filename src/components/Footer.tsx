import { Link } from "react-router-dom";
import { gitHubPath, linkedInPath } from "../lib/externalLinkPaths";

const Footer = (): JSX.Element => {
  return (
    <div>
      <footer>
        <div className="footerContainer">
          <span className="copyrightText"> © 2021 Christian Gerbig </span>
          <ul className="footerSubContainer">
            <li>
              <Link
                to={{
                  pathname: linkedInPath,
                }}
                target="_blank"
                rel="noreferrer noopener"
                className="footerLink"
              >
                <i className="fab fa-linkedin colorWhite"></i>
              </Link>
            </li>
            <li>
              <Link
                to={{ pathname: gitHubPath }}
                target="_blank"
                rel="noreferrer noopener"
                className="footerLink"
              >
                <i className="fab fa-github textColorWhite"></i>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
