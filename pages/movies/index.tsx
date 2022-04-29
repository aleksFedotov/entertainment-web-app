import type { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Data from '../../data.json';
import { IMovie, ISearchData } from '../../@types/types';
import { useState } from 'react';

import SearchBar from '../../componets/search_bar/SearchBar';
import MoviesGrid from '../../componets/movie_grid/MoviesGrid';

const Movies: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
  const [searchData, setSearchData] = useState<ISearchData>({
    searchResult: null,
    searchQuery: '',
  });

  const getSearchResult = (serchData: ISearchData) => {
    setSearchData(serchData);
  };

  return (
    <>
      <Head>
        <title>Movies</title>
        <meta name="description" content="Entertainment web app | Movies" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <SearchBar
        placeholder={'Search for movies'}
        category="Movie"
        getSearchResult={getSearchResult}
      />
      {searchData.searchResult ? (
        <MoviesGrid
          data={searchData.searchResult}
          header={`Found ${searchData.searchResult.length} results for '${searchData.searchQuery}'`}
        />
      ) : (
        <MoviesGrid header="Movies" data={movies} />
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const movies = Data.filter((movie) => movie.category === 'Movie');

  return {
    props: {
      movies,
    },
  };
};

export default Movies;
