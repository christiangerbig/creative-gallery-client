import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import config from "../config";
import axios from "axios";

const apiPath = `${config.API_URL}/api`;

type MenuNumber = number | null;
type Error = string | null | undefined;

export interface Request {
  email: string;
  subject: string;
  message: string;
}

interface InitialState {
  menuNumber: MenuNumber;
  isDesktop: boolean;
  isMenuVisible: boolean;
  isMenuQuit: boolean;
  isCreatingRequest: boolean;
  error: Error;
}

interface CreateRequestParameters {
  request: Request;
}

// Initialize states
const initialState: InitialState = {
  menuNumber: null,
  isDesktop: false,
  isMenuVisible: false,
  isMenuQuit: false,
  isCreatingRequest: false,
  error: null,
};

// Create error
const rejectWithValue = (data: any): void | PromiseLike<void> => {
  throw new Error(data);
};

// Create request
export const createRequest = createAsyncThunk(
  "creativeGallery/createRequest",
  async ({ request }: CreateRequestParameters): Promise<void> => {
    try {
      await axios.post(`${apiPath}/request/create`, request);
    } catch (err: any) {
      return rejectWithValue(err.response.data.errorMessage);
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
    setIsCreatingRequest: (state, action: PayloadAction<boolean>) => {
      state.isCreatingRequest = action.payload;
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
  },

  // ---------- Extra Reducers ----------
  extraReducers: (builder) => {
    // --------- Plants ----------
    builder.addCase(createRequest.fulfilled, (state) => {
      state.isCreatingRequest = false;
    });
    builder.addCase(createRequest.rejected, (state) => {
      state.isCreatingRequest = false;
    });
  },
});

// ---------- Slice actions ----------
export const {
  setMenuNumber,
  setIsDesktop,
  setIsMenuVisible,
  setIsMenuQuit,
  setIsCreatingRequest,
  setError,
} = creativeGallerySlice.actions;

export default creativeGallerySlice.reducer;
