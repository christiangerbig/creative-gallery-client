import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFoundPageContainer logoImage">
      <div className="pageNameContainer">
        <h2> Not found </h2>
      </div>
      <div className="somethingText">
        <h3> something </h3>
      </div>
      <div className="wentText">
        <h4> went </h4>
      </div>
      <div className="wrongText">
        <h2> wrong </h2>
      </div>
      <div className="notFoundGetBackContainer">
        <Link to={"/"} className="notFoundGetBackLink textEnlighted">
          Get back
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
