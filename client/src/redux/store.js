import { configureStore } from "@reduxjs/toolkit";
import currencySlice from "./currencySlice";
import orderBySlice from "./orderBySlice";
import orderDirectionSlice from "./orderDirectionSlice";
import themeSlice from "./themeSlice";
import timeSlice from "./timeSlice";

export default configureStore({
  reducer: {
    currency: currencySlice,
    theme: themeSlice,
    orderBy: orderBySlice,
    orderDirection: orderDirectionSlice,
    time: timeSlice,
  },
});
