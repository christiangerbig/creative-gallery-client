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

const NavMenu = (): JSX.Element => {
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

  const fadeLink = (fadeInSpeed: string, fadeOutSpeed: string): string => {
    return isOpenMenu
      ? `menu-link is-warning ${fadeInSpeed}`
      : isCloseMenu
      ? `menu-link is-warning ${fadeOutSpeed}`
      : "menu-link is-warning";
  };

  return (
    <>
      {!isDesktop && isMenuVisible && (
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
                    className={fadeLink(
                      "menu-link-fade-in-speed1",
                      "menu-link-fade-out-speed1"
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
                    className={fadeLink(
                      "menu-link-fade-in-speed2",
                      "menu-link-fade-out-speed2"
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
                    className={fadeLink(
                      "menu-link-fade-in-speed3",
                      "menu-link-fade-out-speed3"
                    )}
                    data-cy="menu-tech-stack-link"
                    onClick={handleCloseMenu}
                  >
                    {t("link.techStack")}
                  </Link>
                </li>
                <li>
                  <ExternalLink
                    path={resumePath}
                    styleClass={fadeLink(
                      "menu-link-fade-in-speed4",
                      "menu-link-fade-out-speed4"
                    )}
                    text={t("link.resume")}
                    data-cy="menu-resume-link"
                    onClickHandler={handleCloseMenu}
                  />
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className={fadeLink(
                      "menu-link-fade-in-speed5",
                      "menu-link-fade-out-speed5"
                    )}
                    data-cy="menu-contact-link"
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

export default NavMenu;
