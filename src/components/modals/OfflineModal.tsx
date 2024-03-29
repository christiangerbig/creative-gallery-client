import { useTranslation } from "react-i18next";
import ModalBody from "./ModalBody";

interface OfflineModalProps {
  isOnline: boolean;
}

const OfflineModal = ({ isOnline }: OfflineModalProps): JSX.Element | null => {
  const { t } = useTranslation();

  if (isOnline) {
    return null;
  }

  return (
    <div>
      <ModalBody
        headline={t("texts.offlineModal.headline")}
        text={t("errorTexts.offline")}
        isClose={false}
      />
    </div>
  );
};

export default OfflineModal;
