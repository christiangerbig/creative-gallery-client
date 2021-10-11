import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsMenuQuit,
  setIsMenuVisible,
  setIsDesktop,
  setMenuNumber,
} from "../reducer/creativeGallerySlice";
import { RootState } from "../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const menuNumber = useSelector(
    (state: RootState) => state.creativeGallery.menuNumber
  );
  const isDesktop = useSelector(
    (state: RootState) => state.creativeGallery.isDesktop
  );
  const isMenuVisible = useSelector(
    (state: RootState) => state.creativeGallery.isMenuVisible
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const checkWindowWidth = () => {
      if (window.innerWidth > 1024) {
        dispatch(setIsDesktop(true));
      } else {
        dispatch(setIsDesktop(false));
      }
    };
    checkWindowWidth();
    window.addEventListener("resize", checkWindowWidth);
    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);

  const handleOpenMenu = () => {
    dispatch(setIsMenuVisible(true));
    dispatch(setIsMenuQuit(false));
  };

  return (
    <div>
      <nav>
        <div className="navbarContainer navbarBorder">
          <div className="logoContainer">
            <Link
              className="textstylePlain colorWhite"
              to={"/"}
              onClick={() => dispatch(setMenuNumber(0))}
            >
              <div className="logoSubContainer">
                <div className="logoLetterOutlineC">
                  <div className="logoLetterInlineC"></div>
                </div>
                <div className="logoLetterOutlineG">
                  <div className="logoLetterInlineG">
                    <div className="logoLetterBoxG">
                      <div className="logoLetterBoxG2"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {isDesktop && (
            <div className="navigationContainer">
              <ul className="navigationSubContainerLeft">
                <li>
                  <Link
                    to={"/about"}
                    className={
                      menuNumber === 1
                        ? "navigationLink navigationLinkActive"
                        : "navigationLink"
                    }
                    onClick={() => dispatch(setMenuNumber(1))}
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/projects"}
                    className={
                      menuNumber === 2
                        ? "navigationLink navigationLinkActive"
                        : "navigationLink"
                    }
                    onClick={() => dispatch(setMenuNumber(2))}
                  >
                    PROJECTS
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/techstack"}
                    className={
                      menuNumber === 3
                        ? "navigationLink navigationLinkActive"
                        : "navigationLink"
                    }
                    onClick={() => dispatch(setMenuNumber(3))}
                  >
                    TECHSTACK
                  </Link>
                </li>
              </ul>
              <ul className="navigationSubContainerRight">
                <li>
                  <Link
                    to={{
                      pathname:
                        "https://www.dropbox.com/s/bslt9tm2yc10700/CV%20%285%29.pdf?dl=0",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="navigationLink"
                  >
                    RESUME
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className={
                      menuNumber === 4
                        ? "navigationLink navigationLinkActive"
                        : "navigationLink"
                    }
                    onClick={() => dispatch(setMenuNumber(4))}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {!isDesktop && !isMenuVisible && (
            <div>
              <FontAwesomeIcon icon={faBars} onClick={handleOpenMenu} />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
