import { createSlice } from "@reduxjs/toolkit";

const orderDirectionSlice = createSlice({
  name: "orderDirection",
  initialState: {
    value: "asc",
  },
  reducers: {
    setOrderDirection: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setOrderDirection } = orderDirectionSlice.actions;

export default orderDirectionSlice.reducer;
