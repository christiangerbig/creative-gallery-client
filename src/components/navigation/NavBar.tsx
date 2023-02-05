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
          <NavView isLargeDevice={isLargeDevice} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
