import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    value: "usd",
  },
  reducers: {
    setCurrency: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
