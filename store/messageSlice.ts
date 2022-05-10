import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  isLoginMessage: boolean;
}

const initialState: IInitialState = {
  isLoginMessage: false,
};

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    showLoginMessage(state) {
      state.isLoginMessage = true;
    },
    hideLoginMessage(state) {
      state.isLoginMessage = false;
    },
  },
});

export const messageActions = messageSlice.actions;

export default messageSlice;
