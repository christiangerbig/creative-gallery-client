import { useAppSelector } from "../../hooks";
import { useOnlineStatus } from "../../lib/connectionCheck";
import { RootState } from "../../store";
import ErrorModal from "./ErrorModal";
import OfflineModal from "./OfflineModal";

const Modals = (): JSX.Element => {
  const errorMessage = useAppSelector(
    (state: RootState) => state.creativeGallery.errorMessage
  );
  const isOnline = useOnlineStatus();

  if (isOnline) {
    return <ErrorModal message={errorMessage} />;
  }
  return <OfflineModal isOnline={isOnline} />;
};

export default Modals;
