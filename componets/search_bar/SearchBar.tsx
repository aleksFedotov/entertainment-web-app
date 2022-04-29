import React, { useState } from 'react';

import { SearchBarWrapper, SearchInput } from './SearchBarStyles';

import SearchIcon from '../../public/assets/icon-search.svg';

import { search } from '../../helpers/search';
import { IMovie, ISearchData } from '../../@types/types';

const SearchBar: React.FC<{
  category: string;
  placeholder: string;
  getSearchResult: (data: ISearchData) => void;
}> = ({ category, placeholder, getSearchResult }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (searchQuery) {
      const searchResult = search(category, searchQuery);
      getSearchResult({ searchResult, searchQuery });

      return;
    }
    getSearchResult({ searchResult: null, searchQuery: '' });
  };
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
