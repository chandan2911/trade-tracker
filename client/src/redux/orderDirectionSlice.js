import { createSlice } from "@reduxjs/toolkit";

const orderByDirectionSlice = createSlice({
  name: "orderByDirection",
  initialState: {
    orderByDirection: "asc",
  },
  reducers: {
    setOrderByDirection: (state, action) => {
      state.orderByDirection = action.payload;
    },
  },
});
export const { setOrderByDirection } = orderByDirectionSlice.actions;

export default orderByDirectionSlice.reducer;
