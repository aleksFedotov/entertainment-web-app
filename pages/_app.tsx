import type { AppProps } from 'next/app';
import {
  GlobalStyles,
  PageWrapper,
  ContentWrapper,
} from '../styles/GlobalStyles';
import Header from '../componets/header/Header';
import SearchBar from '../componets/search_bar/SearchBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <PageWrapper>
        <Header />
        <ContentWrapper>
          <SearchBar />
          <Component {...pageProps} />;
        </ContentWrapper>
      </PageWrapper>
    </>
  );
}

export default MyApp;
