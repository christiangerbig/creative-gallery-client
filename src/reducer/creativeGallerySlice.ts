import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import config from "../config";
import axios from "axios";

const apiPath = `${config.API_URL}/api`;

type MenuNumber = number | null;
type Error = string | null | undefined;

interface SliceState {
  menuNumber: MenuNumber;
  isDesktop: boolean;
  isMenuVisible: boolean;
  isMenuQuit: boolean;
  error: Error;
}

const initialState: SliceState = {
  menuNumber: null,
  isDesktop: false,
  isMenuVisible: false,
  isMenuQuit: false,
  error: null,
};

export interface Request {
  email: string;
  subject: string;
  message: string;
}

interface CreateRequestParameters {
  request: Request;
}

// Create error
const rejectWithValue = (data: any): void | PromiseLike<void> => {
  throw new Error(data);
};

// Create request
export const createRequest = createAsyncThunk(
  "creativeGallery/createRequest",
  async ({ request }: CreateRequestParameters): Promise<void> => {
    try {
      await axios.post(`${apiPath}/request`, request);
    } catch (err: any) {
      rejectWithValue(err.response.data.errorMessage);
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
    setIsDesktop: (state, action: PayloadAction<boolean>) => {
      state.isDesktop = action.payload;
    },
    setIsMenuVisible: (state, action: PayloadAction<boolean>) => {
      state.isMenuVisible = action.payload;
    },
    setIsMenuQuit: (state, action: PayloadAction<boolean>) => {
      state.isMenuQuit = action.payload;
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setMenuNumber,
  setIsDesktop,
  setIsMenuVisible,
  setIsMenuQuit,
  setError,
} = creativeGallerySlice.actions;

export default creativeGallerySlice.reducer;
