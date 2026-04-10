import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlice";

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});

// Infer types for dispatch and state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
