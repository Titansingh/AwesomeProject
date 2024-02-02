import { configureStore, getDefaultMiddleware , combineReducers} from '@reduxjs/toolkit';

import { authenticationApi } from './apiSlice/authenticationApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

let persistConfig = {
  key:'root',
  storage,
}
let rootReducer = combineReducers({
  [authenticationApi.reducerPath]: authenticationApi.reducer, 
})
let persistedReducer = persistReducer(persistConfig,rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
    
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authenticationApi.middleware,  
    ),
});
setupListeners(store.dispatch)
