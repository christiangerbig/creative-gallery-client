import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  setIsMenuVisible,
  setIsCloseMenu,
} from "../reducer/creativeGallerySlice";
import { RootState } from "../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { resumePath } from "../lib/externalLinkPaths";
import ExternalLink from "./ExternalLink";

const Menu = (): JSX.Element => {
  const isDesktop = useAppSelector(
    (state: RootState) => state.creativeGallery.isDesktop
  );
  const isMenuVisible = useAppSelector(
    (state: RootState) => state.creativeGallery.isMenuVisible
  );
  const isOpenMenu = useAppSelector(
    (state: RootState) => state.creativeGallery.isOpenMenu
  );
  const isCloseMenu = useAppSelector(
    (state: RootState) => state.creativeGallery.isCloseMenu
  );
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

  const menuProperties = (isOpenMenu: boolean): string => {
    return isOpenMenu
      ? "menu fade-menu-in"
      : isCloseMenu
      ? "menu fade-menu-out"
      : "menu";
  };

  const linkProperties = (
    isOpenMenu: boolean,
    fadeInSpeed: string,
    fadeOutSpeed: string
  ): string => {
    return isOpenMenu
      ? `menu-link is-warning ${fadeInSpeed}`
      : isCloseMenu
      ? `menu-link is-warning ${fadeOutSpeed}`
      : "menu-link is-warning";
  };

  return (
    <>
      {!isDesktop && isMenuVisible && (
        <div className={menuProperties(isOpenMenu)}>
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
                    className={linkProperties(
                      isOpenMenu,
                      "menu-link-fade-in-speed1",
                      "menu-link-fade-out-speed1"
                    )}
                    onClick={handleCloseMenu}
                  >
                    {t("link.about")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/projects"}
                    className={linkProperties(
                      isOpenMenu,
                      "menu-link-fade-in-speed2",
                      "menu-link-fade-out-speed2"
                    )}
                    onClick={handleCloseMenu}
                  >
                    {t("link.projects")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/techstack"}
                    className={linkProperties(
                      isOpenMenu,
                      "menu-link-fade-in-speed3",
                      "menu-link-fade-out-speed3"
                    )}
                    onClick={handleCloseMenu}
                  >
                    {t("link.techStack")}
                  </Link>
                </li>
                <li>
                  <ExternalLink
                    linkPath={resumePath}
                    linkClass={linkProperties(
                      isOpenMenu,
                      "menu-link-fade-in-speed4",
                      "menu-link-fade-out-speed4"
                    )}
                    linkText={t("link.resume")}
                    onClickHandler={handleCloseMenu}
                  />
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className={linkProperties(
                      isOpenMenu,
                      "menu-link-fade-in-speed5",
                      "menu-link-fade-out-speed5"
                    )}
                    onClick={handleCloseMenu}
                  >
                    {t("link.contact")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
