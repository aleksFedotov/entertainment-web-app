import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { SearchBarWrapper, SearchInput } from './SearchBarStyles';
import SearchIcon from '../../public/assets/icon-search.svg';

import { useDispatch } from 'react-redux';
import { searchActions } from '../../store';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import dbConnect from '../../helpers/mongoDB';
import Entertainment from '../../models/entertainment';

import { IMovie, ISearchData } from '../../@types/types';
import convertData from '../../helpers/convertData';

// const SearchBar: React.FC<{
//   category: string;

//   getSearchResult: (data: ISearchData) => void;
// }> = ({ category, getSearchResult ) => {
//   const [searchQuery, setSearchQuery] = useState<string>('');

//   const router = useRouter();

//   let placeholder = 'Search for movies or TV series';
//   if (router.pathname === '/movies') {
//     placeholder = 'Search for movies';
//   } else if (router.pathname === '/series') {
//     placeholder = 'Search for TV series';
//   } else if (router.pathname === '/bookmarked') {
//     placeholder = 'Search for bookmarked shows';
//   }

//   const submitHandler = (e: React.SyntheticEvent) => {
//     e.preventDefault();
//     if (searchQuery) {
//       const searchResult = search(category, searchQuery);
//       getSearchResult({ searchResult, searchQuery });

//       return;
//     }
//     getSearchResult({ searchResult: null, searchQuery: '' });
//   };
//   return (
//     <SearchBarWrapper onSubmit={submitHandler}>
//       <SearchIcon />
//       <SearchInput
//         placeholder={placeholder}
//         name="searchQuery"
//         type="text"
//         onChange={(e: React.FormEvent<HTMLInputElement | HTMLInputElement>) => {
//           setSearchQuery(e.currentTarget.value);
//         }}
//         value={searchQuery}
//       />
//     </SearchBarWrapper>
//   );
// };

const SearchBar: React.FC = () => {
  // const [searchQuery, setSearchQuery] = useState<string>('');
  const searchQuery = useSelector(
    (state: RootState) => state.search.searchQuery
  );

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
  } else if (router.pathname === '/bookmarked') {
    placeholder = 'Search for bookmarked shows';
    category = 'bookmarked';
  }

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (searchQuery) {
      try {
        const res = await fetch(
          `/api/search/${searchQuery}?category=${category}`
        );

        if (!res.ok) {
          throw new Error('Cannot find');
        }
        const searchData = await res.json();
        if (searchData.data.length === 0) {
          searchData.data = null;
        }

        dispatch(
          searchActions.setSearchResult({
            result: searchData.data,
            category: category,
          })
        );
      } catch (error) {
        console.log(error);
      }
      return;
    }

    dispatch(searchActions.resetSearch());
  };

  return (
    <SearchBarWrapper onSubmit={submitHandler}>
      <SearchIcon />
      <SearchInput
        placeholder={placeholder}
        name="searchQuery"
        type="text"
        onChange={(e: React.FormEvent<HTMLInputElement | HTMLInputElement>) => {
          dispatch(searchActions.setSearchQuery(e.currentTarget.value));
        }}
        value={searchQuery}
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;
