type ErrorMessageProps = {
  message: string | null;
  outputFunction: Function;
};

const ErrorMessage = ({
  message,
  outputFunction,
}: ErrorMessageProps): JSX.Element | null => {
  if (!message || !message.includes("Form")) {
    return null;
  }

  return (
    <>
      <span className="error-output is-danger">{outputFunction(message)}</span>
    </>
  );
};

export default ErrorMessage;