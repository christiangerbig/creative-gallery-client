import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  setIsMenuVisible,
  setIsOpenMenu,
  selectIsMenuVisible,
} from "../../reducer/creativeGallerySlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavToggler = (): JSX.Element | null => {
  const isMenuVisible = useAppSelector(selectIsMenuVisible);
  const dispatch = useAppDispatch();

  const handleOpenMenu = (): void => {
    dispatch(setIsMenuVisible(true));
    dispatch(setIsOpenMenu(true));
    setTimeout((): void => {
      dispatch(setIsOpenMenu(false));
    }, 1000); // 1 second
  };

  return isMenuVisible ? null : (
    <>
      <button
        type="button"
        className="nav-toggler"
        data-cy="toggler"
        onClick={handleOpenMenu}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    </>
  );
};

export default NavToggler;
