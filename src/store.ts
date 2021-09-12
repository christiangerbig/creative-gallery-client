import { configureStore } from "@reduxjs/toolkit";
import creativeGallerySlice from "./reducer/creativeGallerySlice";

const store = configureStore({
  reducer: { creativeGallery: creativeGallerySlice },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
