import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  departurePlace: 'Jakarta',
  arrivePlace: 'Aceh',
  passenger: 1,
  departureDate: new Date(),
  returnDate: '',
  seatClass: 'Economy',
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
    setSeatClass(state, action) {
      state.seatClass = action.payload?.name || action.payload;
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
  setSeatClass,
} = searchSlice.actions;

export default searchSlice.reducer;
