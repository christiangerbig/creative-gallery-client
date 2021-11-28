import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  createRequest,
  setMenuNumber,
  setError,
} from "../reducer/creativeGallerySlice";
import { Request } from "../typeDefinitions";
import { RootState } from "../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeSquare,
  faMobileAlt,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

const Contact = (): JSX.Element => {
  const isCreatingRequest = useAppSelector(
    (state: RootState) => state.creativeGallery.isCreatingRequest
  );
  const error = useAppSelector(
    (state: RootState) => state.creativeGallery.error
  );
  const dispatch = useAppDispatch();
  const history = useHistory();

  // Clear error text and scroll to top as soon as page loads
  useEffect(() => {
    dispatch(setError(null));
    scroll.scrollToTop();
  }, [dispatch]);

  // Create request
  const handleSubmitRequest = (event: any): void => {
    event.preventDefault();
    const { email, subject, message } = event.target;
    const request: Request = {
      email: email.value,
      subject: subject.value,
      message: message.value,
    };
    dispatch(createRequest({ request }))
      .unwrap()
      .then(() => {
        dispatch(setMenuNumber(0));
        history.push("/");
      })
      .catch((err) => {
        dispatch(setError(err.message));
      });
  };

  return (
    <div className="contactPageContainer">
      <header>
        <div className="headerText blueBorder">
          <h1 className="textFat"> Don't hesitate </h1>
          <h2 className="textBig"> to contact me </h2>
        </div>
      </header>
      <div className="contactContainer">
        <h1> Christian Gerbig </h1>
        <h2> Web Developer </h2>
        <div className="contactWaysContainer">
          <div className="contactEmailContainer">
            <h3>
              <FontAwesomeIcon icon={faEnvelopeSquare} /> e-mail
            </h3>
            <span className="contactLink">
              <Link
                to={{ pathname: "mailto:chr_gerbig@web.de" }}
                target="_blank"
              >
                <h4> chr_gerbig(at)web.de </h4>
              </Link>
            </span>
          </div>
          <div className="contactPhoneContainer">
            <h3>
              <FontAwesomeIcon icon={faMobileAlt} /> phone
            </h3>
            <span className="contactLink">
              <Link to={{ pathname: "tel:+4915154824288" }} target="_blank">
                <h4> +49&nbsp;151&nbsp;548&nbsp;242&nbsp;88 </h4>
              </Link>
            </span>
          </div>
        </div>
        <div>
          <h3>
            <FontAwesomeIcon icon={faPen} /> or write me
          </h3>
        </div>
        {error && <p className="errorOutput warningColor"> {error} </p>}
        <form
          onSubmit={(event) => {
            handleSubmitRequest(event);
          }}
        >
          <input
            type="email"
            name="email"
            placeholder="email"
            className="formInput"
          />
          <input
            type="text"
            name="subject"
            placeholder="subject"
            className="formInput"
          />
          <textarea
            name="message"
            cols={35}
            rows={7}
            placeholder="message"
            className="formTextarea"
          />
          <input
            type="submit"
            value="SUBMIT"
            className="formSubmit"
            disabled={isCreatingRequest ? true : false}
            formNoValidate
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
