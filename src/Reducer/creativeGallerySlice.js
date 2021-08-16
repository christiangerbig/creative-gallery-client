import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import config from "../config";
import axios from "axios";

const apiPath = `${config.API_URL}/api`;

const initialState = {
  menuNumber: null,
  error: null
};

// Create request
export const createRequest = createAsyncThunk(
  "creativeGallery/createRequest",
  async ({ request, history }, { dispatch }) => {
    try {
      await axios.post(`${apiPath}/request`, request);
      history.push("/");
    }
    catch (err) {
      console.log(err.response.data.errorMessage);
      dispatch(setError(err.response.data.errorMessage));
    }
  }
);

export const creativeGallerySlice = createSlice({
  name: "creativeGallery",
  initialState,

  // ---------- Reducers ----------
  reducers: {
    setMenuNumber: (state, action) => {
      state.menuNumber = action.payload;
    },
    setError: (action, state) => {
      state.error = action.payload;
    }
  }
});

export const { setMenuNumber, setError } = creativeGallerySlice.actions;

export default creativeGallerySlice.reducer;