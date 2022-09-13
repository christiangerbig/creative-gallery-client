import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setMenuItem } from "../reducer/creativeGallerySlice";
import { RootState } from "../store";
import { resumePath } from "../lib/externalLinkPaths";
import { MenuItem } from "../typeDefinitions";
import ExternalLink from "./ExternalLink";

const NavDesktopViewItems = (): JSX.Element => {
  const menuItem = useAppSelector(
    (state: RootState) => state.creativeGallery.menuItem
  );
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const activateLink = (
    currentMenuItem: MenuItem,
    menuItem: MenuItem
  ): string => {
    return currentMenuItem === menuItem
      ? "navigation-link is-navigation-link-active"
      : "navigation-link";
  };

  return (
    <div className="navigation-container">
      <ul className="navigation-subcontainer-left navigation-list">
        <li>
          <Link
            to={"/about"}
            className={activateLink(menuItem, "about")}
            onClick={() => {
              dispatch(setMenuItem("about"));
            }}
          >
            {t("navigation.about")}
          </Link>
        </li>
        <li>
          <Link
            to={"/projects"}
            className={activateLink(menuItem, "projects")}
            onClick={() => {
              dispatch(setMenuItem("projects"));
            }}
          >
            {t("navigation.projects")}
          </Link>
        </li>
        <li>
          <Link
            to={"/techstack"}
            className={activateLink(menuItem, "techStack")}
            onClick={() => {
              dispatch(setMenuItem("techStack"));
            }}
          >
            {t("navigation.techStack")}
          </Link>
        </li>
      </ul>
      <ul className="navigation-subcontainer-right navigation-list">
        <li>
          <ExternalLink
            linkPath={resumePath}
            linkClass="navigation-link"
            linkText={t("navigation.resume")}
          />
        </li>
        <li>
          <Link
            to={"/contact"}
            className={activateLink(menuItem, "contact")}
            onClick={() => {
              dispatch(setMenuItem("contact"));
            }}
          >
            {t("navigation.contact")}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavDesktopViewItems;
