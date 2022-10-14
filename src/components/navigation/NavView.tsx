import NavDesktopItems from "./NavDesktopItems";
import NavToggler from "./NavToggler";

type NavViewProps = {
  isDesktop: boolean;
};

const NavView = ({ isDesktop }: NavViewProps): JSX.Element => {
  if (isDesktop) {
    return <NavDesktopItems />;
  }
  return <NavToggler />;
};

export default NavView;
