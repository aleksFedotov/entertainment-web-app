import type { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Data from '../../data.json';
import { IMovie } from '../../@types/types';

import MoviesGrid from '../../componets/movie_grid/MoviesGrid';

const Movies: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
  return (
    <>
      <Head>
        <title>Movies</title>
        <meta name="description" content="Entertainment web app | Movies" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <MoviesGrid header="Movies" data={movies} />
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
