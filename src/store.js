import { configureStore } from "@reduxjs/toolkit";
import creativeGallerySlice from "./reducer/creativeGallerySlice";

export const store = configureStore({
  reducer: { creativeGallery: creativeGallerySlice },
});
