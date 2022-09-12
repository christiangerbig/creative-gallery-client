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
      ? "menu fadeMenuIn"
      : isCloseMenu
      ? "menu fadeMenuOut"
      : "menu";
  };

  const linkProperties = (
    isOpenMenu: boolean,
    fadeInSpeed: string,
    fadeOutSpeed: string
  ): string => {
    return isOpenMenu
      ? `menuLink colorOrange ${fadeInSpeed}`
      : isCloseMenu
      ? `menuLink colorOrange ${fadeOutSpeed}`
      : "menuLink colorOrange";
  };

  return (
    <>
      {!isDesktop && isMenuVisible && (
        <div className={menuProperties(isOpenMenu)}>
          <div className="menuCloseContainer">
            <FontAwesomeIcon
              icon={faTimes}
              className="menuClose colorWhite"
              onClick={handleCloseMenu}
            />
          </div>
          <div className="menuContainer">
            <div className="menuSubContainer">
              <ul>
                <li>
                  <Link
                    to={"/about"}
                    className={linkProperties(
                      isOpenMenu,
                      "menuLinkFadeInSpeed1",
                      "menuLinkFadeOutSpeed1"
                    )}
                    onClick={handleCloseMenu}
                  >
                    {t("navigation.about")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/projects"}
                    className={linkProperties(
                      isOpenMenu,
                      "menuLinkFadeInSpeed2",
                      "menuLinkFadeOutSpeed2"
                    )}
                    onClick={handleCloseMenu}
                  >
                    {t("navigation.projects")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/techstack"}
                    className={linkProperties(
                      isOpenMenu,
                      "menuLinkFadeInSpeed3",
                      "menuLinkFadeOutSpeed3"
                    )}
                    onClick={handleCloseMenu}
                  >
                    {t("navigation.techstack")}
                  </Link>
                </li>
                <li>
                  <ExternalLink
                    linkPath={resumePath}
                    linkClass={linkProperties(
                      isOpenMenu,
                      "menuLinkFadeInSpeed4",
                      "menuLinkFadeOutSpeed4"
                    )}
                    linkText={t("navigation.resume")}
                    onClickHandler={handleCloseMenu}
                  />
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className={linkProperties(
                      isOpenMenu,
                      "menuLinkFadeInSpeed5",
                      "menuLinkFadeOutSpeed5"
                    )}
                    onClick={handleCloseMenu}
                  >
                    {t("navigation.contact")}
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
