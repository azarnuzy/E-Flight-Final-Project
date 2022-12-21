import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
import orderReducer from '../features/order/orderSlice';
import userReducer from '../features/user/userSlice';
import authReducer from '../features/auth/authSlice';
import notifReducer from '../features/notif/NotifSlice';
import paymentReducer from '../features/payment/PaymentSlice';
import orderHistoryReducer from '../features/order/orderHistorySlice';
import adminReducer from '../features/admin/adminSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    order: orderReducer,
    user: userReducer,
    auth: authReducer,
    notification: notifReducer,
    paymentOrder: paymentReducer,
    orderHistory: orderHistoryReducer,
    admin: adminReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
