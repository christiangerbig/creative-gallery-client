import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  createRequest,
  setMenuItem,
  setErrorMessage,
} from "../reducer/creativeGallerySlice";
import { Request } from "../typeDefinitions";
import { RootState } from "../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeSquare,
  faMobileAlt,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import HeaderText from "../components/HeaderText";

const Contact = (): JSX.Element => {
  const isCreatingRequest = useAppSelector(
    (state: RootState) => state.creativeGallery.isCreatingRequest
  );
  const errorMessage = useAppSelector(
    (state: RootState) => state.creativeGallery.errorMessage
  );
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    const setErrorMessageAndScrollToTop = (): void => {
      dispatch(setErrorMessage(null));
      scroll.scrollToTop();
    };

    setErrorMessageAndScrollToTop();
  }, []);

  const handleSubmitRequest = (event: any): void => {
    const setMenuItemAndReturnToHomePage = (): void => {
      dispatch(setMenuItem("home"));
      history.push("/");
    };

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
        setMenuItemAndReturnToHomePage();
      })
      .catch((err) => {
        dispatch(setErrorMessage(err.message));
      });
  };

  return (
    <div className="contactPageContainer">
      <header className="headline">
        <HeaderText
          text={["Don't hesitate", "to contact me"]}
          borderColor={"blue"}
        />
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
        <p
          hidden={errorMessage ? false : true}
          className="errorOutput warningColor"
        >
          {" "}
          {errorMessage}{" "}
        </p>
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
            placeholder="message"
            cols={35}
            rows={7}
            className="formTextarea"
          />
          <input
            type="submit"
            value="SUBMIT"
            disabled={isCreatingRequest ? true : false}
            formNoValidate
            className="formSubmit"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
