import type { AppProps } from 'next/app';
import { GlobalStyles, MainWrapper } from '../styles/GlobalStyles';
import Header from '../componets/header/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <MainWrapper>
        <Header />
        <Component {...pageProps} />;
      </MainWrapper>
    </>
  );
}

export default MyApp;
