import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import entertainment from '../models/entertainment';

interface IInitialState {
  isLoggingMode: boolean;
  userId: string | null;
  token: string | null;
  tokenExpirationDate: Date | null;
  bookmarks: string[];
}

const initialState: IInitialState = {
  isLoggingMode: true,
  userId: null,
  token: null,
  tokenExpirationDate: null,
  bookmarks: [],
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
        bookmarks: string[];
        tokenExpirationDate: Date;
      }>
    ) {
      state.userId = action.payload.userId;
      state.token = action.payload.token;
      state.tokenExpirationDate = action.payload.tokenExpirationDate;
      state.bookmarks = action.payload.bookmarks;
    },
    logout(state) {
      state.userId = null;
      state.token = null;
      state.tokenExpirationDate = null;
      state.bookmarks = [];
    },
    toggleLogin(state) {
      state.isLoggingMode = !state.isLoggingMode;
    },

    setAuthMode(state, action: PayloadAction<string>) {
      state.isLoggingMode = action.payload === 'login' ? true : false;
    },
    updateBookmarks(state, action: PayloadAction<string>) {
      const isExistedBookmark = state.bookmarks.includes(action.payload);
      if (isExistedBookmark) {
        state.bookmarks = state.bookmarks.filter(
          (entertainmentId) => entertainmentId !== action.payload
        );
      } else {
        state.bookmarks.push(action.payload);
      }
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
