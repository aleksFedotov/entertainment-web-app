import type { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import dbConnect from '../../helpers/mongoDB';
import User from '../../models/user';
import convertData from '../../helpers/convertData';

import { IMovie } from '../../@types/types';

import MoviesGrid from '../../componets/movie_grid/MoviesGrid';

const Bookmarked: NextPage<{ bookmarks: IMovie[] }> = ({ bookmarks }) => {
  const { searchQuery, searchResult } = useSelector(
    (state: RootState) => state.search
  );

  console.log(bookmarks[0]);

  const movies = bookmarks.filter((item) => item.category === 'Movie');
  const series = bookmarks.filter((item) => item.category === 'TV Series');

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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = query.id;

  await dbConnect();

  const result = await User.findOne({ _id: id }).populate('bookmarks');

  console.log(result.bookmarks);

  const bookmarks = result.bookmarks.map((doc) => convertData(doc));

  return {
    props: {
      bookmarks: [],
    },
  };
};

export default Bookmarked;
