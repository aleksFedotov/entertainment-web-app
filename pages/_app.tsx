import type { AppProps } from 'next/app';
import { GlobalStyles, PageWrapper, MainWrapper } from '../styles/GlobalStyles';
import Header from '../componets/header/Header';
import SearchBar from '../componets/search_bar/SearchBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <PageWrapper>
        <Header />
        <MainWrapper>
          <SearchBar />
          <Component {...pageProps} />;
        </MainWrapper>
      </PageWrapper>
    </>
  );
}

export default MyApp;
