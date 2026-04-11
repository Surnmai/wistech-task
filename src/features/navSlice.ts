// features/toggleSlice.js
import { createSlice } from "@reduxjs/toolkit";

export interface ToggleState {
  menuBar: boolean;
}

const initialState: ToggleState = {
  menuBar: false,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggleMenuBtn: (state) => {
      state.menuBar = !state.menuBar;
    },
  },
});

export const { toggleMenuBtn } = navSlice.actions;
export default navSlice.reducer;
