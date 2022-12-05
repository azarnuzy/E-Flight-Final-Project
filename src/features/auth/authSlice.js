import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import apiConfig from '../../api/apiConfig';

const initialState = {
  token: null,
  email: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { email, token } = action.payload;
      state.email = email;
      state.token = token;
    },
    logOut: (state) => {
      state.email = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export const getEmail = (state) => state.auth.email;
export const getToken = (state) => state.auth.token;

export default authSlice.reducer;
