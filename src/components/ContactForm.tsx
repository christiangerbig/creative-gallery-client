type ContactFormProps = {
  isCreatingRequest: boolean;
  handleSubmitRequest: Function;
};

const ContactForm = ({
  isCreatingRequest,
  handleSubmitRequest,
}: ContactFormProps): JSX.Element => {
  return (
    <>
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
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
    </>
  );
};

export default ContactForm;
