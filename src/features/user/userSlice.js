import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiConfig from '../../api/apiConfig';
import axiosClient from '../../api/axiosClient';

const initialState = {
  users: {},
  loading: false,
  isLogin: false,
};

export const fetchUser = createAsyncThunk('user/account', async (email) => {
  try {
    const response = await axiosClient.get(
      `${apiConfig.baseUrl}users/${email}`,
      {
        params: { email: email },
      }
    );

    return response.data;
  } catch (error) { }
});





export const editUser = createAsyncThunk(
  'user/editAccount',
  async ({ email, firstName, lastName, phoneNumber }) => {
    console.log(email, firstName, lastName, phoneNumber);
    try {
      const response = await axiosClient.post(
        `${apiConfig.baseUrl}users/update`,
        {
          params: { email: email },
        },
        {
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
        }
      );

      console.log(response.data);
      return response.data;
    } catch (error) { }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setisLogin(state, action) {
      state.isLogin = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(editUser.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const { setisLogin } = userSlice.actions;
export const getLogin = (state) => state.user.isLogin;
export const getUser = (state) => state.user.users;
export default userSlice.reducer;
