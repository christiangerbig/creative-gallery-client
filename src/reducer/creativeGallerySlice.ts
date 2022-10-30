import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import config from "../app/config";
import { RootState } from "../app/store";
import { MenuItem, Request } from "../app/typeDefinitions";
import axios from "axios";

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
  async (newRequest: Request): Promise<void | any> => {
    try {
      await axios.post(`${apiPath}/request/create`, newRequest);
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
    setIsDesktop: (state, { payload }: PayloadAction<boolean>) => {
      state.isDesktop = payload;
    },
    setIsMenuVisible: (state, { payload }: PayloadAction<boolean>) => {
      state.isMenuVisible = payload;
    },
    setIsOpenMenu: (state, { payload }: PayloadAction<boolean>) => {
      state.isOpenMenu = payload;
    },
    setIsCloseMenu: (state, { payload }: PayloadAction<boolean>) => {
      state.isCloseMenu = payload;
    },
    setNavItem: (state, { payload }: PayloadAction<string>) => {
      state.menuItem = payload;
    },

    // ----- Request -----
    setIsCreatingRequest: (state, { payload }: PayloadAction<boolean>) => {
      state.isCreatingRequest = payload;
    },

    // ----- Error handling -----
    setErrorMessage: (state, { payload }: PayloadAction<ErrorMessage>) => {
      state.errorMessage = payload;
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

const selectors = {
  // ----- Menu -----
  selectMenuItem: ({ creativeGallery }: RootState) => creativeGallery.menuItem,
  selectIsDesktop: ({ creativeGallery }: RootState) =>
    creativeGallery.isDesktop,
  selectIsMenuVisible: ({ creativeGallery }: RootState) =>
    creativeGallery.isMenuVisible,
  selectIsOpenMenu: ({ creativeGallery }: RootState) =>
    creativeGallery.isOpenMenu,
  selectIsCloseMenu: ({ creativeGallery }: RootState) =>
    creativeGallery.isCloseMenu,

  // ----- Request -----
  selectIsCreatingRequest: ({ creativeGallery }: RootState) =>
    creativeGallery.isCreatingRequest,

  // ----- Error handling -----
  selectErrorMessage: ({ creativeGallery }: RootState) =>
    creativeGallery.errorMessage,
};

// ----- Slice actions -----
export const {
  // ----- Menu -----
  setIsDesktop,
  setIsMenuVisible,
  setIsOpenMenu,
  setIsCloseMenu,
  setNavItem,

  // ----- Request -----
  setIsCreatingRequest,

  // ----- Error handling -----
  setErrorMessage,
} = creativeGallerySlice.actions;

// ----- Slice selectors -----
export const {
  // ----- Menu -----
  selectMenuItem,
  selectIsDesktop,
  selectIsMenuVisible,
  selectIsOpenMenu,
  selectIsCloseMenu,

  // ----- Request -----
  selectIsCreatingRequest,

  // ----- Error handling -----
  selectErrorMessage,
} = selectors;

export default creativeGallerySlice.reducer;
