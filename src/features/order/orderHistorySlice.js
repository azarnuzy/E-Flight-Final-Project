import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import apiConfig from '../../api/apiConfig';
import axiosClient from '../../api/axiosClient';

const initialState = {
  isLoading: false,
  hasError: false,
  history: [],
  historyByUser: [],
};

export const getHistory = createAsyncThunk('history/getHistory', async (id) => {
  try {
    const response = await axios.get(
      `${apiConfig.baseUrl}history/booking/${id}`
    );

    return response.data.data;
  } catch (err) {
    console.log(err);
  }
});

export const getHistoryByUserId = createAsyncThunk(
  'history/getHistoryByUserId',
  async (id) => {
    try {
      const response = await axiosClient.get(
        `${apiConfig.baseUrl}history/booking/${id}?page=100&userid=${id}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getInvoice = createAsyncThunk(
  'history/getInvoice',
  async ({ userId, bookingId }) => {
    try {
      const response = await axiosClient.get(
        `${apiConfig.baseUrl}file/download/invoice?user-id=${userId}&booking-id=${bookingId}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

const orderHistorySlice = createSlice({
  name: 'orderHistory',
  initialState,
  reducers: {},
  extraReducers: {
    [getHistory.pending]: (state) => {
      state.isLoading = true;
    },
    [getHistory.fulfilled]: (state, { payload }) => {
      state.history = payload;
      state.isLoading = false;
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

export const { historyByUser } = orderHistorySlice.actions;

export default orderHistorySlice.reducer;
