import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  departurePlace: 'Jakarta',
  arrivePlace: 'Aceh',
  passenger: 1,
  departureDate: new Date(),
  returnDate: '',
  seatClass: 'Economy',
  roundTrip: false,
  status: 'idle',
};

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
});

export const getDeparturePlace = (state) => state.search.departurePlace;
export const getArrivePlace = (state) => state.search.arrivePlace;
export const getPassenger = (state) => state.search.passenger;
export const getDepartureDate = (state) => state.search.departureDate;
export const getReturnDate = (state) => state.search.returnDate;
export const getSeatClass = (state) => state.search.seatClass;
export const getRoundTrip = (state) => state.search.roundTrip;
export const getStatusSearch = (state) => state.search.status;
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
