import type { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Auth from '../../componets/auth/Auth';

const Authentication: NextPage = () => {
  return (
    <>
      <Head>
        <title>Authentication</title>
        <meta
          name="description"
          content="Entertainment web app | Authentication"
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Auth />
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async () => {

//   return {

//   };
// };

export default Authentication;
