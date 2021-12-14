import { Link } from "react-router-dom";
import HeaderText from "../components/HeaderText";

const NotFound = (): JSX.Element => {
  return (
    <div className="notFoundPageContainer logoImage">
      <header className="headline">
        <HeaderText
          text={["Error 404", "Page not found"]}
          borderColor={"orange"}
        />
      </header>
      <div className="notFoundGetBackContainer">
        <Link to={"/"} className="notFoundGetBackLink textEnlighted">
          GET BACK
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
