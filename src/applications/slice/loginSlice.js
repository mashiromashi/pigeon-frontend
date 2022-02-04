import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "services/services";
import { storage } from "util/storage";

export const loginService = createAsyncThunk(
  "login/loginService",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      return await login(username, password);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  isLogin: false,
  loading: false,
  isLogout: false,
  error: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      storage.removeUserEntity();
      state.isLogin = false;
      state.isLogout = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginService.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginService.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = "";
      state.isLogin = true;
      state.isLogout = false;
      storage.setUserEntity(payload);
    });
    builder.addCase(loginService.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
