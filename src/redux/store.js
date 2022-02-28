import { configureStore } from "@reduxjs/toolkit";
import currencySlice from "./currencySlice";

export default configureStore({
  reducer: {
    currency: currencySlice,
  },
});
