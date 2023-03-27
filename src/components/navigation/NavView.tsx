import NavDesktopItems from "./NavDesktopItems";
import NavToggler from "./NavToggler";

interface NavViewProps {
  isDeskLarge: boolean;
}

const NavView = ({ isDeskLarge }: NavViewProps): JSX.Element => {
  if (isDeskLarge) {
    return <NavDesktopItems />;
  }
  return <NavToggler />;
};

export default NavView;
