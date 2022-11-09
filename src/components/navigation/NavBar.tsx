import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectIsDesktop,
  setIsDesktop,
  setNavItem,
} from "../../reducer/creativeGallerySlice";
import NavBarLogo from "./NavBarLogo";
import NavView from "./NavView";

const NavBar = (): JSX.Element => {
  const isDesktop = useAppSelector(selectIsDesktop);
  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleResizeEventCallback = (): void => {
      if (window.innerWidth > 1024) {
        dispatch(setIsDesktop(true));
      } else {
        dispatch(setIsDesktop(false));
      }
    };

    window.addEventListener("resize", handleResizeEventCallback);
    handleResizeEventCallback();
    const currentLanguage = i18n.resolvedLanguage as string;
    i18n.changeLanguage(currentLanguage);

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
