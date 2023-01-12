import { useTranslation } from "react-i18next";
import ModalBody from "./ModalBody";

type ErrorModalProps = {
  message: string | null;
};

const ErrorModal = ({ message }: ErrorModalProps): JSX.Element | null => {
  const { t } = useTranslation();

  const convertErrorMessage = (message: string): string => {
    switch (message) {
      case "Create request failed":
        return t("errorTexts.createRequest.createRequestFailed");
      default:
        return t("errors.general");
    }
  };

  if (!message || message.includes("Form")) {
    return null;
  }

  return (
    <div>
      <ModalBody
        headline={t("texts.errorModal.headline")}
        text={convertErrorMessage(message)}
        isClose={true}
      />
    </div>
  );
};

export default ErrorModal;
