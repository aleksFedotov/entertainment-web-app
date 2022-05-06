import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IMovie } from '../@types/types';

interface IInitialState {
  searchResult: ISearchResult;
  searchQuery: string;
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
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
