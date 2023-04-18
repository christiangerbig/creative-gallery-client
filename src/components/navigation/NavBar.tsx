import { Link } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { setNavItem } from "../../reducer/creativeGallerySlice";
import NavBarLogo from "./NavBarLogo";
import NavDesktopItems from "./NavDesktopItems";
import NavToggler from "./NavToggler";

const NavBar = (): JSX.Element => {
  const dispatch = useAppDispatch();

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
        <NavDesktopItems />
        <NavToggler />
      </div>
    </nav>
  );
};

export default NavBar;
