import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import FileSaver from 'file-saver';
import apiConfig from '../../api/apiConfig';
import axiosClient from '../../api/axiosClient';

const initialState = {
  isLoading: 'idle',
  hasError: false,
  history: [],
  historyByUser: [],
  orderByStatus: 'All Status',
};

export const getHistory = createAsyncThunk(
  'history/getHistory',
  async ({ id, orderByStatus }) => {
    try {
      let response;
      if (orderByStatus.length > 0) {
        response = await axiosClient.get(
          `${apiConfig.baseUrl}history/booking/${id}?page=0&userid=${id}&booking-status-filter=${orderByStatus}`
        );
      } else {
        response = await axiosClient.get(
          `${apiConfig.baseUrl}history/booking/${id}?page=0&userid=${id}`
        );
      }

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getHistoryByUserId = createAsyncThunk(
  'history/getHistoryByUserId',
  async ({ id, orderByStatus }) => {
    // console.log(id, orderByStatus);
    try {
      let response;
      if (orderByStatus.length > 0) {
        response = await axiosClient.get(
          `${apiConfig.baseUrl}history/booking/${id}?page=0&userid=${id}&booking-status-filter=${orderByStatus}`
        );
      } else {
        response = await axiosClient.get(
          `${apiConfig.baseUrl}history/booking/${id}?page=0&userid=${id}`
        );
      }

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getInvoice = createAsyncThunk(
  'history/getInvoice',
  async ({ userId, bookingId }) => {
    // console.log(userId, bookingId);
    try {
      const response = await axiosClient
        .get(
          `${apiConfig.baseUrl}file/download/invoice?user-id=${userId}&booking-id=${bookingId}`,
          { responseType: 'blob' }
        )
        .then((res) => {
          FileSaver.saveAs(res, userId);
        });
      // console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
);

const orderHistorySlice = createSlice({
  name: 'orderHistory',
  initialState,
  reducers: {
    setOrderByStatus(state, action) {
      state.orderByStatus = action.payload;
    },
  },
  extraReducers: {
    [getHistory.pending]: (state) => {
      state.isLoading = true;
    },
    [getHistory.fulfilled]: (state, { payload }) => {
      state.history = payload;
      state.isLoading = 'success';
      state.hasError = false;
    },
    [getHistory.rejected]: (state) => {
      state.hasError = true;
    },
    [getHistoryByUserId.fulfilled]: (state, { payload }) => {
      state.historyByUser = payload;
    },
  },
});

export const getHistoryOrder = (state) => state.orderHistory.history;
export const getOrderByStatus = (state) => state.orderHistory.orderByStatus;
export const getIsLoading = (state) => state.orderHistory.isLoading;

export const { historyByUser, setOrderByStatus } = orderHistorySlice.actions;

export default orderHistorySlice.reducer;
