import type { AppProps } from 'next/app';
import { GlobalStyles, PageWrapper, MainWrapper } from '../styles/GlobalStyles';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import store from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import Header from '../componets/header/Header';
import SearchBar from '../componets/search_bar/SearchBar';

let persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />

        {router.pathname === '/auth' ? (
          <Component {...pageProps} />
        ) : (
          <PageWrapper>
            <Header />
            <MainWrapper>
              <SearchBar />
              <Component {...pageProps} />
            </MainWrapper>
          </PageWrapper>
        )}
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
