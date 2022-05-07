import { Action, configureStore } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import authSlice from './authSlice';
import searchSlice from './searchSlice';

export type RootState = ReturnType<typeof store.getState>;

// middleware to managing token, useid and expirationdate in local storage

const authMiddleware = (): Middleware => {
  return (store) => (next) => (action) => {
    if (action.type === 'auth/login') {
      console.log(action);
      localStorage.setItem(
        'userData',
        JSON.stringify({
          userId: action.payload.userId,
          token: action.payload.token,
          expiration: action.payload.tokenExpirationDate,
        })
      );
    } else if (action.type === 'auth/logout') {
      localStorage.removeItem('userData');
    }
    return next(action);
  };
};

const store = configureStore({
  reducer: { search: searchSlice.reducer, auth: authSlice.reducer },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).prepend(authMiddleware()),
});

export default store;
