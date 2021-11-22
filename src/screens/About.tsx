import { useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { useAppDispatch } from "../hooks";
import { setMenuNumber } from "../reducer/creativeGallerySlice";

const About = (): JSX.Element => {
  const dispatch = useAppDispatch();

  // Scroll to top as soon as page loads
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

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
          <h3> Hi, </h3>
          <p>
            I'm Christian Gerbig. I'm a Web Developer focused on Frontend and
            Backend technologies. My homebase is Hamburg in Germany. <br />
            <br /> I believe in the
            <span className="colorOrange">
              {" "}
              positive power of communication{" "}
            </span>
            with a trust in
            <span className="colorOrange"> cooperative team working </span>
            making an asset from sharing different points of views. <br />
            <br /> I like to use every aspect of new technology available to
            reach the goals and love to code
            <span className="colorOrange"> optimized solutions </span> suiting
            individual requirements with respect to time, budget and target.
            <br /> <br /> My motto: "Learning things, improving (them) and reach
            the goals".
          </p>
        </div>
        <div className="textColumContainer">
          <h3> How it began </h3>
          <p>
            I started to learn the fundamentals of
            <span className="colorOrange"> Web Development </span> by myself and
            in the Full Stack Web Development Bootcamp at Ironhack. <br />
            <br /> Meanwhile I improved my skills to write
            <span className="colorOrange"> Clean Code </span> and learned in
            several Udemy courses to apply the
            <span className="colorOrange"> Redux Toolkit </span> and
            <span className="colorOrange"> TypeScript </span> together with
            <span className="colorOrange"> React </span> in my projects. <br />
            <br /> I would like to become part of a team where I can apply,
            develop and share my skills. <br /> <br />
            <span
              className="aboutContactLink"
              onClick={() => dispatch(setMenuNumber(4))}
            >
              <Link to={{ pathname: "/contact" }}> Let's get in touch. </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
