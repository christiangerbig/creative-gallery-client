import { useMemo } from "react";
import { useTranslation } from "react-i18next";

interface ContactFormProps {
  isCreatingRequest: boolean;
  handleSubmitRequest: (event: React.FormEvent<HTMLFormElement>) => void;
}

const ContactForm = ({
  isCreatingRequest,
  handleSubmitRequest,
}: ContactFormProps): JSX.Element => {
  const { t } = useTranslation();

  const buttonState = useMemo(
    (): boolean => (isCreatingRequest ? true : false),
    [isCreatingRequest]
  );

  return (
    <>
      <form
        className="contact-form"
        onSubmit={(event: React.FormEvent<HTMLFormElement>): void => {
          handleSubmitRequest(event);
        }}
      >
        <input
          type="email"
          name="email"
          placeholder={t("texts.contact.createRequest.form.inputEmail")}
          className="contact-form__input"
          data-cy="form-input-email"
        />
        <input
          type="text"
          name="subject"
          placeholder={t("texts.contact.createRequest.form.inputSubject")}
          className="contact-form__input"
          data-cy="form-input-subject"
        />
        <textarea
          name="message"
          placeholder={t("texts.contact.createRequest.form.inputMessage")}
          cols={35}
          rows={7}
          className="contact-form__text-area"
          data-cy="form-input-message"
        />
        <button
          type="submit"
          disabled={buttonState}
          formNoValidate
          className="contact-form__button"
          data-cy="form-submit-request"
        >
          {t("button.submit")}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
