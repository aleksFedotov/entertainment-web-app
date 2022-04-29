import styled, { createGlobalStyle } from 'styled-components';

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  desktop_m: customMediaQuery(1200),
  tablet: customMediaQuery(1000),
  tablet_s: customMediaQuery(800),
  phone: customMediaQuery(650),
};

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Outfit-Light';
    src: url('/fonts/Outfit-Light.ttf') format('truetype');
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: 'Outfit-Medium';
    src: url('/fonts/Outfit-Medium.ttf') format('truetype');
    font-style: medium;
    font-weight: 500;
    font-display: swap;
  }

:root {

    /* Primary */
  --color-red: #FC4747;
  --color-dark-blue: #10141E;
  --color-greyish-blue: #5A698F;
  --color-semi-dark-blue: #161D2F;
  --color-white: #FFFFFF;

  --font-size-heading-l: 32px;
  --font-size-heading-m: 24px;
  --font-size-heading-s: 18px;
 
  --font-size-body-m: 15px;
  --font-size-body-s: 13px;

}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-size: var(--font-size-body);
  background-color: var(--color-dark-blue);
  font-family: 'Outfit-Medium';
  font-size: var(--font-size-body-m);
  padding: 3.2rem;
  min-height: 100Vh;

  
  
  ${media.phone} {
    padding: 0 1.6rem;
  }


}

a {
  text-decoration:none;
}

p {

  font-size: var(--font-size-body-m);
}

.swiper_slide {
  width: fit-content !important;
}

h1,h2{
  font-family: 'Outfit-Light';
  font-weight: 300;
}

h3 {
  font-weight: 600;
}

`;

export const PageWrapper = styled.div`
  display: flex;

  width: 100%;
  margin: 0 auto;
  height: calc(100vh - 6.4rem);
  gap: 3.6rem;

  ${media.tablet} {
    flex-direction: column;
    gap: 0;
  }
`;

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  max-width: 129rem;
  width: 100%;
`;
