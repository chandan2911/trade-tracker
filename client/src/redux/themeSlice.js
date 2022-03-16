import { createSlice } from "@reduxjs/toolkit";
const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDark: false,
  },
  reducers: {
    setTheme: (state, action) => {
      state.isDark = !state.isDark;
    },
  },
});
export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
