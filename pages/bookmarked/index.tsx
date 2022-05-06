import type { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import dbConnect from '../../helpers/mongoDB';
import Entertainment from '../../models/entertainment';
import convertData from '../../helpers/convertData';
import { useDispatch } from 'react-redux';
import { searchActions } from '../../store/searchSlice';
import { useEffect } from 'react';
import { IMovie } from '../../@types/types';

import MoviesGrid from '../../componets/movie_grid/MoviesGrid';

const Bookmarked: NextPage<{ marked: IMovie[] }> = ({ marked }) => {
  const { searchQuery, searchResult } = useSelector(
    (state: RootState) => state.search
  );

  const dispatch = useDispatch();
  // To clear search state for all pages during pages change
  useEffect(() => {
    dispatch(searchActions.resetSearch());
  }, [dispatch]);

  const movies = marked.filter((item) => item.category === 'Movie');
  const series = marked.filter((item) => item.category === 'TV Series');

  return (
    <>
      <Head>
        <title>Bookmarked</title>
        <meta name="description" content="Entertainment web app | Bookmarked" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      {searchResult.bookmarked ? (
        <MoviesGrid
          data={searchResult.bookmarked}
          header={`Found ${searchResult.bookmarked.length} results for '${searchQuery}'`}
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
  await dbConnect();

  const result = await Entertainment.find({ isBookmarked: true });

  const marked = result.map((doc) => convertData(doc));

  return {
    props: {
      marked,
    },
  };
};

export default Bookmarked;
