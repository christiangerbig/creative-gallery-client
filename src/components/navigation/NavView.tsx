import NavDesktopItems from "./NavDesktopItems";
import NavToggler from "./NavToggler";

interface NavViewProps {
  isLargeDevice: boolean;
}

const NavView = ({ isLargeDevice }: NavViewProps): JSX.Element => {
  if (isLargeDevice) {
    return <NavDesktopItems />;
  }
  return <NavToggler />;
};

export default NavView;
