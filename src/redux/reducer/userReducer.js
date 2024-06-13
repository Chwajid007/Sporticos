import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userType: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
  },
});

export const { setUserType } = userSlice.actions;
export default userSlice.reducer;
