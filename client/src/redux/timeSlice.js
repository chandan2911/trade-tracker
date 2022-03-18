import { createSlice } from "@reduxjs/toolkit";

const timeSlice = createSlice({
  name: "time",
  initialState: {
    time: "3h",
  },
  reducers: {
    setTime: (state, action) => {
      state.time = action.payload;
    },
  },
});
export const { setTime } = timeSlice.actions;
export default timeSlice.reducer;
