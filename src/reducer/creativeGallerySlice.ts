import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import config from "../config";
import axios from "axios";

const apiPath = `${config.API_URL}/api`;

type MenuNumber = number | null;
type Error = string | null;

interface SliceState {
  menuNumber: MenuNumber;
  isCVtoPDF: boolean;
  error: Error;
}

const initialState: SliceState = {
  menuNumber: null,
  isCVtoPDF: false,
  error: null,
};

// Create request
export interface Request {
  email: string;
  subject: string;
  message: string;
}

interface CreateRequestParameters {
  request: Request;
  history: any;
}

export const createRequest = createAsyncThunk(
  "creativeGallery/createRequest",
  async (
    { request, history }: CreateRequestParameters,
    { dispatch }
  ): Promise<void> => {
    try {
      await axios.post(`${apiPath}/request`, request);
      history.push("/");
    } catch (err: any) {
      dispatch(setError(err.response.data.errorMessage));
    }
  }
);

export const creativeGallerySlice = createSlice({
  name: "creativeGallery",
  initialState,

  // ---------- Reducers ----------
  reducers: {
    setMenuNumber: (state, action: PayloadAction<number>) => {
      state.menuNumber = action.payload;
    },
    setIsCVtoPDF: (state, action: PayloadAction<boolean>) => {
      state.isCVtoPDF = action.payload;
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
  },
});

export const { setMenuNumber, setIsCVtoPDF, setError } =
  creativeGallerySlice.actions;

export default creativeGallerySlice.reducer;
