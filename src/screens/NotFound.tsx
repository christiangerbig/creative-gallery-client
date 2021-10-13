import { Link } from "react-router-dom";

const NotFound = (): JSX.Element => {
  return (
    <div className="notFoundPageContainer logoImage">
      <header>
        <div className="headerText orangeBorder">
          <h1 className="textFat"> Error 404 </h1>
          <h2 className="textBig"> Page not found </h2>
        </div>
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
