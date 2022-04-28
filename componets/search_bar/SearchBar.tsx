import React, { useState } from 'react';

import { SearchBarWrapper, SearchInput } from './SearchBarStyles';

import SearchIcon from '../../public/assets/icon-search.svg';

const SearchBar: React.FC<{ path: string }> = ({ path }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  console.log(path);
  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (searchQuery) {
      console.log(searchQuery);
      return;
    }
  };

  let placeholder = 'Search for movies or TV series';

  if (path === '/movies') {
    placeholder = 'Search for movies';
  } else if (path === '/series') {
    placeholder = 'Search for TV series';
  } else if (path === 'bookmarked') {
    placeholder = 'Search for bookmarked shows';
  }

  return (
    <SearchBarWrapper onSubmit={submitHandler}>
      <SearchIcon />
      <SearchInput
        placeholder={placeholder}
        name="searchQuery"
        type="text"
        onChange={(e: React.FormEvent<HTMLInputElement | HTMLInputElement>) => {
          setSearchQuery(e.currentTarget.value);
        }}
        value={searchQuery}
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;
