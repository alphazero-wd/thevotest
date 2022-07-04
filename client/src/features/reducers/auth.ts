import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../../api/auth";
import { LoginDto, SignupDto } from "../../utils/types/auth";

export const signup = createAsyncThunk(
  "auth/signup",
  async (signupDto: SignupDto, { rejectWithValue }) => {
    try {
      const res = await api.signup(signupDto);
      return res.data.access_token;
    } catch (e: any) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (loginDto: LoginDto, { rejectWithValue }) => {
    try {
      const res = await api.login(loginDto);
      return res.data.access_token;
    } catch (e: any) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

interface State {
  access_token: string | null;
  errors: string[];
}

const initialState: State = {
  access_token: null,
  errors: [],
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    logout(state) {
      state.access_token = null;
      localStorage.removeItem("token");
    },
    clearErrors(state) {
      state.errors = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(signup.fulfilled, (state, action) => {
      state.access_token = action.payload;
      localStorage.setItem("token", action.payload);
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.errors = action.payload as string[];
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.access_token = action.payload;
      localStorage.setItem("token", action.payload);
    });
    builder.addCase(login.rejected, (state, action) => {
      state.errors = action.payload as string[];
    });
  },
});
export const { logout, clearErrors } = authSlice.actions;
export default authSlice.reducer;
