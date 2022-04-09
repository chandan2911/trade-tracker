import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    name: "usd",
    sign: "$",
    uuid: "yhjMzLPhuIDl",
  },
  reducers: {
    setCurrency: (state, action) => {
      state.name = action.payload.name;
      state.sign = action.payload.sign;
      state.uuid = action.payload.uuid;
    },
  },
});
export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
