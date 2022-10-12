import { useTranslation } from "react-i18next";
import ModalBody from "./ModalBody";

type ErrorModalProps = {
  errorMessage: string;
};

const ErrorModal = ({ errorMessage }: ErrorModalProps): JSX.Element => {
  const { t } = useTranslation();

  const convertErrorMessage = (errorMessage: string): string => {
    switch (errorMessage) {
      case "Create request failed":
        return t("errorTexts.createRequest.createRequestFailed");
      default:
        return t("errors.general");
    }
  };

  return (
    <div>
      <ModalBody
        headline={t("errorModal.headline")}
        errorText={convertErrorMessage(errorMessage)}
        isClose={true}
      />
    </div>
  );
};

export default ErrorModal;
