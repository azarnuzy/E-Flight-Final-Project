import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiConfig from '../../api/apiConfig';
import axiosClient from '../../api/axiosClient';

const initialState = {
    notif: [],
    loading: false,
}
  
     export const getNotification = createAsyncThunk('user/notification', async (user_id) => {
        try {
            const response = await axiosClient.get(
            `${apiConfig.baseUrl}notification/${user_id}`,
            {
                params: {user_id: user_id},
            }
            );
        
            return(response.data.notifications);
        } catch (error) {}
    });
  
  
  export const postSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {},
    extraReducers: {
        [getNotification.pending]: (state) => {
          state.loading = true
        },
        [getNotification.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.notif = payload
        },
        [getNotification.rejected]: (state) => {
          state.loading = false
        },
    },
  })
  
  export default postSlice.reducer