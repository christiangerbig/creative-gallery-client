import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMenuNumber } from "../reducer/creativeGallerySlice";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className="homePageContainer logoImage">
      <div className="pageNameContainer">
        <h2> Intro </h2>
      </div>
      <div className="welcomeText">
        <h1> WELCOME </h1>
      </div>
      <div className="toText">
        <h4> to </h4>
      </div>
      <div className="myText">
        <Link
          to={"/about"}
          className="homeLink"
          onClick={() => dispatch(setMenuNumber(1))}
        >      
          <h4> my </h4>
        </Link>
      </div>
      <div className="creativeText">
        <Link
          to={"/projects"}
          className="homeLink"
          onClick={() => dispatch(setMenuNumber(2))}
        >   
          <h2> creative </h2>
        </Link>
      </div>
      <div className="galleryText">
        <Link
          to={"/projects"}
          className="homeLink"
          onClick={() => dispatch(setMenuNumber(2))}
        >         
          <h2> gallery </h2>
        </Link>
      </div>
    </div>
  );
};

export default Home;
