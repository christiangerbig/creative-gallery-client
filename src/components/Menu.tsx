import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsMenuQuit,
  setIsMenuVisible,
} from "../reducer/creativeGallerySlice";
import { RootState } from "../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  const isDesktop = useSelector(
    (state: RootState) => state.creativeGallery.isDesktop
  );
  const isMenuVisible = useSelector(
    (state: RootState) => state.creativeGallery.isMenuVisible
  );
  const isMenuQuit = useSelector(
    (state: RootState) => state.creativeGallery.isMenuQuit
  );
  const dispatch = useDispatch();

  const handleCloseMenu = () => {
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
                    to={{
                      pathname:
                        "https://www.dropbox.com/s/62j0zzbxfvivmqx/CV%20%285%29.pdf?dl=0",
                    }}
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
