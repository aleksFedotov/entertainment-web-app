import type { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Data from '../../data.json';
import { IMovie, ISearchData } from '../../@types/types';
import { useState } from 'react';

import MoviesGrid from '../../componets/movie_grid/MoviesGrid';
import SearchBar from '../../componets/search_bar/SearchBar';

const Bookmarked: NextPage<{ marked: IMovie[] }> = ({ marked }) => {
  const [searchData, setSearchData] = useState<ISearchData>({
    searchResult: null,
    searchQuery: '',
  });

  const getSearchResult = (serchData: ISearchData) => {
    setSearchData(serchData);
  };
  const movies = marked.filter((item) => item.category === 'Movie');
  const series = marked.filter((item) => item.category === 'TV Series');

  return (
    <>
      <Head>
        <title>Bookmarked</title>
        <meta name="description" content="Entertainment web app | Bookmarked" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <SearchBar
        placeholder={'Search for bookmarked shows'}
        category="Bookmarked"
        getSearchResult={getSearchResult}
      />

      {searchData.searchResult ? (
        <MoviesGrid
          data={searchData.searchResult}
          header={`Found ${searchData.searchResult.length} results for '${searchData.searchQuery}'`}
        />
      ) : (
        <>
          {movies && <MoviesGrid header="Bookmarked Movies" data={movies} />}
          {series && <MoviesGrid header="Bookmarked TV Series" data={series} />}
        </>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const marked = Data.filter((item) => item.isBookmarked);

  return {
    props: {
      marked,
    },
  };
};

export default Bookmarked;
