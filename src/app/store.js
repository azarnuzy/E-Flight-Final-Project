import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
import orderReducer from '../features/order/orderSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
