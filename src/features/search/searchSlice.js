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
  seatClass: 'ECONOMY',
  roundTrip: false,
  status: 'idle',
  airport: [],
  shcedules: [],
};

export const fetchAirport = createAsyncThunk(
  'search/fetchAirport',
  async () => {
    try {
      const response = await axios.get(`${apiConfig.baseUrl}airports`);
      // console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const fetchSearchFlight = createAsyncThunk(
  'search/fetchSearchFlight',
  async ({ from, to, flightDate, seatClass }) => {
    try {
      const response = await axios.get(
        `${apiConfig.baseUrl}schedules/departure-date`,
        {
          params: {
            flightDate: format(flightDate, 'yyyy-MM-dd'),
            originAirportId: from,
            destinationAirportId: to,
            aircraftClass: seatClass,
          },
        }
      );
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const fetchSchedule = createAsyncThunk(
  'search/fetchSchedule',
  async ({ from, to, departureDate, seatClass }) => {
    try {
      const response = await axios.get(`${apiConfig.baseUrl}schedules`);
      console.log(response.data);
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
        console.log(action.error.message);
      })
      .addCase(fetchSearchFlight.fulfilled, (state, action) => {
        state.shcedules = action.payload.data;
      })
      .addCase(fetchSearchFlight.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchSchedule.fulfilled, (state, action) => {
        state.shcedules = action.payload.data;
      })
      .addCase(fetchSchedule.rejected, (state, action) => {
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
export const getSchedules = (state) => state.search.shcedules;
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
