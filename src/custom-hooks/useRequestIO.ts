import { useAppDispatch } from "../hooks";
import {
  createRequest,
  setErrorMessage,
} from "../reducer/creativeGallerySlice";
import { Request } from "../typeDefinitions";

type RequestIO = {
  create: Function;
};

export const useRequestIO = (): RequestIO => {
  const dispatch = useAppDispatch();
  const requestIO = {
    create(newRequest: Request, callbackFunction: Function): void {
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
  return requestIO;
};
