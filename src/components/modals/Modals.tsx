import { useAppSelector } from "../../app/hooks";
import { useOnlineStatus } from "../../app/custom-hooks/useOnlineStatus";
import { selectErrorMessage } from "../../reducer/creativeGallerySlice";
import ErrorModal from "./ErrorModal";
import OfflineModal from "./OfflineModal";

const Modals = (): JSX.Element => {
  const errorMessage = useAppSelector(selectErrorMessage);
  const isOnline = useOnlineStatus();

  if (isOnline) {
    return <ErrorModal message={errorMessage} />;
  }
  return <OfflineModal isOnline={isOnline} />;
};

export default Modals;
