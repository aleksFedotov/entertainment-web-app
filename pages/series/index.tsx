import type { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Data from '../../data.json';
import { IMovie, ISearchData } from '../../@types/types';
import { useState } from 'react';

import MoviesGrid from '../../componets/movie_grid/MoviesGrid';
import SearchBar from '../../componets/search_bar/SearchBar';

const Series: NextPage<{ series: IMovie[] }> = ({ series }) => {
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
        <title>TV Series</title>
        <meta name="description" content="Entertainment web app | TV Seriers" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <SearchBar
        placeholder={'Search for TV series'}
        category="TV Series"
        getSearchResult={getSearchResult}
      />
      {searchData.searchResult ? (
        <MoviesGrid
          data={searchData.searchResult}
          header={`Found ${searchData.searchResult.length} results for '${searchData.searchQuery}'`}
        />
      ) : (
        <MoviesGrid data={series} header="TV Series" />
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const series = Data.filter((item) => item.category === 'TV Series');

  return {
    props: {
      series,
    },
  };
};

export default Series;
