import { useAppDispatch } from "../../hooks";
import {
  setIsMenuVisible,
  setIsOpenMenu,
} from "../../reducer/creativeGallerySlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavToggler = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleOpenMenu = (): void => {
    dispatch(setIsMenuVisible(true));
    dispatch(setIsOpenMenu(true));
    setTimeout((): void => {
      dispatch(setIsOpenMenu(false));
    }, 1000); // 1 second
  };

  return (
    <div>
      <FontAwesomeIcon icon={faBars} onClick={handleOpenMenu} />
    </div>
  );
};

export default NavToggler;
