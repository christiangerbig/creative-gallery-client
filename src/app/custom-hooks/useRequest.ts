import { useAppDispatch } from "../hooks";
import {
  createRequest,
  setErrorMessage,
} from "../../reducer/creativeGallerySlice";
import { Request } from "../typeDefinitions";

interface RequestMethods {
  createRequest: (newRequest: Request, callback: () => void) => void;
}

export const useRequest = (): RequestMethods => {
  const dispatch = useAppDispatch();
  return {
    createRequest: (newRequest: Request, callback: () => void): void => {
      dispatch(createRequest(newRequest))
        .unwrap()
        .then((): void => {
          callback();
        })
        .catch((err: any): void => {
          dispatch(setErrorMessage(err.message));
        });
    },
  };
};
