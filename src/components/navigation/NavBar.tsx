import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  setIsDesktop,
  setIsMenuVisible,
  setMenuItem,
  setIsOpenMenu,
} from "../../reducer/creativeGallerySlice";
import { RootState } from "../../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import NavDesktopViewItems from "./NavDesktopViewItems";
import NavBarLogo from "./NavBarLogo";

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
    setTimeout((): void => {
      dispatch(setIsOpenMenu(false));
    }, 1000); // 1 second
  };

  return (
    <div>
      <nav>
        <div className="navbar-container navbar-border">
          <div className="logo-container">
            <Link
              to={"/"}
              className="is-text-style-plain is-white"
              onClick={(): void => {
                dispatch(setMenuItem("home"));
              }}
            >
              <NavBarLogo />
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
