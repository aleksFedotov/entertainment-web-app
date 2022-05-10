import { configureStore } from '@reduxjs/toolkit';

import authSlice from './authSlice';
import searchSlice from './searchSlice';
import messageSlice from './messageSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
} from 'redux-persist';

export type RootState = ReturnType<typeof store.getState>;

const reducers = combineReducers({
  search: searchSlice.reducer,
  auth: authSlice.reducer,
  message: messageSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PURGE, REHYDRATE, REGISTER, PERSIST],
      },
    }),
});

export default store;
