import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiConfig from '../../api/apiConfig';
import axiosClient from '../../api/axiosClient';

const initialState = {
  departurePlace: 'Jakarta',
  arrivePlace: 'Aceh',
  passenger: 1,
  departureDate: new Date(),
  returnDate: '',
  seatClass: 'Economy',
  roundTrip: false,
  status: 'idle',
  airport: [],
};

export const fetchAirport = createAsyncThunk(
  'search/fetchAirport',
  async () => {
    try {
      const response = await axiosClient.get(`${apiConfig.baseUrl}airports`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setDeparturePlace(state, action) {
      state.status = 'success';
      state.departurePlace = action.payload;
    },
    setArrivePlace(state, action) {
      state.status = 'success';
      state.arrivePlace = action.payload;
    },
    setPassenger(state, action) {
      state.status = 'success';
      state.passenger = action.payload;
    },
    setDepartureDate(state, action) {
      state.status = 'success';
      state.departureDate = action.payload;
    },
    setReturnDate(state, action) {
      state.status = 'success';
      state.returnDate = action.payload;
    },
    setSeatClass(state, action) {
      state.status = 'success';
      state.seatClass = action.payload?.name || action.payload;
    },
    setRoundTrip(state, action) {
      state.roundTrip = action.payload;
      state.status = 'success';
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAirport.fulfilled, (state, action) => {
        state.status = 'success';
        // console.log(action.payload);
        state.airport = action.payload;
      })
      .addCase(fetchAirport.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const getDeparturePlace = (state) => state.search.departurePlace;
export const getArrivePlace = (state) => state.search.arrivePlace;
export const getPassenger = (state) => state.search.passenger;
export const getDepartureDate = (state) => state.search.departureDate;
export const getReturnDate = (state) => state.search.returnDate;
export const getSeatClass = (state) => state.search.seatClass;
export const getRoundTrip = (state) => state.search.roundTrip;
export const getStatusSearch = (state) => state.search.status;
export const getAirports = (state) => state.search.airport;
export const getStatusAirport = (state) => state.search.status;
export const {
  setDeparturePlace,
  setArrivePlace,
  setPassenger,
  setDepartureDate,
  setReturnDate,
  setSeatClass,
  setRoundTrip,
} = searchSlice.actions;

export default searchSlice.reducer;
