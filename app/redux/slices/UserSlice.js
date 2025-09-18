import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiAuth } from "@/lib/api";
import { setLoading } from "./UiSlice";
import Cookies from "js-cookie";

export const fetchUserProfile = createAsyncThunk(
  "user/fetchProfile",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setLoading(true));
      const response = await apiAuth.get("/auth/profile");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to fetch profile");
    } finally {
      dispatch(setLoading(false));
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.data = null;
      Cookies.remove("token");
      Cookies.remove("role");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;