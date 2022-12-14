import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
import orderReducer from '../features/order/orderSlice';
import userReducer from '../features/user/userSlice';
import authReducer from '../features/auth/authSlice';
import notifReducer from '../features/notif/NotifSlice'

export const store = configureStore({
  reducer: {
    search: searchReducer,
    order: orderReducer,
    user: userReducer,
    auth: authReducer,
    notif: notifReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
