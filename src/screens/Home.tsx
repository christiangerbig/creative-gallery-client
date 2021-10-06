import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="homePageContainer">
      <header>
        <div className="headerText blueBorder">
          <h1 className="textFat">
            From Letter Shooter{" "}
            <FontAwesomeIcon icon={faAngleDoubleRight} className="doubleArrowRight" />
            Jungle Swap
          </h1>
          <h2 className="textBig"> My metamorphosis as a Web Developer </h2>
        </div>
      </header>
    </div>
  );
};

export default Home;
