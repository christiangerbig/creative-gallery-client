import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  setIsMenuVisible,
  setIsCloseMenu,
} from "../reducer/creativeGallerySlice";
import { RootState } from "../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { resumePath } from "../lib/externalLinkPaths";

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

  const handleCloseMenu = (): void => {
    const resetMenuVariables = (): void => {
      dispatch(setIsCloseMenu(false));
      dispatch(setIsMenuVisible(false));
    };

    dispatch(setIsCloseMenu(true));
    setTimeout(resetMenuVariables, 300); // 300 milliseconds
  };

  return (
    <>
      {!isDesktop && isMenuVisible && (
        <div
          className={
            isOpenMenu
              ? "menu fadeMenuIn"
              : isCloseMenu
              ? "menu fadeMenuOut"
              : "menu"
          }
        >
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
                    className={
                      isOpenMenu
                        ? "menuLink colorOrange menuLinkFadeInSpeed1"
                        : isCloseMenu
                        ? "menuLink colorOrange menuLinkFadeOutSpeed1"
                        : "menuLink colorOrange"
                    }
                    onClick={handleCloseMenu}
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/projects"}
                    className={
                      isOpenMenu
                        ? "menuLink colorOrange menuLinkFadeInSpeed2"
                        : isCloseMenu
                        ? "menuLink colorOrange menuLinkFadeOutSpeed2"
                        : "menuLink colorOrange"
                    }
                    onClick={handleCloseMenu}
                  >
                    PROJECTS
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/techstack"}
                    className={
                      isOpenMenu
                        ? "menuLink colorOrange menuLinkFadeInSpeed3"
                        : isCloseMenu
                        ? "menuLink colorOrange menuLinkFadeOutSpeed3"
                        : "menuLink colorOrange"
                    }
                    onClick={handleCloseMenu}
                  >
                    TECHSTACK
                  </Link>
                </li>
                <li>
                  <Link
                    to={{ pathname: resumePath }}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={
                      isOpenMenu
                        ? "menuLink colorOrange menuLinkFadeInSpeed4"
                        : isCloseMenu
                        ? "menuLink colorOrange menuLinkFadeOutSpeed4"
                        : "menuLink colorOrange"
                    }
                    onClick={handleCloseMenu}
                  >
                    RESUME
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className={
                      isOpenMenu
                        ? "menuLink colorOrange menuLinkFadeInSpeed5"
                        : isCloseMenu
                        ? "menuLink colorOrange menuLinkFadeOutSpeed5"
                        : "menuLink colorOrange"
                    }
                    onClick={handleCloseMenu}
                  >
                    CONTACT
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
