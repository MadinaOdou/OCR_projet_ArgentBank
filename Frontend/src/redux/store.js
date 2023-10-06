import { configureStore } from "@reduxjs/toolkit";
import { signInSlice } from "./slices/signInSlice";
import { userSlice } from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    signIn: signInSlice.reducer,
    user: userSlice.reducer,
  },
});
