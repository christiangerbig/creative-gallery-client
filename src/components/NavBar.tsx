import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  setIsDesktop,
  setIsMenuVisible,
  setMenuItem,
  setIsOpenMenu,
} from "../reducer/creativeGallerySlice";
import { RootState } from "../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { resumePath } from "../lib/externalLinkPaths";
import NavbarLogo from "./NavbarLogo";

const NavBar = (): JSX.Element => {
  const isDesktop = useAppSelector(
    (state: RootState) => state.creativeGallery.isDesktop
  );
  const isMenuVisible = useAppSelector(
    (state: RootState) => state.creativeGallery.isMenuVisible
  );
  const menuItem = useAppSelector(
    (state: RootState) => state.creativeGallery.menuItem
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const installWindowResizeEventListener = (): EventListener => {
      const handleCheckWindowWidth = (): void => {
        if (window.innerWidth > 1024) {
          dispatch(setIsDesktop(true));
        } else {
          dispatch(setIsDesktop(false));
        }
      };

      handleCheckWindowWidth();
      window.addEventListener("resize", handleCheckWindowWidth);
      return handleCheckWindowWidth;
    };

    const handleCheckWindowWidth = installWindowResizeEventListener();

    return () => {
      window.removeEventListener("resize", handleCheckWindowWidth);
    };
  }, []);

  const handleOpenMenu = (): void => {
    dispatch(setIsMenuVisible(true));
    dispatch(setIsOpenMenu(true));
    setTimeout(() => {
      dispatch(setIsOpenMenu(false));
    }, 1000); // 1 second
  };

  return (
    <div>
      <nav>
        <div className="navbarContainer navbarBorder">
          <div className="logoContainer">
            <Link
              to={"/"}
              className="textstylePlain colorWhite"
              onClick={() => {
                dispatch(setMenuItem("home"));
              }}
            >
              <NavbarLogo />
            </Link>
          </div>
          {isDesktop && (
            <div className="navigationContainer">
              <ul className="navigationSubContainerLeft">
                <li>
                  <Link
                    to={"/about"}
                    className={
                      menuItem === "about"
                        ? "navigationLink navigationLinkActive"
                        : "navigationLink"
                    }
                    onClick={() => {
                      dispatch(setMenuItem("about"));
                    }}
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/projects"}
                    className={
                      menuItem === "projects"
                        ? "navigationLink navigationLinkActive"
                        : "navigationLink"
                    }
                    onClick={() => {
                      dispatch(setMenuItem("projects"));
                    }}
                  >
                    PROJECTS
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/techstack"}
                    className={
                      menuItem === "techStack"
                        ? "navigationLink navigationLinkActive"
                        : "navigationLink"
                    }
                    onClick={() => {
                      dispatch(setMenuItem("techStack"));
                    }}
                  >
                    TECHSTACK
                  </Link>
                </li>
              </ul>
              <ul className="navigationSubContainerRight">
                <li>
                  <Link
                    to={{ pathname: resumePath }}
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
                      menuItem === "contact"
                        ? "navigationLink navigationLinkActive"
                        : "navigationLink"
                    }
                    onClick={() => {
                      dispatch(setMenuItem("contact"));
                    }}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <div hidden={isDesktop || isMenuVisible ? true : false}>
            <FontAwesomeIcon icon={faBars} onClick={handleOpenMenu} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
