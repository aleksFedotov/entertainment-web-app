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

const Movies: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
  const { searchQuery, searchResult } = useSelector(
    (state: RootState) => state.search
  );

  return (
    <>
      <Head>
        <title>Movies</title>
        <meta name="description" content="Entertainment web app | Movies" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      {searchResult.movie ? (
        <MoviesGrid
          data={searchResult.movie}
          header={`Found ${searchResult.movie.length} results for '${searchQuery}'`}
        />
      ) : (
        <MoviesGrid header="Movies" data={movies} />
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  await dbConnect();

  const result = await Entertainment.find({ category: 'Movie' });

  console.log(result);

  const movies = result.map((doc) => convertData(doc));

  return {
    props: {
      movies,
    },
  };
};

export default Movies;
