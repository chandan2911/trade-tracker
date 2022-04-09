import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    limit: 10,
offset: 1,
  },
  reducers: {
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setOffset: (state, action) => {
      state.offset = action.payload;
    },
  },
});
export const { setLimit, setOffset } = pageSlice.actions;
export default pageSlice.reducer;
