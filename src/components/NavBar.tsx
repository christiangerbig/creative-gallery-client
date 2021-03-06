import { EventHandler, useEffect } from "react";
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
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleCheckWindowWidth = (windowObject: Window): void => {
      if (windowObject.innerWidth > 1024) {
        dispatch(setIsDesktop(true));
      } else {
        dispatch(setIsDesktop(false));
      }
    };

    const addWindowWidthHandler = (
      windowObject: Window,
      eventHandler: Function
    ): EventListener => {
      eventHandler(windowObject);
      const eventHandlerCallback = (): void => {
        eventHandler(windowObject);
      };

      windowObject.addEventListener("resize", eventHandlerCallback);
      return eventHandlerCallback;
    };

    const handleCheckWindowWidthCallback = addWindowWidthHandler(
      window,
      handleCheckWindowWidth
    );

    return () => {
      const removeWindowWidthHandler = (
        windowObject: Window,
        eventHandlerCallback: EventListener
      ) => {
        windowObject.removeEventListener("resize", eventHandlerCallback);
      };

      removeWindowWidthHandler(window, handleCheckWindowWidthCallback);
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
          {isDesktop ? (
            <NavDesktopViewItems />
          ) : (
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
