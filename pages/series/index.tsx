import type { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { IMovie } from '../../@types/types';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import dbConnect from '../../helpers/mongoDB';
import Entertainment from '../../models/entertainment';

import MoviesGrid from '../../componets/movie_grid/MoviesGrid';
import convertData from '../../helpers/convertData';

const Series: NextPage<{ tvSeries: IMovie[] }> = ({ tvSeries }) => {
  const { searchQuery, searchResult } = useSelector(
    (state: RootState) => state.search
  );

  return (
    <>
      <Head>
        <title>TV Series</title>
        <meta name="description" content="Entertainment web app | TV Seriers" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      {searchResult.tv ? (
        <MoviesGrid
          data={searchResult.tv}
          header={`Found ${searchResult.tv.length} results for '${searchQuery}'`}
        />
      ) : (
        <MoviesGrid data={tvSeries} header="TV Series" />
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  await dbConnect();

  const result = await Entertainment.find({ category: 'TV Series' });

  const tvSeries = result.map((doc) => convertData(doc));

  return {
    props: {
      tvSeries,
    },
  };
};

export default Series;
