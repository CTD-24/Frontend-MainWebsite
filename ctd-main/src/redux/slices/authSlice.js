import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    isLogin: false
  },
  reducers: {
    // Correct reducer functions
    authenticateUser: (state) => {
      state.isAuth = true;
      state.isLogin = true
    },
    unauthenticateUser: (state) => {
      state.isAuth = false;
      state.isLogin = false;

    },
  }
})

export const { authenticateUser, unauthenticateUser } = authSlice.actions

export default authSlice.reducer;
