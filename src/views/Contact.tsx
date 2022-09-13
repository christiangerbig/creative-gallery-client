import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
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
import ContactLink from "../components/ContactLink";
import ContactForm from "../components/ContactForm";

const Contact = (): JSX.Element => {
  const isCreatingRequest = useAppSelector(
    (state: RootState) => state.creativeGallery.isCreatingRequest
  );
  const errorMessage = useAppSelector(
    (state: RootState) => state.creativeGallery.errorMessage
  );
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { t } = useTranslation();

  useEffect(() => {
    const setErrorMessageAndScrollToTop = (): void => {
      dispatch(setErrorMessage(null));
      scroll.scrollToTop();
    };

    setErrorMessageAndScrollToTop();
  }, []);

  const handleSubmitRequest = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    const setMenuItemAndReturnToHomePage = (): void => {
      dispatch(setMenuItem("home"));
      history.push("/");
    };

    event.preventDefault();
    const { email, subject, message } = event.target as any;
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
    <div className="contact-page-container">
      <header className="headline">
        <HeaderText
          headlines={{
            headline: t("contact.headline"),
            subheadline: t("contact.subheadline"),
          }}
          borderColorName={"blue"}
        />
      </header>
      <div className="contact-container">
        <h1> {t("contact.name")} </h1>
        <h2> {t("contact.jobname")} </h2>
        <div className="contact-ways-container">
          <div className="contact-email-container">
            <h3>
              <FontAwesomeIcon icon={faEnvelopeSquare} /> {t("contact.email")}
            </h3>
            <ContactLink
              linkPath="mailto:chr_gerbig@web.de"
              linkClass="contact-link"
              linkText="chr_gerbig(at)web.de"
            />
          </div>
          <div className="contact-phone-container">
            <h3>
              <FontAwesomeIcon icon={faMobileAlt} /> {t("contact.phone")}
            </h3>
            <ContactLink
              linkPath="tel:+4915154824288"
              linkClass="contact-link"
              linkText="+49&nbsp;151&nbsp;548&nbsp;242&nbsp;88"
            />
          </div>
        </div>
        <div>
          <h3>
            <FontAwesomeIcon icon={faPen} /> {t("contact.submit")}
          </h3>
        </div>
        {errorMessage && (
          <span className="error-output is-danger"> {errorMessage} </span>
        )}
        <ContactForm
          isCreatingRequest={isCreatingRequest}
          handleSubmitRequest={handleSubmitRequest}
        />
      </div>
    </div>
  );
};

export default Contact;
