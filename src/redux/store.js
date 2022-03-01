import { configureStore } from "@reduxjs/toolkit";
import currencySlice from "./currencySlice";
import countSlice from "./countSlice";

export default configureStore({
  reducer: {
    currency: currencySlice,
    count: countSlice,
  },
});
