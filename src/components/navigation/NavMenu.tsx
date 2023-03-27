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
        ? "nav-menu--fade-in"
        : isCloseMenu
        ? "nav-menu--fade-out"
        : "",
    [isOpenMenu, isCloseMenu]
  );

  const fadeMenuItem = (
    fadeInSpeedClass: string,
    fadeOutSpeedClass: string
  ): string =>
    isOpenMenu
      ? `${fadeInSpeedClass}`
      : isCloseMenu
      ? `${fadeOutSpeedClass}`
      : "";

  if (isLargeDevice || !isMenuVisible) {
    return null;
  }

  return (
    <>
      <div className={`nav-menu ${fadeMenu}`}>
        <div className="close-menu">
          <button
            type="button"
            className="close-menu__button"
            onClick={handleCloseMenu}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <ul className="nav-menu__menu-list">
          <li
            className={`nav-menu__menu-list__menu-item ${fadeMenuItem(
              "nav-menu__menu-list__menu-item--fade-in-speed1",
              "nav-menu__menu-list__menu-item--fade-out-speed1"
            )}`}
          >
            <Link
              to={"/about"}
              className="nav-menu__menu-list__menu-link"
              data-cy="nav-menu-about-link"
              onClick={handleCloseMenu}
            >
              {t("link.about")}
            </Link>
          </li>
          <li
            className={`nav-menu__menu-list__menu-item ${fadeMenuItem(
              "nav-menu__menu-list__menu-item--fade-in-speed2",
              "nav-menu__menu-list__menu-item--fade-out-speed2"
            )}`}
          >
            <Link
              to={"/projects"}
              className="nav-menu__menu-list__menu-link"
              data-cy="nav-menu-projects-link"
              onClick={handleCloseMenu}
            >
              {t("link.projects")}
            </Link>
          </li>
          <li
            className={`nav-menu__menu-list__menu-item ${fadeMenuItem(
              "nav-menu__menu-list__menu-item--fade-in-speed3",
              "nav-menu__menu-list__menu-item--fade-out-speed3"
            )}`}
          >
            <Link
              to={"/techstack"}
              className="nav-menu__menu-list__menu-link"
              data-cy="nav-menu-techstack-link"
              onClick={handleCloseMenu}
            >
              {t("link.techStack")}
            </Link>
          </li>
          <li
            className={`nav-menu__menu-list__menu-item ${fadeMenuItem(
              "nav-menu__menu-list__menu-item--fade-in-speed4",
              "nav-menu__menu-list__menu-item--fade-out-speed4"
            )}`}
          >
            <ExternalLink
              path={resumePath}
              styleClass="nav-menu__menu-list__menu-link"
              text={t("link.resume")}
              closeMenuHandler={handleCloseMenu}
            />
          </li>
          <li
            className={`nav-menu__menu-list__menu-item ${fadeMenuItem(
              "nav-menu__menu-list__menu-item--fade-in-speed5",
              "nav-menu__menu-list__menu-item--fade-out-speed5"
            )}`}
          >
            <Link
              to={"/contact"}
              className="nav-menu__menu-list__menu-link"
              data-cy="nav-menu-contact-link"
              onClick={handleCloseMenu}
            >
              {t("link.contact")}
            </Link>
          </li>
          <li
            className={`nav-menu__menu-list__menu-item ${fadeMenuItem(
              "nav-menu__menu-list__menu-item--fade-in-speed6",
              "nav-menu__menu-list__menu-item--fade-out-speed6"
            )}`}
          >
            <SelectLanguage
              styleClass="nav-menu__menu-list__menu-link nav-menu__menu-list__select-language"
              closeMenuHandler={handleCloseMenu}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavMenu;
