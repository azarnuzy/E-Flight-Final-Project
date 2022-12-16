import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiConfig from '../../api/apiConfig';
import axiosClient from '../../api/axiosClient';

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
  seats: [],
  seatNo: '',
  namePassenger: '',
  titlePassenger: '',
  passengerRequest: {},
};

export const fetchSeat = createAsyncThunk(
  'order/fetchSeat',
  async (scheduleId) => {
    try {
      const response = await axiosClient.get(`${apiConfig.baseUrl}seats`);
      // console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const bookFlight = createAsyncThunk(
  'order/booking',
  async ({ uId, shceduleId, seatClass, totalPs, amount, passengers }) => {
    try {
      const response = await axiosClient.post(
        `${apiConfig.baseUrl}booking/add`,
        {
          params: { uId: uId },
        },
        {
          shceduleId,
          seatClass,
          totalPassenger: totalPs,
          amount,
          passengerRequest: passengers,
        }
      );

      return response.data;
    } catch (error) {}
  }
);

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
    setPassengerReq(state, action) {
      state.passengerRequest = {
        title: action.payload.title,
        name: action.payload.name,
        seatNo: action.payload.seatNo,
      };
    },
    setNamePassenger(state, action) {
      state.namePassenger = action.payload;
    },
    setTitlePassenger(state, action) {
      state.titlePassenger = action.payload;
    },
    setNoSeat(state, action) {
      state.seatNo = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSeat.fulfilled, (state, action) => {
      state.seats = action.payload;
    });
  },
});

export const getOrders = (state) => state.order;
export const getSeats = (state) => state.order.seats;
export const getNamePassenger = (state) => state.order.namePassenger;
export const getTitlePassenger = (state) => state.order.titlePassenger;
export const getSeatNo = (state) => state.order.seatNo;

export const {
  setOrders,
  emptyOrders,
  setTripPosition,
  setNamePassenger,
  setTitlePassenger,
  setNoSeat,
} = orderSlice.actions;

export default orderSlice.reducer;
