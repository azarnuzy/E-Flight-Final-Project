import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
  loading: false,
  isLogin: false,
};

//   export const getMovies = createAsyncThunk('movies/getMovies', async () => {
//     const API_KEY = "c368a12c060c2bbd33ea2c9aea9366e6"
//     try{
//         const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
//         return res.data.results;
//     } catch (error) {
//         console.error(error);
//     }
// })

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setisLogin(state, action) {
      state.isLogin = action.payload;
    },
  },
});

export const { setisLogin } = userSlice.actions;
export const getLogin = (state) => state.user.isLogin;
export default userSlice.reducer;
