import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../app/hooks";
import { setErrorMessage } from "../../reducer/creativeGallerySlice";

interface ModalBodyProps {
  headline: string;
  text: string;
  isClose: boolean;
}

const ModalBody = ({
  headline,
  text,
  isClose,
}: ModalBodyProps): JSX.Element => {
  const divElementRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleCloseModal = (): void => {
    dispatch(setErrorMessage(null));
  };

  const handleClickOutside = ({ target }: any): void => {
    if (divElementRef.current === target && isClose) {
      handleCloseModal();
    }
  };

  return (
    <div
      ref={divElementRef}
      className="modal-body modal-body--fade-in"
      onClick={handleClickOutside}
    >
      <div className="modal-body__box">
        <h1>{headline}</h1>
        <h2>{text}</h2>
        {isClose && (
          <button
            className="modal-body__box__button"
            onClick={handleCloseModal}
          >
            {t("button.proceed")}
          </button>
        )}
      </div>
    </div>
  );
};

export default ModalBody;
