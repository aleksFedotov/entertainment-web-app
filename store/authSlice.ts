import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  isLoggingMode: boolean;
  userId: string | null;
  token: string | null;
  tokenExpirationDate: Date | null;
}

const initialState: IInitialState = {
  isLoggingMode: true,
  userId: null,
  token: null,
  tokenExpirationDate: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(
      state,
      action: PayloadAction<{
        token: string;
        userId: string;
        tokenExpirationDate: Date;
      }>
    ) {
      state.userId = action.payload.userId;
      state.token = action.payload.token;
      state.tokenExpirationDate = action.payload.tokenExpirationDate;
    },
    logout(state) {
      state.userId = null;
      state.token = null;
      state.tokenExpirationDate = null;
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
