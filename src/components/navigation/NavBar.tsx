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
    const handleResizeEventCallback = (): void => {
      if (window.innerWidth > 1024) {
        dispatch(setIsDesktop(true));
      } else {
        dispatch(setIsDesktop(false));
      }
    };

    window.addEventListener("resize", handleResizeEventCallback);

    return () => {
      window.removeEventListener("resize", handleResizeEventCallback);
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
