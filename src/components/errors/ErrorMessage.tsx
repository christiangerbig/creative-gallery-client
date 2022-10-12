import { useAppSelector } from "../../hooks";
import { RootState } from "../../store";

type ErrorMessageOutputProps = {
  outputFunction: Function;
};

const ErrorMessageOutput = ({
  outputFunction,
}: ErrorMessageOutputProps): JSX.Element => {
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

export default ErrorMessageOutput;