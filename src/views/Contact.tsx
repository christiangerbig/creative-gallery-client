import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useRequest } from "../app/custom-hooks/useRequest";
import {
  setNavItem,
  setErrorMessage,
  selectIsCreatingRequest,
  selectErrorMessage,
} from "../reducer/creativeGallerySlice";
import { Request } from "../app/typeDefinitions";
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
  const isCreatingRequest = useAppSelector(selectIsCreatingRequest);
  const errorMessage = useAppSelector(selectErrorMessage);
  const dispatch = useAppDispatch();
  const { push } = useHistory();
  const { t } = useTranslation();
  const { createRequest } = useRequest();
  const { scrollToTop } = scroll;

  useEffect(() => {
    const setErrorMessageAndScrollToTop = (): void => {
      dispatch(setErrorMessage(null));
      scrollToTop();
    };

    setErrorMessageAndScrollToTop();
  }, []);

  const handleSubmitRequest = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    const {
      target: { email, subject, message },
    } = event as any;
    const newRequest: Request = {
      email: email.value,
      subject: subject.value,
      message: message.value,
    };
    event.preventDefault();
    createRequest(newRequest, (): void => {
      dispatch(setNavItem("home"));
      push("/");
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
    <div className="contact" data-cy="contact-page">
      <header className="header">
        <HeaderText
          headlines={{
            headline: t("texts.contact.headline"),
            subheadline: t("texts.contact.subheadline"),
          }}
          borderColorName={"blue"}
        />
      </header>
      <div className="contact__details">
        <h1 className="contact__details__name">{t("texts.contact.name")}</h1>
        <h2 className="contact__details__jobname">
          {t("texts.contact.jobname")}
        </h2>
        <div className="contact__ways">
          <div>
            <h3 className="contact__ways__email-headline">
              <FontAwesomeIcon icon={faEnvelopeSquare} />{" "}
              {t("texts.contact.email")}
            </h3>
            <ContactLink
              path="mailto:chr_gerbig@web.de"
              styleClass="contact-link"
              text={t("texts.contact.emailAddress")}
            />
          </div>
          <div>
            <h3 className="contact__ways__phone-headline">
              <FontAwesomeIcon icon={faMobileAlt} /> {t("texts.contact.phone")}
            </h3>
            <ContactLink
              path="tel:+4915154824288"
              styleClass="contact-link"
              text={t("texts.contact.phoneNumber")}
            />
          </div>
          <div>
            <h3 className="contact__ways__form-headline">
              <FontAwesomeIcon icon={faPen} /> {t("texts.contact.submit")}
            </h3>
            <ErrorMessage message={errorMessage} output={convertErrorMessage} />
            <ContactForm
              isCreatingRequest={isCreatingRequest}
              handleSubmitRequest={handleSubmitRequest}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
