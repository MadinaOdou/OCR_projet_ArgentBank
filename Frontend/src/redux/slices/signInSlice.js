import { createSlice } from "@reduxjs/toolkit";

export const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    resetForm: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export const { setEmail, setPassword, resetForm } = signInSlice.actions;
export const signInSelector = (state) => state.signIn;
export default signInSlice.reducer;
