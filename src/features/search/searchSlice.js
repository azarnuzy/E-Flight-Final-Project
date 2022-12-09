import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import apiConfig from '../../api/apiConfig';
import { format } from 'date-fns';

const initialState = {
  departurePlace: 'JKT',
  arrivePlace: 'JED',
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
      const response = await axios.get(`${apiConfig.baseUrl}airports`);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const fetchSearchFlight = createAsyncThunk(
  'search/fetchSearchFlight',
  async ({ from, to, departureDate, seatClass }) => {
    try {
      const response = await axios.get(
        `${apiConfig.baseUrl}schedules/departure-date`,
        {
          params: {
            searchScheduleRequest: {
              originAirportId: from,
              destinationAirportId: to,
              flightDate: format(departureDate, 'yyyy-MM-dd'),
              aircraftClass: seatClass,
            },
          },
        }
      );
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

        state.airport = action.payload.data;
      })
      .addCase(fetchAirport.rejected, (state, action) => {
        // console.log(action.error.message);
      })
      .addCase(fetchSearchFlight.fulfilled, (state, action) => {
        console.log(action.payload);
      })
      .addCase(fetchSearchFlight.rejected, (state, action) => {
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
