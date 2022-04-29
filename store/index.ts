import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

import { IMovie } from '../@types/types';

import Data from '../data.json';

interface IInitialState {
  searchResult: IMovie[] | [];
  searchQuery: string;
}

const initialState: IInitialState = {
  searchResult: [],
  searchQuery: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    resetSearch(state) {
      state.searchResult = [];
    },

    setSearchResult(state, action: PayloadAction<IMovie[]>) {
      state.searchResult = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({ reducer: { search: searchSlice.reducer } });

export default store;
