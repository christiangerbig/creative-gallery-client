import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../hooks";
import { setErrorMessage } from "../reducer/creativeGallerySlice";

type ErrorModalProps = {
  errorMessage: string;
};

const ErrorModal = ({ errorMessage }: ErrorModalProps): JSX.Element => {
  const divElementRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleCloseModal = (): void => {
    dispatch(setErrorMessage(null));
  };

  const handleClickOutside = (event: any): void => {
    if (divElementRef.current === event.target) {
      handleCloseModal();
    }
  };

  const printErrorMessage = (errorMessage: string): string => {
    switch (errorMessage) {
      case "Create request failed":
        return t("errors.request.createRequestFailed");
      default:
        return t("errors.general");
    }
  };

  return (
    <div
      ref={divElementRef}
      className="error-modal fade-error-modal-in"
      onClick={(event) => {
        handleClickOutside(event);
      }}
    >
      <div className="error-modal-box">
        <h1>{t("errorModal.headline")}</h1>
        <h2>{printErrorMessage(errorMessage)}</h2>
        <button
          className="error-modal-button mt-4 mb-3"
          onClick={() => {
            handleCloseModal();
          }}
        >
          {t("button.proceed")}
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
