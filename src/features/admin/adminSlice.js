import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllHistory.fulfilled, (state, action) => {
      state.histories = action.payload;
    });
  },
});

export const { setCredentials, logOut } = adminSlice.actions;

export const getHistories = (state) => state.admin.histories;
export const getPage = (state) => state.admin.page;

export default adminSlice.reducer;
