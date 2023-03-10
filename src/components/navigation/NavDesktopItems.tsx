import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectMenuItem, setNavItem } from "../../reducer/creativeGallerySlice";
import { resumePath } from "../../lib/externalLinkPaths";
import { MenuItem } from "../../app/typeDefinitions";
import ExternalLink from "../helpers/ExternalLink";
import SelectLanguage from "../helpers/SelectLanguage";

const NavDesktopViewItems = (): JSX.Element => {
  const menuItem = useAppSelector(selectMenuItem);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const highliteNavItem = (currentMenuItem: MenuItem): string =>
    currentMenuItem === menuItem
      ? "navigation-list__link navigation-list__link--active"
      : "navigation-list__link";

  return (
    <div className="nav-desktop-items">
      <ul className="navigation-list navigation-list--no-style">
        <li>
          <Link
            to={"/about"}
            className={highliteNavItem("about")}
            data-cy="nav-bar-about-link"
            onClick={(): void => {
              dispatch(setNavItem("about"));
            }}
          >
            {t("link.about")}
          </Link>
        </li>
        <li>
          <Link
            to={"/projects"}
            className={highliteNavItem("projects")}
            data-cy="nav-bar-projects-link"
            onClick={(): void => {
              dispatch(setNavItem("projects"));
            }}
          >
            {t("link.projects")}
          </Link>
        </li>
        <li>
          <Link
            to={"/techstack"}
            className={highliteNavItem("techStack")}
            data-cy="nav-bar-techstack-link"
            onClick={(): void => {
              dispatch(setNavItem("techStack"));
            }}
          >
            {t("link.techStack")}
          </Link>
        </li>
      </ul>
      <ul className="navigation-list navigation-list--no-style">
        <li>
          <ExternalLink
            path={resumePath}
            styleClass="navigation-list__link"
            text={t("link.resume")}
          />
        </li>
        <li>
          <Link
            to={"/contact"}
            className={highliteNavItem("contact")}
            data-cy="nav-bar-contact-link"
            onClick={(): void => {
              dispatch(setNavItem("contact"));
            }}
          >
            {t("link.contact")}
          </Link>
        </li>
        <li>
          <SelectLanguage styleClass={"navigation-list__select-language"} />
        </li>
      </ul>
    </div>
  );
};

export default NavDesktopViewItems;
