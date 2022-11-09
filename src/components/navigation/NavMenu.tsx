import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  setIsMenuVisible,
  setIsCloseMenu,
  selectIsDesktop,
  selectIsMenuVisible,
  selectIsOpenMenu,
  selectIsCloseMenu,
} from "../../reducer/creativeGallerySlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { resumePath } from "../../lib/externalLinkPaths";
import ExternalLink from "../helpers/ExternalLink";
import SelectLanguage from "../helpers/SelectLanguage";

const NavMenu = (): JSX.Element | null => {
  const isDesktop = useAppSelector(selectIsDesktop);
  const isMenuVisible = useAppSelector(selectIsMenuVisible);
  const isOpenMenu = useAppSelector(selectIsOpenMenu);
  const isCloseMenu = useAppSelector(selectIsCloseMenu);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleCloseMenu = (): void => {
    const resetMenuVariables = (): void => {
      dispatch(setIsCloseMenu(false));
      dispatch(setIsMenuVisible(false));
    };

    dispatch(setIsCloseMenu(true));
    setTimeout(resetMenuVariables, 300); // 300 milliseconds
  };

  const fadeMenu = (): string => {
    return isOpenMenu
      ? "menu fade-menu-in"
      : isCloseMenu
      ? "menu fade-menu-out"
      : "menu";
  };

  const fadeMenuItem = (fadeInSpeed: string, fadeOutSpeed: string): string => {
    return isOpenMenu
      ? `menu-item is-warning ${fadeInSpeed}`
      : isCloseMenu
      ? `menu-item is-warning ${fadeOutSpeed}`
      : "menu-item is-warning";
  };

  if (isDesktop || !isMenuVisible) {
    return null;
  }

  return (
    <>
      <div className={fadeMenu()}>
        <div className="close-menu-container">
          <FontAwesomeIcon
            icon={faTimes}
            className="close-menu is-white"
            onClick={handleCloseMenu}
          />
        </div>
        <div className="menu-container">
          <div className="menu-subcontainer">
            <ul className="navigation-list">
              <li>
                <Link
                  to={"/about"}
                  className={fadeMenuItem(
                    "menu-item-fade-in-speed1",
                    "menu-item-fade-out-speed1"
                  )}
                  data-cy="menu-about-link"
                  onClick={handleCloseMenu}
                >
                  {t("link.about")}
                </Link>
              </li>
              <li>
                <Link
                  to={"/projects"}
                  className={fadeMenuItem(
                    "menu-item-fade-in-speed2",
                    "menu-item-fade-out-speed2"
                  )}
                  data-cy="menu-projects-link"
                  onClick={handleCloseMenu}
                >
                  {t("link.projects")}
                </Link>
              </li>
              <li>
                <Link
                  to={"/techstack"}
                  className={fadeMenuItem(
                    "menu-item-fade-in-speed3",
                    "menu-item-fade-out-speed3"
                  )}
                  data-cy="menu-techstack-link"
                  onClick={handleCloseMenu}
                >
                  {t("link.techStack")}
                </Link>
              </li>
              <li data-cy="menu-resume-link">
                <ExternalLink
                  path={resumePath}
                  styleClass={fadeMenuItem(
                    "menu-item-fade-in-speed4",
                    "menu-item-fade-out-speed4"
                  )}
                  text={t("link.resume")}
                  closeMenuHandler={handleCloseMenu}
                />
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className={fadeMenuItem(
                    "menu-item-fade-in-speed5",
                    "menu-item-fade-out-speed5"
                  )}
                  data-cy="menu-contact-link"
                  onClick={handleCloseMenu}
                >
                  {t("link.contact")}
                </Link>
              </li>
              <li>
                <SelectLanguage
                  styleClass={`${fadeMenuItem(
                    "menu-item-fade-in-speed6",
                    "menu-item-fade-out-speed6"
                  )} menu-select-language`}
                  closeMenuHandler={handleCloseMenu}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
