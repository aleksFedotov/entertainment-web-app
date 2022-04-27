import type { AppProps } from 'next/app';
import { GlobalStyles, PageWrapper, MainWrapper } from '../styles/GlobalStyles';
import { useRouter } from 'next/router';

import Header from '../componets/header/Header';
import SearchBar from '../componets/search_bar/SearchBar';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <GlobalStyles />
      {router.pathname === '/auth' ? (
        <Component {...pageProps} />
      ) : (
        <PageWrapper>
          <Header />
          <MainWrapper>
            <SearchBar path={router.pathname} />
            <Component {...pageProps} />;
          </MainWrapper>
        </PageWrapper>
      )}
    </>
  );
}

export default MyApp;
