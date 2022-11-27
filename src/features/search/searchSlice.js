import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  departurePlace: '',
  arrivePlace: '',
  passenger: 1,
  departureDate: new Date(),
  returnDate: new Date(),
  seatClass: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setDeparturePlace(state, action) {
      state.departurePlace = action.payload;
    },
    setArrivePlace(state, action) {
      state.arrivePlace = action.payload;
    },
    setPassenger(state, action) {
      state.passenger = action.payload;
    },
    setDepartureDate(state, action) {
      state.departureDate = action.payload;
    },
    setReturnDate(state, action) {
      state.returnDate = action.payload;
    },
    seatClass(state, action) {
      state.seatClass = action.place;
    },
  },
});

export const getDeparturePlace = (state) => state.search.departurePlace;
export const getArrivePlace = (state) => state.search.arrivePlace;
export const getPassenger = (state) => state.search.passenger;
export const getDepartureDate = (state) => state.search.departureDate;
export const getReturnDate = (state) => state.search.returnDate;
export const getSeatClass = (state) => state.search.seatClass;

export const {
  setDeparturePlace,
  setArrivePlace,
  setPassenger,
  setDepartureDate,
  setReturnDate,
  seatClass,
} = searchSlice.actions;

export default searchSlice.reducer;
