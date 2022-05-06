import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  isLoggedIn: boolean;
  isLoggingMode: boolean;
  userId: string | null;
  token: string | null;
}

const initialState: IInitialState = {
  isLoggedIn: false,
  isLoggingMode: true,
  userId: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ token: string; userId: string }>) {
      state.isLoggedIn = true;
      state.userId = action.payload.userId;
      state.token = action.payload.token;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userId = null;
      state.token = null;
    },
    toggleLogin(state) {
      state.isLoggingMode = !state.isLoggingMode;
    },

    setAuthMode(state, action: PayloadAction<string>) {
      state.isLoggingMode = action.payload === 'login' ? true : false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
