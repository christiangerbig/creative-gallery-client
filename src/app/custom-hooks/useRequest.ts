import { useAppDispatch } from "../hooks";
import {
  createRequest,
  setErrorMessage,
} from "../../reducer/creativeGallerySlice";
import { Request } from "../typeDefinitions";

interface RequestMethods {
  createRequest: Function;
}

export const useRequest = (): RequestMethods => {
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
