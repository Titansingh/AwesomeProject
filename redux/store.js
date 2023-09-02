/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from "./apiSlice/todoSlice"

export const store = configureStore({
  reducer: todoReducer,
});
