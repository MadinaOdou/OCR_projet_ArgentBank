import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserData = createAsyncThunk(
  "user/getUserData",
  async (userId) => {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      { userId }
    );
    return response.data.body;
  }
);

const initialState = {
  userData: null,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: (builder) => {
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.userData = action.error.message;
    });
  },
});

export default userSlice.reducer;
