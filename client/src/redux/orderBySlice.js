import { createSlice } from "@reduxjs/toolkit";

const orderBySlice = createSlice({
  name: "orderBy",
  initialState: {
    orderBy: "price",
  },
  reducers: {
    setOrderBy: (state, action) => {
      state.orderBy = action.payload;
    },
  },
});
export const { setOrderBy } = orderBySlice.actions;

export default orderBySlice.reducer;
