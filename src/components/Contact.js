import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare, faMobileAlt, faPen } from "@fortawesome/free-solid-svg-icons";

function Contact(props) {
  return (
    <div className="contactPageContainer">
      <div className="pageNameContainer">
        <h2> Contact me </h2>
      </div>
      <div className="contactContainer">
        <div>
          <h1> Christian Gerbig </h1>
        </div>
        <div>
          <h2> Web Developer </h2>
        </div>
        <div className="contactWaysContainer">
          <div className="contactEmailContainer">
            <h3> <FontAwesomeIcon icon={faEnvelopeSquare}/> e-mail </h3>
            <span className="contactLink"> <Link to={{ pathname: "mailto:chr_gerbig@web.de" }} target="_blank"> <h4> chr_gerbig web.de </h4>  </Link> </span>
          </div>
          <div className="contactPhoneContainer">
            <h3> <FontAwesomeIcon icon={faMobileAlt}/> phone </h3>
            <span className="contactLink"> <Link to={{ pathname: "tel:+4915154824288" }} target="_blank"> <h4> +49 151 548 242 88 </h4> </Link> </span>
          </div>
        </div>
        <form onSubmit={ props.onRequest }>
          <div>
            <h3> <FontAwesomeIcon icon={faPen}/> or write me </h3>
          </div>
          {
            (props.error) ? <p style={{ color: "red" }}>{ props.error }</p> : null
          }
          <div>
            <input type="email" name="email" placeholder="email" className="formInput"/>
          </div>
          <div>
            <input type="text" name="subject" placeholder="subject" className="formInput"/>
          </div>
          <div>
            <textarea name="message" cols="35" rows="7" placeholder="message" className="formTextarea"/>
          </div>
          <input type="submit" value="Submit" className="formSubmit"/>
        </form>
      </div>
    </div>
  );
}

export default Contact;