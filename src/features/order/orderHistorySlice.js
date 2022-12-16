import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import apiConfig from '../../api/apiConfig';

const initialState = {
  isLoading: false,
  hasError: false,
  history: [],
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
  },
});

export default orderHistorySlice.reducer;
