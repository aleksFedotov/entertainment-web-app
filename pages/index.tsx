import type { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { IMovie } from '../@types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import dbConnect from '../helpers/mongoDB';
import Entertainment from '../models/entertainment';
import { useDispatch } from 'react-redux';
import { searchActions } from '../store';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Slider from '../componets/slider/Slider';
import MoviesGrid from '../componets/movie_grid/MoviesGrid';
import convertData from '../helpers/convertData';

const Home: NextPage<{
  trendingEntertaiment: IMovie[];
  recomendedEntertaiment: IMovie[];
}> = ({ trendingEntertaiment, recomendedEntertaiment }) => {
  const { searchResult, searchQuery } = useSelector(
    (state: RootState) => state.search
  );
  const router = useRouter();
  const dispatch = useDispatch();

  // To clear search state for all pages during pages change
  useEffect(() => {
    dispatch(searchActions.resetSearch());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Entertainment web app </title>
        <meta name="description" content="Entertainment web app | Home" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      {searchResult.all ? (
        <MoviesGrid
          data={searchResult.all}
          header={`Found ${searchResult.all.length} results for '${searchQuery}'`}
        />
      ) : (
        <>
          <Slider data={trendingEntertaiment} />
          <MoviesGrid
            data={recomendedEntertaiment}
            header="Recommended for you"
          />
        </>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  await dbConnect();

  const resultTrending = await Entertainment.find({ isTrending: true });
  const resultRecomended = await Entertainment.find({ isTrending: false });

  const trendingEntertaiment = resultTrending.map((doc) => convertData(doc));

  const recomendedEntertaiment = resultRecomended.map((doc) =>
    convertData(doc)
  );

  return {
    props: {
      trendingEntertaiment,
      recomendedEntertaiment,
    },
  };
};

export default Home;
