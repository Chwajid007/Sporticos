import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postRequest } from "../../Api";
import { routes } from "../../Api/routes";
import { BASE_URL } from "../../Api/constants";

const initialState = {
  userType: "",
  user: {},
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      (state.user = {}), (state.token = "");
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(doLogin.pending, () => {})
      .addCase(doLogin.fulfilled, (state, action) => {
        if (action.payload.code === 200) {
          state.user = action.payload.user;
          state.token = action.payload.token;
          console.log("action", action);
        }
      })
      .addCase(doLogin.rejected, ()=>{})
  },
});

export const doLogin = createAsyncThunk("auth/login", async (body) => {
  try {
    const response = await postRequest(body, routes.login);
    console.log("response",response)
    return response.data;
  } catch {
    throw new Error("Failed to login");
  }
});

export const { setUserType, setUser, setToken, logout } = userSlice.actions;
export default userSlice.reducer;
