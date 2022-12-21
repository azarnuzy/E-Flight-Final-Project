import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import apiConfig from '../../api/apiConfig';
import axiosClient from '../../api/axiosClient';

const initialState = {
  histories: null,
  page: 0,
};

export const fetchAllHistory = createAsyncThunk(
  'admin/fetchAllHistory',
  async ({ page, size }) => {
    try {
      const params = { page: page, size: size };
      const response = await axiosClient.get(
        `${apiConfig.baseUrl}history/booking/get-all`,
        {
          params,
        }
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const validateBook = createAsyncThunk(
  'admin/validateBook',
  async ({ userId, bookingId }) => {
    try {
      const params = { userId, bookingId };
      const response = await axiosClient.get(
        `${apiConfig.baseUrl}booking/validate`,
        { params }
      );

      return response.data;
    } catch (error) {}
  }
);

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllHistory.fulfilled, (state, action) => {
        state.histories = action.payload;
      })
      .addCase(validateBook.fulfilled, (state, action) => {
        Swal.fire({
          icon: 'success',
          title: `Booking Validation Is Success`,
          timer: 300,
        });
      });
  },
});

export const { setCredentials, logOut } = adminSlice.actions;

export const getHistories = (state) => state.admin.histories;
export const getPage = (state) => state.admin.page;

export default adminSlice.reducer;
