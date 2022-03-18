import { configureStore } from "@reduxjs/toolkit";
import currencySlice from "./currencySlice";
import orderBySlice from "./orderBySlice";
import themeSlice from "./themeSlice";
import timeSlice from "./timeSlice";

export default configureStore({
  reducer: {
    currency: currencySlice,
    theme: themeSlice,
    orderBy: orderBySlice,
    orderByDirection: orderBySlice,
    time: timeSlice,
  },
});
