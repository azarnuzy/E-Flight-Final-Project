import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiConfig from '../../api/apiConfig';
import axiosClient from '../../api/axiosClient';

const initialState = {
  users: {},
  imgStatus: '',
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
  } catch (error) {}
});

export const editUser = createAsyncThunk(
  'user/editAccount',
  async ({ id, firstName, lastName, phoneNumber }) => {
    console.log(id, firstName, lastName, phoneNumber);
    try {
      const response = await axiosClient.post(
        `${apiConfig.baseUrl}users/update/${id}`,
        {
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
        }
      );

      return response.data;
    } catch (error) {}
  }
);

export const updateImageProfile = createAsyncThunk(
  'user/udpateImageProfile',
  async ({ id, data }) => {
    console.log(data);
    try {
      const response = await axiosClient.post(
        `${apiConfig.baseUrl}users/upload-image`,
        {
          file: data,
          'user-id': id,
        }
      );

      console.log(response);
      return response.data;
    } catch (error) {}
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
      })
      .addCase(updateImageProfile.fulfilled, (state, action) => {
        state.imgUrl = 'success';
      })
      .addCase(updateImageProfile.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const { setisLogin } = userSlice.actions;
export const getLogin = (state) => state.user.isLogin;
export const getUser = (state) => state.user.users;
export default userSlice.reducer;
