import { createSlice } from "@reduxjs/toolkit";

const timeSlice = createSlice({
  name: "time",
  initialState: {
    value: "3h",
  },
  reducers: {
    setTime: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setTime } = timeSlice.actions;
export default timeSlice.reducer;
