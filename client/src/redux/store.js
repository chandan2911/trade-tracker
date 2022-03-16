import { configureStore } from "@reduxjs/toolkit";
import currencySlice from "./currencySlice";
import themeSlice from "./themeSlice";

export default configureStore({
  reducer: {
    currency: currencySlice,
    theme: themeSlice,
  },
});
