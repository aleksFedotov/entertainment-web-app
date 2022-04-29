import type { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { IMovie, ISearchData } from '../@types/types';

import Data from '../data.json';

import Slider from '../componets/slider/Slider';
import MoviesGrid from '../componets/movie_grid/MoviesGrid';
import SearchBar from '../componets/search_bar/SearchBar';
import { useState } from 'react';

const Home: NextPage<{ data: IMovie[] }> = ({ data }) => {
  const [searchData, setSearchData] = useState<ISearchData>({
    searchResult: null,
    searchQuery: '',
  });

  const getSearchResult = (serchData: ISearchData) => {
    setSearchData(serchData);
  };

  const trendingMovies = data.filter((movie) => movie.isTrending);
  const recomendedMovies = data.filter((movie) => !movie.isTrending);

  return (
    <>
      <Head>
        <title>Entertainment web app </title>
        <meta name="description" content="Entertainment web app | Home" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <SearchBar
        placeholder={'Search for movies or TV series'}
        category="All"
        getSearchResult={getSearchResult}
      />
      <Slider data={trendingMovies} />
      {searchData.searchResult ? (
        <MoviesGrid
          data={searchData.searchResult}
          header={`Found ${searchData.searchResult.length} results for '${searchData.searchQuery}'`}
        />
      ) : (
        <MoviesGrid data={recomendedMovies} header="Recommended for you" />
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = Data;

  return {
    props: {
      data,
    },
  };
};

export default Home;
