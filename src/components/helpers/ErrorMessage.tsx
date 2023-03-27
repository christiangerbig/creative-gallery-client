interface ErrorMessageProps {
  message: string | null;
  outputFunction: Function;
}

const ErrorMessage = ({
  message,
  outputFunction,
}: ErrorMessageProps): JSX.Element | null => {
  if (!message || !message.includes("Form")) {
    return null;
  }

  return (
    <div className="error-message error-message--color-red">
      <span data-cy="error-text">{outputFunction(message)}</span>
    </div>
  );
};

export default ErrorMessage;
