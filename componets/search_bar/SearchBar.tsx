import React from 'react';
import { useRouter } from 'next/router';
import useHttp from '../../hooks/useHttp';

import { SearchBarWrapper, SearchInput } from './SearchBarStyles';
import SearchIcon from '../../public/assets/icon-search.svg';

import { useDispatch } from 'react-redux';
import { searchActions } from '../../store/searchSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const SearchBar: React.FC = () => {
  const { sendRequest } = useHttp();
  const searchQuery = useSelector(
    (state: RootState) => state.search.searchQuery
  );
  const uid = useSelector((state: RootState) => state.auth.userId);

  const router = useRouter();
  const dispatch = useDispatch();

  let placeholder = 'Search for movies or TV series';
  let category = 'all';

  if (router.pathname === '/movies') {
    placeholder = 'Search for movies';
    category = 'movie';
  } else if (router.pathname === '/series') {
    placeholder = 'Search for TV series';
    category = 'tv';
  } else if (router.pathname === '/bookmarked/[id]') {
    placeholder = 'Search for bookmarked shows';
    category = 'bookmarked';
  }

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (searchQuery) {
      try {
        const searchData = await sendRequest({
          url: `/api/search/${searchQuery}?category=${category}&user=${uid}`,
        });

        dispatch(
          searchActions.setSearchResult({
            result: searchData.data,
            category: category,
          })
        );
      } catch (err) {}
      return;
    }

    dispatch(searchActions.resetSearch());
  };

  return (
    <SearchBarWrapper onSubmit={submitHandler} data-testid="search-bar">
      <SearchIcon data-testid="search-icon" />
      <label id="search">
        <SearchInput
          placeholder={placeholder}
          name="searchQuery"
          type="text"
          onChange={(
            e: React.FormEvent<HTMLInputElement | HTMLInputElement>
          ) => {
            dispatch(searchActions.setSearchQuery(e.currentTarget.value));
          }}
          value={searchQuery}
          aria-labelledby="search"
        />
      </label>
    </SearchBarWrapper>
  );
};

export default SearchBar;
