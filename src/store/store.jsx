import { configureStore } from "@reduxjs/toolkit";
import provinceReducer from "./imagePromptSlice";

export const store = configureStore({
  reducer: {
    imagePrompt: provinceReducer,
  },
});
