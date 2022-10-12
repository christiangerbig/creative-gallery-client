import { useAppSelector } from "../../hooks";
import { RootState } from "../../store";

type ErrorMessageProps = {
  outputFunction: Function;
};

const ErrorMessage = ({
  outputFunction,
}: ErrorMessageProps): JSX.Element => {
  const errorMessage = useAppSelector(
    (state: RootState) => state.creativeGallery.errorMessage
  );

  return (
    <>
      <span className="error-output is-danger">
        {outputFunction(errorMessage)}
      </span>
    </>
  );
};

export default ErrorMessage;
