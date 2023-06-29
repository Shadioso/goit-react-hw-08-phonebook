import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut } from 'services/api';
// import { alertSucces } from 'services/alert';
import axios from 'axios';
// import * as alert from '../services/alert.js';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = token => {
  axios.defaults.headers.common.Authorization = ``;
};

export const authReducer = createSlice({
  name: `auth`,
  initialState,

  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, state => {})
      .addCase(register.pending, state => {})
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});
