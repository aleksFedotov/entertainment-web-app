import type { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Data from '../../data.json';
import { IMovie } from '../../@types/types';
import MoviesGrid from '../../componets/movie_grid/MoviesGrid';

const Series: NextPage<{ series: IMovie[] }> = ({ series }) => {
  return (
    <>
      <Head>
        <title>TV Series</title>
        <meta name="description" content="Entertainment web app | TV Seriers" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <MoviesGrid header="Series" data={series} />
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
