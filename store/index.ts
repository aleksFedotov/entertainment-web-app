import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

import { IMovie } from '../@types/types';

import Data from '../data.json';

interface IInitialState {
  searchResult: ISearchResult;
  searchQuery: string;
  isLogin: boolean;
}

interface ISearchResult {
  all: IMovie[] | null;
  movie: IMovie[] | null;
  tv: IMovie[] | null;
  bookmarked: IMovie[] | null;
}

const initialState: IInitialState = {
  searchResult: {
    all: null,
    movie: null,
    tv: null,
    bookmarked: null,
  },
  searchQuery: '',
  isLogin: true,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    resetSearch(state) {
      state.searchResult = {
        all: null,
        movie: null,
        tv: null,
        bookmarked: null,
      };
      state.searchQuery = '';
    },

    setSearchResult(
      state,
      action: PayloadAction<{ result: IMovie[]; category: string }>
    ) {
      const { category, result } = action.payload;
      state.searchResult[category as keyof ISearchResult] = result;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },

    toggleLogin(state) {
      state.isLogin = !state.isLogin;
    },

    setAuthMode(state, action: PayloadAction<string>) {
      state.isLogin = action.payload === 'login' ? true : false;
    },
  },
});

export const searchActions = searchSlice.actions;

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({ reducer: { search: searchSlice.reducer } });

export default store;
