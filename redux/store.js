import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { authenticationApi } from './apiSlice/authenticationApi';


export const store = configureStore({
  reducer: {
    
   
    [authenticationApi.reducerPath]: authenticationApi.reducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
    
      authenticationApi.middleware,
      
    ),
});
