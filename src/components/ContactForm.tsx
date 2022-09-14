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

  return (
    <>
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          handleSubmitRequest(event);
        }}
      >
        <input
          type="email"
          name={t("contactForm.inputEmail")}
          placeholder="email"
          className="form-input"
        />
        <input
          type="text"
          name={t("contactForm.inputSubject")}
          placeholder="subject"
          className="form-input"
        />
        <textarea
          name="message"
          placeholder={t("contactForm.inputMessage")}
          cols={35}
          rows={7}
          className="form-textarea"
        />
        <button
          type="submit"
          disabled={isCreatingRequest ? true : false}
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
