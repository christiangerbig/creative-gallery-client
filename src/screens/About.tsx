import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMenuNumber } from "../reducer/creativeGallerySlice";

const About = () => {
  const dispatch = useDispatch();

  return (
    <div className="aboutPageContainer">
      <header>
        <div className="headerText greenBorder">
          <h1 className="textFat"> There is only one way </h1>
          <h2 className="textBig"> Straight forward </h2>
        </div>
      </header>
      <div className="textContainer">
        <div className="textColumContainer">
          <p>
            I am Christian. A passionate and dedicated Web Developer using every
            aspect of the New Technology available to reach the goals. My
            homebase is Hamburg in Germany. I believe in a positive power of
            communication, trust in cooperative team working making an asset
            from sharing different points of views. I love to code optimized
            solutions suiting individual requirements with respect to time,
            budget and target.
          </p>
        </div>
        <div className="textColumContainer">
          <p>
            I have completed an intensive, full stack web development bootcamp
            at Ironhack and became a Fullstack Developer. Meanwhile I improved
            my skills to write Clean Code and learned in Udemy courses to apply
            the Redux Toolkit and TypeScript with React in my projects. My
            motto: "Learning things, improving (them) and reach the goals". My
            goal is to become part of a team where I can apply, develop and
            share my skills. Thank you for reading, your trust and hope
            <span
              className="aboutContactLink"
              onClick={() => dispatch(setMenuNumber(4))}
            >
              <Link to={{ pathname: "/contact" }}> hearing from you</Link>
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
