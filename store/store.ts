import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import searchSlice from './searchSlice';

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: { search: searchSlice.reducer, auth: authSlice.reducer },
});

export default store;
