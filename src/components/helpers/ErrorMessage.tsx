interface ErrorMessageProps {
  message: string | null;
  output: (message: string) => string;
}

const ErrorMessage = ({
  message,
  output,
}: ErrorMessageProps): JSX.Element | null => {
  if (!message || !message.includes("Form")) {
    return null;
  }

  return (
    <div className="error-message error-message--color-red">
      <span data-cy="error-text">{output(message)}</span>
    </div>
  );
};

export default ErrorMessage;
