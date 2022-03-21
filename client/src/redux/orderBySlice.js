import { createSlice } from "@reduxjs/toolkit";

const orderBySlice = createSlice({
  name: "orderBy",
  initialState: {
    value: "price",
  },
  reducers: {
    setOrderBy: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setOrderBy } = orderBySlice.actions;

export default orderBySlice.reducer;
