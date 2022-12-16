import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
import orderReducer from '../features/order/orderSlice';
import userReducer from '../features/user/userSlice';
import authReducer from '../features/auth/authSlice';
import orderHistoryReducer from '../features/order/orderHistorySlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    order: orderReducer,
    user: userReducer,
    auth: authReducer,
    orderHistory: orderHistoryReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
