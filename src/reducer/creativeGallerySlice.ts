import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import config from "../config";
import axios from "axios";
import { Request } from "../typeDefinitions";

type MenuItem = string | null;
type ErrorMessage = string | null;

interface InitialState {
  menuItem: MenuItem;
  isDesktop: boolean;
  isMenuVisible: boolean;
  isOpenMenu: boolean;
  isCloseMenu: boolean;
  isCreatingRequest: boolean;
  errorMessage: ErrorMessage;
}

interface CreateRequestParameters {
  request: Request;
}

const initialState: InitialState = {
  menuItem: null,
  isDesktop: false,
  isMenuVisible: false,
  isOpenMenu: false,
  isCloseMenu: false,
  isCreatingRequest: false,
  errorMessage: null,
};

const apiPath = `${config.API_URL}/api`;

const rejectWithValue = (data: string): void | PromiseLike<void> => {
  throw new Error(data);
};

export const createRequest = createAsyncThunk(
  "creativeGallery/createRequest",
  async ({ request }: CreateRequestParameters): Promise<void | any> => {
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

  reducers: {
    // ----- Menu -----
    setIsDesktop: (state, action: PayloadAction<boolean>) => {
      state.isDesktop = action.payload;
    },
    setIsMenuVisible: (state, action: PayloadAction<boolean>) => {
      state.isMenuVisible = action.payload;
    },
    setIsOpenMenu: (state, action: PayloadAction<boolean>) => {
      state.isOpenMenu = action.payload;
    },
    setIsCloseMenu: (state, action: PayloadAction<boolean>) => {
      state.isCloseMenu = action.payload;
    },
    setMenuItem: (state, action: PayloadAction<string>) => {
      state.menuItem = action.payload;
    },

    // ----- Request -----
    setIsCreatingRequest: (state, action: PayloadAction<boolean>) => {
      state.isCreatingRequest = action.payload;
    },

    // ----- Error handling -----
    setErrorMessage: (state, action: PayloadAction<ErrorMessage>) => {
      state.errorMessage = action.payload;
    },
  },

  extraReducers: (builder) => {
    // ----- Request -----
    builder.addCase(createRequest.fulfilled, (state) => {
      state.isCreatingRequest = false;
    });
    builder.addCase(createRequest.rejected, (state) => {
      state.isCreatingRequest = false;
    });
  },
});

// ----- Slice actions -----
export const {
  // ----- Menu -----
  setIsDesktop,
  setIsMenuVisible,
  setIsOpenMenu,
  setIsCloseMenu,
  setMenuItem,

  // ----- Request -----
  setIsCreatingRequest,

  // ----- Error handling -----
  setErrorMessage,
} = creativeGallerySlice.actions;

export default creativeGallerySlice.reducer;
