import { useAppSelector } from "../../hooks";
import { RootState } from "../../store";

type ErrorMessageOutputProps = {
  printErrorMessage: Function;
};

const ErrorMessageOutput = ({
  printErrorMessage,
}: ErrorMessageOutputProps): JSX.Element => {
  const errorMessage = useAppSelector(
    (state: RootState) => state.creativeGallery.errorMessage
  );

  return (
    <>
      <span className="error-output is-danger">
        {printErrorMessage(errorMessage)}
      </span>
    </>
  );
};

export default ErrorMessageOutput;
