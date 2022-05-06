import type { AppProps } from 'next/app';
import { GlobalStyles, PageWrapper, MainWrapper } from '../styles/GlobalStyles';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import store from '../store/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../componets/header/Header';
import SearchBar from '../componets/search_bar/SearchBar';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Provider store={store}>
      <GlobalStyles />

      {router.pathname === '/auth' ? (
        <Component {...pageProps} />
      ) : (
        <PageWrapper>
          <Header />
          <MainWrapper>
            <SearchBar />
            <Component {...pageProps} />;
          </MainWrapper>
        </PageWrapper>
      )}
    </Provider>
  );
}

export default MyApp;
