import {
  createRequest,
  setErrorMessage,
} from "../reducer/creativeGallerySlice";
import { Request } from "../typeDefinitions";

export class RequestIO {
  dispatch: any;
  constructor(dispatch: any) {
    this.dispatch = dispatch;
  }

  create = (newRequest: Request, callbackFunction: Function): void => {
    this.dispatch(createRequest(newRequest))
      .unwrap()
      .then((): void => {
        callbackFunction();
      })
      .catch((err: any): void => {
        this.dispatch(setErrorMessage(err.message));
      });
  };
}
