import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signInUser = createAsyncThunk(
  "user/signInUser",
  async (userCredentials) => {
    try {
      const request = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        userCredentials
      );
      const response = await request.data;
      localStorage.setItem("token", response.body.token);
      return response;
    } catch (error) {
      alert("Invalid email or password");
      throw new Error(error.response.data.message);
    }
  }
);

const initialState = {
  loggedIn: false,
  user: null,
  error: null,
};

export const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: (builder) => {
    builder
      .addCase(signInUser.pending, (state) => {
        state.loggedIn = true;
        state.user = null;
        state.error = null;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.loggedIn = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.loggedIn = false;
        state.user = null;
        state.error = "action.error.message";
      });
  },
});

export default signInSlice.reducer;
