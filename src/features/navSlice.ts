// features/toggleSlice.js
import { createSlice } from "@reduxjs/toolkit";

export interface ToggleState {
  menuBar: boolean;
  toggle: boolean;
  isOpen: boolean;
}

const initialState: ToggleState = {
  menuBar: false,
  toggle: false,
  isOpen: false,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggleMenuBtn: (state) => {
      state.menuBar = !state.menuBar;
    },
    toggleNav: (state) => {
      // console.log(state.toggle);

      state.toggle = !state.toggle;
    },
    closeMenuBar: (state) => {
      // console.log(state.toggle);

      state.toggle = false;
    },
    setToTop: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { toggleMenuBtn, toggleNav, closeMenuBar, setToTop } =
  navSlice.actions;
export default navSlice.reducer;
