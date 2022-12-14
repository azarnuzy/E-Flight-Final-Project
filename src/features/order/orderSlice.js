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
  seatNo: [],
  namePassenger: [],
  titlePassenger: [],
  passengerRequest: [],
  scheduleById: {},
  scheduleById2: {},
  booking: {},
  booking2: {},
  detailBooking: {},
  detailBooking2: {},
};

export const fetchSeat = createAsyncThunk(
  'order/fetchSeat',
  async (scheduleId) => {
    try {
      const response = await axiosClient.get(`${apiConfig.baseUrl}seats`);
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
        `${apiConfig.baseUrl}booking/add?uid=${uId}`,
        {
          scheduleId: shceduleId,
          seatClass,
          totalPassenger: totalPs,
          amount,
          passengerRequests: passengers,
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const bookFlight2 = createAsyncThunk(
  'order/booking2',
  async ({ uId, shceduleId, seatClass, totalPs, amount, passengers }) => {
    // console.log(uId, shceduleId, seatClass, totalPs, amount, passengers);
    try {
      const response = await axiosClient.post(
        `${apiConfig.baseUrl}booking/add?uid=${uId}`,
        {
          scheduleId: shceduleId,
          seatClass,
          totalPassenger: totalPs,
          amount,
          passengerRequests: passengers,
        }
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const fetchScheduleById = createAsyncThunk(
  'order/fetchScheduleById',
  async (scheduleId) => {
    try {
      const response = await axiosClient.get(
        `${apiConfig.baseUrl}schedules/${scheduleId}`,
        {
          params: { id: scheduleId },
        }
      );

      return response.data;
    } catch (error) {}
  }
);

export const fetchScheduleById2 = createAsyncThunk(
  'order/fetchScheduleById2',
  async (scheduleId) => {
    try {
      const response = await axiosClient.get(
        `${apiConfig.baseUrl}schedules/${scheduleId}`,
        {
          params: { id: scheduleId },
        }
      );

      return response.data;
    } catch (error) {}
  }
);

export const fetchDetailBooking = createAsyncThunk(
  'order/fetchDetailBooking',
  async (bookingId) => {
    try {
      const response = await axiosClient.get(
        `${apiConfig.baseUrl}booking/detail/${bookingId}`,
        {
          params: { booking_id: bookingId },
        }
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const fetchDetailBooking2 = createAsyncThunk(
  'order/fetchDetailBooking2',
  async (bookingId) => {
    try {
      const response = await axiosClient.get(
        `${apiConfig.baseUrl}booking/detail/${bookingId}`,
        {
          params: { booking_id: bookingId },
        }
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const setPayment = createAsyncThunk(
  'order/setPayment',
  async ({ uid, bookingId, paymentId }) => {
    try {
      const response = await axiosClient.post(
        `${apiConfig.baseUrl}booking/set-payment`,
        {
          uid,
          bookingId,
          paymentId,
        }
      );
      return response.data;
    } catch (error) {}
  }
);
export const setPayment2 = createAsyncThunk(
  'order/setPayment',
  async ({ uid, bookingId, paymentId }) => {
    try {
      const response = await axiosClient.post(
        `${apiConfig.baseUrl}booking/set-payment`,
        {
          uid,
          bookingId,
          paymentId,
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
      // state.passengerRequest[action.payload.index] ={
      //   title: action.payload.title,
      //   name: action.payload.name,
      //   seatNo: action.payload.seatNo,
      // };
      state.passengerRequest = action.payload;
    },
    setNamePassenger(state, action) {
      // console.log(action.payload.e.target.value);
      state.namePassenger[action.payload.i] = action.payload.e.target.value;
    },
    setTitlePassenger(state, action) {
      state.titlePassenger[action.payload.index] = action.payload.e.name;
    },
    setNoSeat(state, action) {
      state.seatNo[action.payload.index] = action.payload.e;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSeat.fulfilled, (state, action) => {
        state.seats = action.payload;
      })
      .addCase(fetchScheduleById.fulfilled, (state, action) => {
        state.scheduleById = action.payload;
      })
      .addCase(fetchScheduleById2.fulfilled, (state, action) => {
        state.scheduleById2 = action.payload;
      })
      .addCase(bookFlight.fulfilled, (state, action) => {
        state.booking = action.payload;
      })
      .addCase(bookFlight2.fulfilled, (state, action) => {
        state.booking2 = action.payload;
      })
      .addCase(fetchDetailBooking.fulfilled, (state, action) => {
        state.detailBooking = action.payload;
      })
      .addCase(fetchDetailBooking2.fulfilled, (state, action) => {
        state.detailBooking2 = action.payload;
      });
  },
});

export const getOrders = (state) => state.order;
export const getSeats = (state) => state.order.seats;
export const getNamePassenger = (state) => state.order.namePassenger;
export const getTitlePassenger = (state) => state.order.titlePassenger;
export const getSeatNo = (state) => state.order.seatNo;
export const getScheduleById = (state) => state.order.scheduleById;
export const getBooking = (state) => state.order.booking;
export const getBooking2 = (state) => state.order.booking2;
export const getDetailBooking = (state) => state.order.detailBooking;
export const getDetailBooking2 = (state) => state.order.detailBooking2;
export const getScheduleById2 = (state) => state.order.scheduleById2;

export const {
  setOrders,
  emptyOrders,
  setTripPosition,
  setNamePassenger,
  setTitlePassenger,
  setNoSeat,
} = orderSlice.actions;

export default orderSlice.reducer;
