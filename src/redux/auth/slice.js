import { createSlice } from '@reduxjs/toolkit';
import { signup, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signup.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, mail: null };
      state.token = null;
      state.isLogedIn = false;
    },
    [refreshUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.isFetchingCurrentUser = false;
      state.user = action.payload;
      state.isLogedIn = true;
    },
    [refreshUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export const authReducer = authSlice.reducer;