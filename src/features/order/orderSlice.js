import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  myFlight: [
    {
      airplane: '',
      departure_time: '',
      arrival_time: '',
      from_airport: '',
      to_airport: '',
      duration: '',
      distance: '',
      price: '',
    },
    {
      airplane: '',
      departure_time: '',
      arrival_time: '',
      from_airport: '',
      to_airport: '',
      duration: '',
      distance: '',
      price: '',
    },
  ],
  tripPosition: 0,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrders(state, action) {
      state.myFlight[action.payload.tripPosition].airplane =
        action.payload.item.airplane;
      state.myFlight[action.payload.tripPosition].departure_time =
        action.payload.item.departure_time;
      state.myFlight[action.payload.tripPosition].arrival_time =
        action.payload.item.arrival_time;
      state.myFlight[action.payload.tripPosition].from_airport =
        action.payload.item.from_airport;
      state.myFlight[action.payload.tripPosition].to_airport =
        action.payload.item.to_airport;
      state.myFlight[action.payload.tripPosition].duration =
        action.payload.item.duration;
      state.myFlight[action.payload.tripPosition].distance =
        action.payload.item.distance;
      state.myFlight[action.payload.tripPosition].price =
        action.payload.item.price;
    },
    emptyOrders(state, action) {
      state.myFlight[action.payload.tripPosition].airplane = '';
      state.myFlight[action.payload.tripPosition].departure_time = '';
      state.myFlight[action.payload.tripPosition].arrival_time = '';
      state.myFlight[action.payload.tripPosition].from_airport = '';
      state.myFlight[action.payload.tripPosition].to_airport = '';
      state.myFlight[action.payload.tripPosition].duration = '';
      state.myFlight[action.payload.tripPosition].distance = '';
      state.myFlight[action.payload.tripPosition].price = '';
    },
    setTripPosition(state, action) {
      state.tripPosition = action.payload;
    },
  },
});

export const getOrders = (state) => state.order;

export const { setOrders, emptyOrders, setTripPosition } = orderSlice.actions;

export default orderSlice.reducer;
