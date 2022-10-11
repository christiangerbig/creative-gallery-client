import { useTranslation } from "react-i18next";
import ModalBody from "./ModalBody";

const OfflineModal = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div>
      <ModalBody
        headline={t("texts.offlineModal.headline")}
        errorText={t("errorTexts.offline")}
        isAutoExit={true}
      />
    </div>
  );
};

export default OfflineModal;
