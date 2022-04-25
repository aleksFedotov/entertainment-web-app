import React, { useState } from 'react';

import { SearchBarWrapper, SearchInput } from './SearchBarStyles';

import SearchIcon from '../../public/assets/icon-search.svg';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (searchQuery) {
      console.log(searchQuery);
      return;
    }
  };

  return (
    <SearchBarWrapper onSubmit={submitHandler}>
      <SearchIcon />
      <SearchInput
        placeholder="Search for movies or TV series"
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
