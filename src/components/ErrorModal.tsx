import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../hooks";
import { setErrorMessage } from "../reducer/creativeGallerySlice";

type ErrorModalProps = {
  errorMessage: string;
};

const ErrorModal = ({ errorMessage }: ErrorModalProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const printErrorMessage = (errorMessage: string): string => {
    switch (errorMessage) {
      case "Create request failed":
        return t("errors.request.createMessageFailed");
      default:
        return t("errors.general");
    }
  };

  const closeModal = (): void => {
    dispatch(setErrorMessage(null));
  };

  return (
    <div className="error-modal fade-error-modal-in">
      <div className="error-modal-box">
        <h1>{t("errorModal.headline")}</h1>
        <h2>{printErrorMessage(errorMessage)}</h2>
        <button
          className="error-modal-button mt-4 mb-3"
          onClick={() => {
            closeModal();
          }}
        >
          {t("button.proceed")}
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
