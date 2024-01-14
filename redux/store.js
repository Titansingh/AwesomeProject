import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import todoReducer from './apiSlice/todoSlice';
import { homePageApi } from './apiSlice/homePageApi';
import { authenticationApi } from './apiSlice/authenticationApi';

export const store = configureStore({
  reducer: {
    todoReducer,
    [homePageApi.reducerPath]: homePageApi.reducer,
    [authenticationApi.reducerPath]: authenticationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(
    homePageApi.middleware,
    authenticationApi.middleware
  ),
});
