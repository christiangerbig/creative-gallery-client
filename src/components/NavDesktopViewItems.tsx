import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setMenuItem } from "../reducer/creativeGallerySlice";
import { RootState } from "../store";
import { resumePath } from "../lib/externalLinkPaths";
import { MenuItem } from "../typeDefinitions";

const NavDesktopViewItems = (): JSX.Element => {
  const menuItem = useAppSelector(
    (state: RootState) => state.creativeGallery.menuItem
  );
  const dispatch = useAppDispatch();

  const activateLink = (
    currentMenuItem: MenuItem,
    menuItem: MenuItem
  ): string => {
    return currentMenuItem === menuItem
      ? "navigationLink navigationactivateLink"
      : "navigationLink";
  };

  return (
    <div className="navigationContainer">
      <ul className="navigationSubContainerLeft">
        <li>
          <Link
            to={"/about"}
            className={activateLink(menuItem, "about")}
            onClick={() => {
              dispatch(setMenuItem("about"));
            }}
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            to={"/projects"}
            className={activateLink(menuItem, "projects")}
            onClick={() => {
              dispatch(setMenuItem("projects"));
            }}
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            to={"/techstack"}
            className={activateLink(menuItem, "techStack")}
            onClick={() => {
              dispatch(setMenuItem("techStack"));
            }}
          >
            TECHSTACK
          </Link>
        </li>
      </ul>
      <ul className="navigationSubContainerRight">
        <li>
          <Link
            to={{ pathname: resumePath }}
            target="_blank"
            rel="noreferrer noopener"
            className="navigationLink"
          >
            RESUME
          </Link>
        </li>
        <li>
          <Link
            to={"/contact"}
            className={activateLink(menuItem, "contact")}
            onClick={() => {
              dispatch(setMenuItem("contact"));
            }}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavDesktopViewItems;
