import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  airplane: '',
  departure_time: '',
  arrival_time: '',
  from_airport: '',
  to_airport: '',
  duration: '',
  distance: '',
  price: '',
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrders(state, action) {
      state.airplane = action.payload.airplane;
      state.departure_time = action.payload.departure_time;
      state.arrival_time = action.payload.arrival_time;
      state.from_airport = action.payload.from_airport;
      state.to_airport = action.payload.to_airport;
      state.duration = action.payload.duration;
      state.distance = action.payload.distance;
      state.price = action.payload.price;
    },
    emptyOrders(state) {
      state.airplane = '';
      state.departure_time = '';
      state.arrival_time = '';
      state.from_airport = '';
      state.to_airport = '';
      state.duration = '';
      state.distance = '';
      state.price = '';
    },
  },
});

export const getOrders = (state) => state.order;

export const { setOrders, emptyOrders } = orderSlice.actions;

export default orderSlice.reducer;
