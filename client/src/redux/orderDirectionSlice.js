import { createSlice } from "@reduxjs/toolkit";

const orderDirectionSlice = createSlice({
  name: "orderDirection",
  initialState: {
    orderDirection: "asc",
  },
  reducers: {
    setOrderDirection: (state, action) => {
      state.orderDirection = action.payload;
    },
  },
});
export const { setOrderDirection } = orderDirectionSlice.actions;

export default orderDirectionSlice.reducer;
