import type { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import dbConnect from '../../helpers/mongoDB';
import User from '../../models/user';
import convertData from '../../helpers/convertData';
import { AnimatePresence } from 'framer-motion';

import { IMovie } from '../../@types/types';

import MoviesGrid from '../../componets/movie_grid/MoviesGrid';

const Bookmarked: NextPage<{ bookmarks: IMovie[] }> = ({ bookmarks }) => {
  const { searchQuery, searchResult } = useSelector(
    (state: RootState) => state.search
  );

  const bookmarksArray = useSelector(
    (state: RootState) => state.auth.bookmarks
  );

  const movies = bookmarks.filter(
    (item) => item.category === 'Movie' && bookmarksArray.includes(item._id)
  );
  const series = bookmarks.filter(
    (item) => item.category === 'TV Series' && bookmarksArray.includes(item._id)
  );

  let content;

  if (!searchResult.bookmarked && movies.length === 0 && series.length === 0) {
    content = (
      <p
        style={{
          color: 'var(--color-white)',
          fontSize: '2.4rem',
          textAlign: 'center',
        }}
      >
        You have no bookmark, nothing to show
      </p>
    );
  } else if (searchResult.bookmarked) {
    content = (
      <MoviesGrid
        data={searchResult.bookmarked}
        header={`Found ${searchResult.bookmarked.length} results for '${searchQuery}'`}
      />
    );
  } else {
    content = (
      <>
        {movies.length > 0 && (
          <AnimatePresence>
            <MoviesGrid header="Bookmarked Movies" data={movies} />
          </AnimatePresence>
        )}
        {series.length > 0 && (
          <MoviesGrid header="Bookmarked TV Series" data={series} />
        )}
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Bookmarked</title>
        <meta name="description" content="Entertainment web app | Bookmarked" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      {content}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = query.id;

  await dbConnect();

  const result = await User.findOne({ _id: id }).populate('bookmarks');
  const resBookmarks: any[] = result.bookmarks;

  const bookmarks = resBookmarks.map((doc) => convertData(doc));

  return {
    props: {
      bookmarks,
    },
  };
};

export default Bookmarked;
