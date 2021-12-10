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
import NavbarLogo from "./NavbarLogo";
import NavDesktopViewItems from "./NavDesktopViewItems";

const NavBar = (): JSX.Element => {
  const isDesktop = useAppSelector(
    (state: RootState) => state.creativeGallery.isDesktop
  );
  const isMenuVisible = useAppSelector(
    (state: RootState) => state.creativeGallery.isMenuVisible
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const addlWindowWidthHandler = (): EventListener => {
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

    const handleCheckWindowWidth = addlWindowWidthHandler();

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
          {isDesktop && <NavDesktopViewItems />}
          <div hidden={isDesktop || isMenuVisible ? true : false}>
            <FontAwesomeIcon icon={faBars} onClick={handleOpenMenu} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
