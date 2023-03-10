import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  setIsMenuVisible,
  setIsCloseMenu,
  selectIsLargeDevice,
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
  const isLargeDevice = useAppSelector(selectIsLargeDevice);
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

  const fadeMenu = useMemo(
    (): string =>
      isOpenMenu
        ? "nav-menu nav-menu--fade-in"
        : isCloseMenu
        ? "nav-menu nav-menu--fade-out"
        : "nav-menu",
    [isOpenMenu, isCloseMenu]
  );

  const fadeMenuItem = (fadeInSpeed: string, fadeOutSpeed: string): string =>
    isOpenMenu
      ? `nav-menu-list__item__link ${fadeInSpeed}`
      : isCloseMenu
      ? `nav-menu-list__item__link ${fadeOutSpeed}`
      : "nav-menu-list__item__link";

  if (isLargeDevice || !isMenuVisible) {
    return null;
  }

  return (
    <>
      <div className={fadeMenu}>
        <div className="close-button-container">
          <button
            type="button"
            className="close-button-container__button"
            onClick={handleCloseMenu}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <ul className="nav-menu-list nav-menu-list--no-style">
          <li className="nav-menu-list__item">
            <Link
              to={"/about"}
              className={fadeMenuItem(
                "nav-menu-list__item--fade-in-speed1",
                "nav-menu-list__item--fade-out-speed1"
              )}
              data-cy="nav-menu-about-link"
              onClick={handleCloseMenu}
            >
              {t("link.about")}
            </Link>
          </li>
          <li className="nav-menu-list__item">
            <Link
              to={"/projects"}
              className={fadeMenuItem(
                "nav-menu-list__item--fade-in-speed2",
                "nav-menu-list__item--fade-out-speed2"
              )}
              data-cy="nav-menu-projects-link"
              onClick={handleCloseMenu}
            >
              {t("link.projects")}
            </Link>
          </li>
          <li className="nav-menu-list__item">
            <Link
              to={"/techstack"}
              className={fadeMenuItem(
                "nav-menu-list__item--fade-in-speed3",
                "nav-menu-list__item--fade-out-speed3"
              )}
              data-cy="nav-menu-techstack-link"
              onClick={handleCloseMenu}
            >
              {t("link.techStack")}
            </Link>
          </li>
          <li className="nav-menu-list__item">
            <ExternalLink
              path={resumePath}
              styleClass={fadeMenuItem(
                "nav-menu-list__item--fade-in-speed4",
                "nav-menu-list__item--fade-out-speed4"
              )}
              text={t("link.resume")}
              closeMenuHandler={handleCloseMenu}
            />
          </li>
          <li className="nav-menu-list__item">
            <Link
              to={"/contact"}
              className={fadeMenuItem(
                "nav-menu-list__item--fade-in-speed5",
                "nav-menu-list__item--fade-out-speed5"
              )}
              data-cy="nav-menu-contact-link"
              onClick={handleCloseMenu}
            >
              {t("link.contact")}
            </Link>
          </li>
          <li className="nav-menu-list__item">
            <SelectLanguage
              styleClass={`nav-menu-list__item__select-language ${fadeMenuItem(
                "nav-menu-list__item--fade-in-speed6",
                "nav-menu-list__item--fade-out-speed6"
              )}`}
              closeMenuHandler={handleCloseMenu}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavMenu;
