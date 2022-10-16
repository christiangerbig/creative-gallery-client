import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useRequestIO } from "../custom-hooks/useRequestIO";
import { setNavItem, setErrorMessage } from "../reducer/creativeGallerySlice";
import { Request } from "../typeDefinitions";
import { RootState } from "../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeSquare,
  faMobileAlt,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import HeaderText from "../components/helpers/HeaderText";
import ErrorMessage from "../components/helpers/ErrorMessage";
import ContactLink from "../components/contact/ContactLink";
import ContactForm from "../components/contact/ContactForm";

const Contact = (): JSX.Element => {
  const isCreatingRequest = useAppSelector(
    (state: RootState) => state.creativeGallery.isCreatingRequest
  );
  const errorMessage = useAppSelector(
    (state: RootState) => state.creativeGallery.errorMessage
  );
  const dispatch = useAppDispatch();
  const history = useHistory();
  const requestIO = useRequestIO();
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
    const { email, subject, message } = event.target as any;
    const newRequest: Request = {
      email: email.value,
      subject: subject.value,
      message: message.value,
    };
    event.preventDefault();
    requestIO.create(newRequest, (): void => {
      dispatch(setNavItem("home"));
      history.push("/");
    });
  };

  const convertErrorMessage = (errorMessage: string): string => {
    switch (errorMessage) {
      case "Form: Email missing":
        return t("errorTexts.createRequest.form.emailMissing");
      case "Form: Subject missing":
        return t("errorTexts.createRequest.form.subjectMissing");
      case "Form: Message missing":
        return t("errorTexts.createRequest.form.messageMissing");
      case "Form: Email format invalid":
        return t("errorTexts.createRequest.form.emailFormatInvalid");
      default:
        return t("errorTexts.general");
    }
  };

  return (
    <div className="contact-page-container" data-cy="contact-page">
      <header className="headline">
        <HeaderText
          headlines={{
            headline: t("texts.contact.headline"),
            subheadline: t("texts.contact.subheadline"),
          }}
          borderColorName={"blue"}
        />
      </header>
      <div className="contact-container">
        <h1>{t("texts.contact.name")}</h1>
        <h2>{t("texts.contact.jobname")}</h2>
        <div className="contact-ways-container">
          <div className="contact-email-container">
            <h3>
              <FontAwesomeIcon icon={faEnvelopeSquare} />{" "}
              {t("texts.contact.email")}
            </h3>
            <ContactLink
              path="mailto:chr_gerbig@web.de"
              styleClass="contact-link"
              text="chr_gerbig(at)web.de"
            />
          </div>
          <div className="contact-phone-container">
            <h3>
              <FontAwesomeIcon icon={faMobileAlt} /> {t("texts.contact.phone")}
            </h3>
            <ContactLink
              path="tel:+4915154824288"
              styleClass="contact-link"
              text="+49&nbsp;151&nbsp;548&nbsp;242&nbsp;88"
            />
          </div>
        </div>
        <div>
          <h3>
            <FontAwesomeIcon icon={faPen} /> {t("texts.contact.submit")}
          </h3>
        </div>
        <ErrorMessage
          message={errorMessage}
          outputFunction={convertErrorMessage}
        />
        <ContactForm
          isCreatingRequest={isCreatingRequest}
          handleSubmitRequest={handleSubmitRequest}
        />
      </div>
    </div>
  );
};

export default Contact;
