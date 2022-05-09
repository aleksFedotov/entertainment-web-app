import { configureStore } from '@reduxjs/toolkit';

import { Middleware } from 'redux';
import authSlice from './authSlice';
import searchSlice from './searchSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
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
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

// // middleware to managing token, useid and expirationdate in local storage

// const authMiddleware = (): Middleware => {
//   return (store) => (next) => (action) => {
//     if (action.type === 'auth/login') {
//       localStorage.setItem(
//         'userData',
//         JSON.stringify({
//           userId: action.payload.userId,
//           token: action.payload.token,
//           expiration: action.payload.tokenExpirationDate,
//           bookmarks: action.payload.bookmarks,
//         })
//       );
//     } else if (action.type === 'auth/logout') {
//       localStorage.removeItem('userData');
//     }

//     return next(action);
//   };
// };

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
