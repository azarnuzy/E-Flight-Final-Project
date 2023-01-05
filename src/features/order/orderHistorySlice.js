import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import FileSaver from 'file-saver';
import apiConfig from '../../api/apiConfig';
import axiosClient from '../../api/axiosClient';

const initialState = {
  isLoading: 'idle',
  hasError: false,
  history: [],
  historyByUser: [],
  orderByStatus: 'All Status',
  detail: null,
  statusDetail: 'idle',
  schedule: null,
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
          `${apiConfig.baseUrl}history/booking/${id}?page=0&size=100&userid=${id}`
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

export const getDetailHistory = createAsyncThunk(
  'history/detailHistory',
  async (bookingId) => {
    console.log(bookingId);
    try {
      const response = await axiosClient.get(
        `${apiConfig.baseUrl}history/ticket/detail/${bookingId}?booking-Id=${bookingId}`
      );

      return response.data;
    } catch (error) {}
  }
);

export const getScheduleById = createAsyncThunk(
  'history/scheduleById',
  async (scheduleId) => {
    try {
      const response = await axiosClient.get(
        `${apiConfig.baseUrl}schedules/${scheduleId}?id=${scheduleId}`
      );

      return response.data;
    } catch (error) {}
  }
);

const orderHistorySlice = createSlice({
  name: 'orderHistory',
  initialState,
  reducers: {
    setOrderByStatus(state, action) {
      state.orderByStatus = action.payload;
    },
    setIsloading(state, action) {
      state.isLoading = action.payload;
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
    [getDetailHistory.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.detail = payload;
      state.statusDetail = 'success';
    },
    [getScheduleById.fulfilled]: (state, { payload }) => {
      state.schedule = payload;
    },
  },
});

export const getHistoryOrder = (state) => state.orderHistory.history;
export const getOrderByStatus = (state) => state.orderHistory.orderByStatus;
export const getIsLoading = (state) => state.orderHistory.isLoading;
export const getStatusDetail = (state) => state.orderHistory.statusDetail;
export const getDetail = (state) => state.orderHistory.detail;
export const getSchedule = (state) => state.orderHistory.schedule;

export const { historyByUser, setOrderByStatus, setIsloading } =
  orderHistorySlice.actions;

export default orderHistorySlice.reducer;
