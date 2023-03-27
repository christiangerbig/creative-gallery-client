import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useCheckBreakpoint } from "../../app/custom-hooks/useCheckBreakpoint";
import {
  selectIsDeskLarge,
  setIsDeskLarge,
  setNavItem,
} from "../../reducer/creativeGallerySlice";
import NavBarLogo from "./NavBarLogo";
import NavView from "./NavView";

const NavBar = (): JSX.Element => {
  const isDeskLarge = useAppSelector(selectIsDeskLarge);
  const dispatch = useAppDispatch();
  const breakpointDeskLarge = 992; // horizontal 992 px

  dispatch(setIsDeskLarge(useCheckBreakpoint(breakpointDeskLarge)));

  return (
    <nav className="nav-bar">
      <div className="nav-bar__nav-items">
        <Link
          to={"/"}
          onClick={(): void => {
            dispatch(setNavItem("home"));
          }}
        >
          <NavBarLogo />
        </Link>
        <NavView isDeskLarge={isDeskLarge} />
      </div>
    </nav>
  );
};

export default NavBar;
