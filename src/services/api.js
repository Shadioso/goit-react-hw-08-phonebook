import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader, clearAuthHeader } from 'redux/Auth/authReducer';
import axios from 'axios';

axios.defaults.baseURL = `https://connections-api.herokuapp.com`;

export const fetchContacts = createAsyncThunk(
  `contacts/fetchAll`,
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/contacts`);
      return await response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//
export const addContact = createAsyncThunk(
  `contacts/addContact`,
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(`/contacts`, contact);
      return await response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return await response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//

export const register = createAsyncThunk(
  `auth/register`,
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`/users/signup`, credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  `/auth/login`,
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`/users/login`, credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(`auth/logout`, async (_, thunkAPI) => {
  try {
    await axios.post(`/users/logout `);
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

//

export const refresh = createAsyncThunk(`auth/refresh`, async (_, thunkAPI) => {
  const { token } = thunkAPI.getState().auth;
  if (!token) {
    return thunkAPI.rejectWithValue('You are not logged in');
  }
  try {
    setAuthHeader(token);
    const responce = await axios.get(`/users/current`);
    return responce.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});
//
