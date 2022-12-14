import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiConfig from '../../api/apiConfig';
import axiosClient from '../../api/axiosClient';

const initialState = {
    payment: [],
    loading: false,
}
  
     export const getPayments = createAsyncThunk('user/payments', async () => {
        try {
            const response = await axiosClient.get(
                `${apiConfig.baseUrl}payments`
            );
            return response.data;
        } catch (error) {}
    });
  
  
  export const postSlice = createSlice({
    name: 'paymentOrder',
    initialState,
    reducers: {},
    extraReducers: {
        [getPayments.pending]: (state) => {
          state.loading = true
        },
        [getPayments.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.payment = payload
        },
        [getPayments.rejected]: (state) => {
          state.loading = false
        },
    },
  })
  
  export default postSlice.reducer