import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useCheckBreakpoint } from "../../app/custom-hooks/useCheckBreakpoint";
import {
  selectIsLargeDevice,
  setIsLargeDevice,
  setNavItem,
} from "../../reducer/creativeGallerySlice";
import NavBarLogo from "./NavBarLogo";
import NavView from "./NavView";

const NavBar = (): JSX.Element => {
  const isLargeDevice = useAppSelector(selectIsLargeDevice);
  const dispatch = useAppDispatch();

  dispatch(setIsLargeDevice(useCheckBreakpoint(992)));

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
        <NavView isLargeDevice={isLargeDevice} />
      </div>
    </nav>
  );
};

export default NavBar;
