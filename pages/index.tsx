import type { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { IMovie } from '../@types/types';

import Data from '../data.json';

import Slider from '../componets/home/slider/Slider';

const Home: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
  const trendingMovies = movies.filter((movie) => movie.isTrending);

  return (
    <>
      <Head>
        <title>Entertainment web app </title>
        <meta name="description" content="Entertainment web app" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Slider data={trendingMovies} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const movies = Data;

  return {
    props: {
      movies,
    },
  };
};

export default Home;
