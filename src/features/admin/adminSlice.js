import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import apiConfig from '../../api/apiConfig';
import axiosClient from '../../api/axiosClient';

const initialState = {
  histories: null,
  validateList: null,
  status: 'idle',
  page: 0,
};

export const fetchValidateList = createAsyncThunk(
  'admin/fetchValidateList',
  async ({ page, size }) => {
    try {
      const params = { page: page, size: size, 'created-at': 'newest' };
      const response = await axiosClient.get(
        `${apiConfig.baseUrl}booking/validate-list`,
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

export const fetchAllHistory = createAsyncThunk(
  'admin/fetchAllHistory',
  async ({ page, size, sort }) => {
    try {
      const params = { page: page, size: size, 'booking-date-sort': sort };
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
      const response = await axiosClient.post(
        `${apiConfig.baseUrl}booking/validate`,
        { userId, bookingId }
      );

      return response.data;
    } catch (error) {}
  }
);

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setStatusAdmin(state, action) {
      state.status = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllHistory.fulfilled, (state, action) => {
        state.histories = action.payload;
        state.status = 'success';
      })
      .addCase(validateBook.fulfilled, (state, action) => {
        Swal.fire({
          icon: 'success',
          title: `Booking Validation Is Success`,
          timer: 1500,
        });
      })
      .addCase(fetchValidateList.fulfilled, (state, action) => {
        state.status = 'success';
        state.validateList = action.payload;
      });
  },
});

export const { setStatusAdmin } = adminSlice.actions;

export const getHistories = (state) => state.admin.histories;
export const getValidateList = (state) => state.admin.validateList;
export const getStatusValidate = (state) => state.admin.status;
export const getPage = (state) => state.admin.page;

export default adminSlice.reducer;
