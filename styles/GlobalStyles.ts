import { createGlobalStyle } from 'styled-components';
import outfitLigth from '../public/fonts/Outfit-Light.ttf';

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  tablet: customMediaQuery(950),
  phone: customMediaQuery(767),
};

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Outfit-Light';
    src: url('/fonts/Outfit_Ligth.ttf') format('truetype');
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
  display: flex;
  gap: 3.6rem;
  
  ${media.phone} {
    padding: 0 2.4rem;
  }

}

a {
  text-decoration:none;
}

p {

  font-size: var(--font-size-body-m);
}

main {
  max-width: 144rem;
  width: 100%;
  margin: 0 auto;
  height: fit-content;
  background-color: transparent;
}


`;
