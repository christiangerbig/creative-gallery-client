import { useAppDispatch } from "../hooks";
import {
  createRequest,
  setErrorMessage,
} from "../../reducer/creativeGallerySlice";
import { Request } from "../typeDefinitions";

interface HandleRequest {
  createRequest: Function;
}

export const useHandleRequest = (): HandleRequest => {
  const dispatch = useAppDispatch();
  return {
    createRequest: (newRequest: Request, callbackFunction: Function): void => {
      dispatch(createRequest(newRequest))
        .unwrap()
        .then((): void => {
          callbackFunction();
        })
        .catch((err: any): void => {
          dispatch(setErrorMessage(err.message));
        });
    },
  };
};
