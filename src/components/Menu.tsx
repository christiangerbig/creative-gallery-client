import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  setIsMenuQuit,
  setIsMenuVisible,
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
  const isMenuQuit = useAppSelector(
    (state: RootState) => state.creativeGallery.isMenuQuit
  );
  const dispatch = useAppDispatch();

  // Close menu after a delay of 300 milliseconds
  const handleCloseMenu = (): void => {
    dispatch(setIsMenuQuit(true));
    setTimeout(() => {
      dispatch(setIsMenuVisible(false));
    }, 300);
  };

  return (
    <div>
      {!isDesktop && isMenuVisible && (
        <div className={!isMenuQuit ? "menu fadeMenuIn" : "menu fadeMenuOut"}>
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
                      !isMenuQuit
                        ? "menuLink colorOrange menuLinkFadeInSpeed1"
                        : "menuLink colorOrange menuLinkFadeOutSpeed1"
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
                      !isMenuQuit
                        ? "menuLink colorOrange menuLinkFadeInSpeed2"
                        : "menuLink colorOrange menuLinkFadeOutSpeed2"
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
                      !isMenuQuit
                        ? "menuLink colorOrange menuLinkFadeInSpeed3"
                        : "menuLink colorOrange menuLinkFadeOutSpeed3"
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
                      !isMenuQuit
                        ? "menuLink colorOrange menuLinkFadeInSpeed4"
                        : "menuLink colorOrange menuLinkFadeOutSpeed4"
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
                      !isMenuQuit
                        ? "menuLink colorOrange menuLinkFadeInSpeed5"
                        : "menuLink colorOrange menuLinkFadeOutSpeed5"
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
    </div>
  );
};

export default Menu;
