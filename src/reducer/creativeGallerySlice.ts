import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import config from "../app/config";
import { RootState } from "../app/store";
import { MenuItem, Request } from "../app/typeDefinitions";
import axios from "axios";

type ErrorMessage = string | null;

interface InitialState {
  menuItem: MenuItem;
  isMenuVisible: boolean;
  isOpenMenu: boolean;
  isCloseMenu: boolean;
  isCreatingRequest: boolean;
  errorMessage: ErrorMessage;
}

const initialState: InitialState = {
  menuItem: null,
  isMenuVisible: false,
  isOpenMenu: false,
  isCloseMenu: false,
  isCreatingRequest: false,
  errorMessage: null,
};

const apiPath = `${config.API_URL}/api`;

const rejectWithValue = (data: any): void | PromiseLike<void> => {
  throw new Error(data);
};

export const createRequest = createAsyncThunk(
  "creativeGallery/createRequest",
  async (newRequest: Request): Promise<void | any> => {
    try {
      await axios.post(`${apiPath}/request/create`, newRequest);
    } catch ({
      response: {
        data: { errorMessage },
      },
    }: any) {
      return rejectWithValue(errorMessage);
    }
  }
);

export const creativeGallerySlice = createSlice({
  name: "creativeGallery",
  initialState,

  reducers: {
    // ----- Menu -----
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
  selectMenuItem: ({ creativeGallery: { menuItem } }: RootState) => menuItem,
  selectIsMenuVisible: ({ creativeGallery: { isMenuVisible } }: RootState) =>
    isMenuVisible,
  selectIsOpenMenu: ({ creativeGallery: { isOpenMenu } }: RootState) =>
    isOpenMenu,
  selectIsCloseMenu: ({ creativeGallery: { isCloseMenu } }: RootState) =>
    isCloseMenu,

  // ----- Request -----
  selectIsCreatingRequest: ({
    creativeGallery: { isCreatingRequest },
  }: RootState) => isCreatingRequest,

  // ----- Error handling -----
  selectErrorMessage: ({ creativeGallery: { errorMessage } }: RootState) =>
    errorMessage,
};

// ----- Slice actions -----
export const {
  // ----- Menu -----
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
  selectIsMenuVisible,
  selectIsOpenMenu,
  selectIsCloseMenu,

  // ----- Request -----
  selectIsCreatingRequest,

  // ----- Error handling -----
  selectErrorMessage,
} = selectors;

export default creativeGallerySlice.reducer;
