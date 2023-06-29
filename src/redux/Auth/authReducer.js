import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, login, logOut, refresh } from 'services/api';
import {
  handleAddUserSucces,
  handleLoginSucces,
  handleLogOutSucces,
  handleRefreshSucces,
  handleRejected,
} from './authBuilderFunc';
import axios from 'axios';

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
      .addCase(register.fulfilled, handleAddUserSucces)
      .addCase(register.pending, state => {})

      .addCase(login.fulfilled, handleLoginSucces)
      .addCase(login.pending, state => {})

      .addCase(logOut.fulfilled, handleLogOutSucces)
      .addCase(logOut.pending, state => {})

      .addCase(refresh.fulfilled, handleRefreshSucces)
      .addCase(refresh.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refresh.rejected, state => {
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(register.rejected, login.rejected, logOut.rejected),
        handleRejected
      );
  },
});
