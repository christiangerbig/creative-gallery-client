import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setMenuItem } from "../reducer/creativeGallerySlice";
import { RootState } from "../store";
import { resumePath } from "../lib/externalLinkPaths";

const NavDesktopViewItems = (): JSX.Element => {
  const menuItem = useAppSelector(
    (state: RootState) => state.creativeGallery.menuItem
  );
  const dispatch = useAppDispatch();

  return (
    <div className="navigationContainer">
      <ul className="navigationSubContainerLeft">
        <li>
          <Link
            to={"/about"}
            className={
              menuItem === "about"
                ? "navigationLink navigationLinkActive"
                : "navigationLink"
            }
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
            className={
              menuItem === "projects"
                ? "navigationLink navigationLinkActive"
                : "navigationLink"
            }
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
            className={
              menuItem === "techStack"
                ? "navigationLink navigationLinkActive"
                : "navigationLink"
            }
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
            className={
              menuItem === "contact"
                ? "navigationLink navigationLinkActive"
                : "navigationLink"
            }
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
