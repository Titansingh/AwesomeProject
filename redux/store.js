import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import todoReducer from './apiSlice/todoSlice';
import { homePageApi } from './apiSlice/homePageApi';
import { authenticationApi } from './apiSlice/authenticationApi';
import { bookPageApi } from './apiSlice/bookPageApi';
import bookPageReducer from './apiSlice/bookPageSlice';

export const store = configureStore({
  reducer: {
    bookPageReducer,
    todoReducer,
    [homePageApi.reducerPath]: homePageApi.reducer,
    [authenticationApi.reducerPath]: authenticationApi.reducer,
    [bookPageApi.reducerPath]: bookPageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      homePageApi.middleware,
      authenticationApi.middleware,
      bookPageApi.middleware
    ),
});
