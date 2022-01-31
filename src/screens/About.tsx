import { useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { useAppDispatch } from "../hooks";
import { setMenuItem } from "../reducer/creativeGallerySlice";
import HeaderText from "../components/HeaderText";

const About = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <div className="aboutPageContainer">
      <header className="headline">
        <HeaderText
          text={["There is only one way", "Straight forward"]}
          borderColor={"green"}
        />
      </header>
      <div className="textContainer">
        <div className="textColumContainer">
          <article>
            <header>
              <h3> Hi, </h3>
            </header>
            <p>
              I'm Christian Gerbig. I'm a Web Developer focused on Frontend and
              Backend technologies. My homebase is Hamburg in Germany.
            </p>
            <p>
              I believe in the
              <span className="colorOrange">
                {" "}
                positive power of communication{" "}
              </span>
              with a trust in
              <span className="colorOrange"> cooperative team working </span>
              making an asset from sharing different points of views.
            </p>
            <p>
              I like to use every aspect of new technology available to reach
              the goals and love to code
              <span className="colorOrange"> optimized solutions </span> suiting
              individual requirements with respect to time, budget and target.
            </p>
            <p>
              My motto: "Learning things, improving (them) and reach the goals".
            </p>
          </article>
        </div>
        <div className="textColumContainer">
          <article>
            <header>
              <h3> How it began </h3>
            </header>
            <p>
              I started to learn the fundamentals of
              <span className="colorOrange"> Web Development </span> by myself
              and as a Full Stack Web Developper at Ironhack.
            </p>
            <p>
              Meanwhile I improved my skills to write
              <span className="colorOrange"> Clean Code </span> and learned in
              several Udemy courses to apply the
              <span className="colorOrange"> Redux Toolkit </span> and
              <span className="colorOrange"> TypeScript </span> together with
              <span className="colorOrange"> React </span> in my projects.{" "}
            </p>
            <p>
              I would like to become part of a team where I can apply, develop
              and share my skills.
            </p>
            <p>
              <span
                className="aboutContactLink"
                onClick={() => dispatch(setMenuItem("contact"))}
              >
                <Link to={{ pathname: "/contact" }}> Let's get in touch. </Link>
              </span>
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default About;
