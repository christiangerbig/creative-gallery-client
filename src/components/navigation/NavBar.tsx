import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setIsDesktop, setNavItem } from "../../reducer/creativeGallerySlice";
import { RootState } from "../../store";
import NavBarLogo from "./NavBarLogo";
import NavView from "./NavView";

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
      ): void => {
        windowObject.removeEventListener("resize", eventHandlerCallback);
      };

      removeWindowWidthHandler(window, handleCheckWindowWidthCallback);
    };
  }, []);

  return (
    <div>
      <nav>
        <div className="navbar-container navbar-border">
          <div className="logo-container">
            <Link
              to={"/"}
              className="is-text-style-plain is-white"
              onClick={(): void => {
                dispatch(setNavItem("home"));
              }}
            >
              <NavBarLogo />
            </Link>
          </div>
          <NavView isDesktop={isDesktop} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
