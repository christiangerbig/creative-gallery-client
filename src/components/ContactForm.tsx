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
          name={t("contact.contactForm.inputEmail")}
          placeholder="email"
          className="formInput"
        />
        <input
          type="text"
          name={t("contact.contactForm.inputSubject")}
          placeholder="subject"
          className="formInput"
        />
        <textarea
          name="message"
          placeholder={t("contact.contactForm.inputMessage")}
          cols={35}
          rows={7}
          className="formTextarea"
        />
        <input
          type="submit"
          value={t("contact.contactForm.submit")}
          disabled={isCreatingRequest ? true : false}
          formNoValidate
          className="formSubmit"
        />
      </form>
    </>
  );
};

export default ContactForm;
