import { configureStore } from "@reduxjs/toolkit";
import creativeGallerySlice from "./Reducer/creativeGallerySlice";

export const store = configureStore({
  reducer: { creativeGallery: creativeGallerySlice },
});