import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postRequest } from "../../Api";
import { routes } from "../../Api/routes";
import SimpleToast from 'react-native-simple-toast';
import { navigate } from "../../../navigation";
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
        console.log('action',action)
        if (action.payload.status === 200) {
          state.user = action.payload.response.data.user;
          state.token = action.payload.response.data.token;
          action.payload.response.message && SimpleToast.show(action.payload.response.message)
        }
      })
      .addCase(doLogin.rejected, ()=>{})

      
      .addCase(doSignUp.pending, () => {})
      .addCase(doSignUp.fulfilled, (state, action) => {
        console.log('action',action)
        if (action.payload.status === 200) {
          state.user = action.payload.response.data.user;
          //state.token = action.payload.response.data.token;
          action.payload.response.message && SimpleToast.show(action.payload.response.message)
        }
      })
      .addCase(doSignUp.rejected, ()=>{})
  },
});

export const doLogin = createAsyncThunk("auth/login", async (body) => {
  try {
    const response = await postRequest(body, routes.login);
    console.log("response",response)
    return response;
  } catch {
    throw new Error("Failed to login");
  }
});

export const doSignUp = createAsyncThunk("auth/signup", async (body) => {
  try {
    const onSuccess = ()=>{
      navigate('ProfilePhoto')
    }
    const response = await postRequest(body, routes.signup,BASE_URL,onSuccess);
    console.log("response",response)
    return response;
  } catch {
    throw new Error("Failed to login");
  }
});

export const { setUserType, setUser, setToken, logout } = userSlice.actions;
export default userSlice.reducer;
