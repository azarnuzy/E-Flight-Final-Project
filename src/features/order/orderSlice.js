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
      scheduleId: '',
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
      scheduleId: '',
    },
  ],
  tripPosition: 0,
};


const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrders(state, action) {
      const departureTime = action.payload.item.departureTime
        .replace('T', ' ')
        .split(' ')[1]
        .split(':')
        .slice(0, -1)
        .join(':');
      const arrivalTime = action.payload.item.arrivalTime
        .replace('T', ' ')
        .split(' ')[1]
        .split(':')
        .slice(0, -1)
        .join(':');
      const rupiah = (number) => {
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
        }).format(number);
      };

      state.myFlight[action.payload.tripPosition].airplane = 'Garuda Indonesia';
      state.myFlight[action.payload.tripPosition].departure_time =
        departureTime;
      state.myFlight[action.payload.tripPosition].arrival_time = arrivalTime;
      state.myFlight[action.payload.tripPosition].from_airport =
        action.payload.item.originAirportCode;
      state.myFlight[action.payload.tripPosition].to_airport =
        action.payload.item.destinationAirportCode;
      state.myFlight[
        action.payload.tripPosition
      ].duration = `${action.payload.item.hours}h ${action.payload.item.minutes}m`;
      state.myFlight[action.payload.tripPosition].distance = 'direct';
      state.myFlight[action.payload.tripPosition].price = rupiah(
        action.payload.item.price
      );
      state.myFlight[action.payload.tripPosition].scheduleId =
        action.payload.item.flightScheduleId;
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