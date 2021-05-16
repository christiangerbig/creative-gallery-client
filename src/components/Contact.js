import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare, faMobileAlt, faPen } from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
  render() {
    return (
      <>
        <div className="contactPageContainer">
          <div className="pageNameContainer">
            <h2> Contact me </h2>
          </div>
          <div className="contactContainer">
            <div>
              <h2> Christian Gerbig </h2>
            </div>
            <div>
              <h3> Web Developer </h3>
            </div>
            <div className="contactWaysContainer">
              <div className="contactEmailContainer">
                <h3> <FontAwesomeIcon icon={faEnvelopeSquare}/> e-mail </h3>
                <h4> chr_gerbig@web.de  </h4>
              </div>
              <div className="contactPhoneContainer">
                <h3> <FontAwesomeIcon icon={faMobileAlt}/> phone </h3>
                <h4> +49 151 548 242 88 </h4>
              </div>
            </div>
            <form onSubmit={(event) => this.props.onRequest(event)}>
              <div>
                <h3> <FontAwesomeIcon icon={faPen}/> or write me </h3>
              </div>
              <div>
                <input type="email" name="email" placeholder="email"/>
              </div>
              <div>
                <input type="text" name="subject" placeholder="subject"/>
              </div>
              <div>
                <textarea name="message" cols="35" rows="7" placeholder="message"/>
              </div>
              <button type="submit"> Submit </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;