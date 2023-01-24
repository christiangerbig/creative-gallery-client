import { useTranslation } from "react-i18next";

interface ContactFormProps {
  isCreatingRequest: boolean;
  handleSubmitRequest: Function;
}

const ContactForm = ({
  isCreatingRequest,
  handleSubmitRequest,
}: ContactFormProps): JSX.Element => {
  const { t } = useTranslation();

  const buttonState = (): boolean => {
    return isCreatingRequest ? true : false;
  };

  return (
    <>
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>): void => {
          handleSubmitRequest(event);
        }}
      >
        <input
          type="email"
          name="email"
          placeholder={t("texts.contact.createRequest.form.inputEmail")}
          className="form-input"
          data-cy="form-input-email"
        />
        <input
          type="text"
          name="subject"
          placeholder={t("texts.contact.createRequest.form.inputSubject")}
          className="form-input"
          data-cy="form-input-subject"
        />
        <textarea
          name="message"
          placeholder={t("texts.contact.createRequest.form.inputMessage")}
          cols={35}
          rows={7}
          className="form-textarea"
          data-cy="form-input-message"
        />
        <button
          type="submit"
          disabled={buttonState()}
          formNoValidate
          className="form-submit"
          data-cy="form-submit-request"
        >
          {t("button.submit")}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
