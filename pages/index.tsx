import type { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { IMovie } from '../@types/types';

import Data from '../data.json';

import Slider from '../componets/slider/Slider';
import MoviesGrid from '../componets/movie_grid/MoviesGrid';

const Home: NextPage<{ data: IMovie[] }> = ({ data }) => {
  const trendingMovies = data.filter((movie) => movie.isTrending);
  const recomendedMovies = data.filter((movie) => !movie.isTrending);

  return (
    <>
      <Head>
        <title>Entertainment web app </title>
        <meta name="description" content="Entertainment web app | Home" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Slider data={trendingMovies} />
      <MoviesGrid data={recomendedMovies} header="Recommended for you" />
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
