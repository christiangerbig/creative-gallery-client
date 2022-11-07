import { useTranslation } from "react-i18next";

type ContactFormProps = {
  isCreatingRequest: boolean;
  handleSubmitRequest: Function;
};

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
        />
        <input
          type="text"
          name="subject"
          placeholder={t("texts.contact.createRequest.form.inputSubject")}
          className="form-input"
        />
        <textarea
          name="message"
          placeholder={t("texts.contact.createRequest.form.inputMessage")}
          cols={35}
          rows={7}
          className="form-textarea"
        />
        <button
          type="submit"
          disabled={buttonState()}
          formNoValidate
          className="form-submit"
        >
          {t("button.submit")}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
