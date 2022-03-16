import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    name: "usd",
    symbol: "$",
  },
  reducers: {
    setCurrency: (state, action) => {
      state.name = action.payload.name;
      state.symbol = action.payload.symbol;
    },
  },
});
export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;