import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useCheckMediaBreakpoint } from "../../app/custom-hooks/useCheckMediaBreakpoint";
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
  const checkMediaBreakpoint = useCheckMediaBreakpoint();

  dispatch(setIsDesktop(checkMediaBreakpoint));

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
