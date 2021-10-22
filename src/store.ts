import { configureStore } from "@reduxjs/toolkit";
import creativeGallerySlice from "./reducer/creativeGallerySlice";

export const store = configureStore({
  reducer: { creativeGallery: creativeGallerySlice },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
